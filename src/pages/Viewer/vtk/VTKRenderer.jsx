import React, { useRef, useEffect } from 'react';
import '@kitware/vtk.js/Rendering/Profiles/Geometry';

// Core do VTK
import vtkRenderWindow from '@kitware/vtk.js/Rendering/Core/RenderWindow';
import vtkRenderer from '@kitware/vtk.js/Rendering/Core/Renderer';
import vtkOpenGLRenderWindow from '@kitware/vtk.js/Rendering/OpenGL/RenderWindow';
import vtkRenderWindowInteractor from '@kitware/vtk.js/Rendering/Core/RenderWindowInteractor';
import vtkInteractorStyleTrackballCamera from '@kitware/vtk.js/Interaction/Style/InteractorStyleTrackballCamera';

// Atores e Mapeadores
import vtkActor from '@kitware/vtk.js/Rendering/Core/Actor';
import vtkMapper from '@kitware/vtk.js/Rendering/Core/Mapper';
import vtkColorTransferFunction from '@kitware/vtk.js/Rendering/Core/ColorTransferFunction';
import vtkColorMaps from '@kitware/vtk.js/Rendering/Core/ColorTransferFunction/ColorMaps';
import { ColorMode, ScalarMode } from '@kitware/vtk.js/Rendering/Core/Mapper/Constants';

// Filtros e Widgets
import vtkTubeFilter from '@kitware/vtk.js/Filters/General/TubeFilter';
import { VaryRadius } from '@kitware/vtk.js/Filters/General/TubeFilter/Constants';
import vtkScalarBarActor from '@kitware/vtk.js/Rendering/Core/ScalarBarActor';
import vtkOrientationMarkerWidget from '@kitware/vtk.js/Interaction/Widgets/OrientationMarkerWidget';
import vtkAnnotatedCubeActor from '@kitware/vtk.js/Rendering/Core/AnnotatedCubeActor';

// Nossos módulos locais
import HighlightManager from './HighlightManager';
import SCALAR_METADATA from "./scalarMetadata"; //MESMO ERRO!!!

export default function VTKRenderer({ source, config, highlightedCellId }) {
  const vtkContainerRef = useRef(null);
  const vtkContext = useRef(null);

  // ==========================================
  // EFEITO 1: INICIALIZAÇÃO (Roda só 1 vez)
  // ==========================================
  useEffect(() => {
    if (!vtkContext.current && vtkContainerRef.current) {
      const container = vtkContainerRef.current;
      
      // 1. Cria o Motor Gráfico
      const renderWindow = vtkRenderWindow.newInstance();
      const renderer = vtkRenderer.newInstance({ background: [0.1, 0.12, 0.15] }); // Fundo escuro elegante
      renderWindow.addRenderer(renderer);

      const openGLRenderWindow = vtkOpenGLRenderWindow.newInstance();
      renderWindow.addView(openGLRenderWindow);
      openGLRenderWindow.setContainer(container);
      
      const { width, height } = container.getBoundingClientRect();
      openGLRenderWindow.setSize(width, height);

      // 2. Cria a Câmera e Interação (Mouse)
      const interactor = vtkRenderWindowInteractor.newInstance();
      interactor.setView(openGLRenderWindow);
      interactor.initialize();
      interactor.bindEvents(container);
      interactor.setInteractorStyle(vtkInteractorStyleTrackballCamera.newInstance());

      // 3. Cria Ferramentas (Tubo, Cores, Legenda)
      const lookupTable = vtkColorTransferFunction.newInstance();
      const scalarBar = vtkScalarBarActor.newInstance();
      
      const tubeFilter = vtkTubeFilter.newInstance({
        capping: true,
        numberOfSides: 20, // Mais lados = tubo mais redondo e suave
      });

      const mapper = vtkMapper.newInstance({
        interpolateScalarsBeforeMapping: true,
        useLookupTableScalarRange: true,
        lookupTable,
        scalarVisibility: true,
      });

      const actor = vtkActor.newInstance();
      actor.setMapper(mapper);
      mapper.setInputConnection(tubeFilter.getOutputPort());
      
      // Melhora a iluminação (Efeito plástico/brilhante nas artérias)
      actor.getProperty().setLighting(true);
      actor.getProperty().setInterpolationToPhong();
      actor.getProperty().setSpecular(0.4);
      actor.getProperty().setSpecularPower(30);

      // Configura a Legenda de Cores
      scalarBar.setScalarsToColors(lookupTable);
      scalarBar.setBarPosition([0.85, 0.1]);
      scalarBar.setBarSize([0.1, 0.8]);
      scalarBar.setVisibility(false);
      
      renderer.addActor(actor);
      renderer.addActor(scalarBar);

      // 4. Cubo de Orientação 3D (Canto da tela)
      const cubo = vtkAnnotatedCubeActor.newInstance();
      const widgetOrientation = vtkOrientationMarkerWidget.newInstance({
        actor: cubo, interactor,
      });
      widgetOrientation.setViewportCorner(vtkOrientationMarkerWidget.Corners.BOTTOM_LEFT);
      widgetOrientation.setViewportSize(0.15);
      widgetOrientation.setEnabled(true);

      // 5. Nosso gerenciador de Destaque Magenta
      const highlightManager = new HighlightManager(renderer, renderWindow);
      
      // Guarda tudo na memória do React
      vtkContext.current = {
        renderWindow, renderer, openGLRenderWindow, interactor,
        lookupTable, tubeFilter, mapper, actor, highlightManager, scalarBar
      };

      // Listener para redimensionar a tela automaticamente
      const resizeObserver = new ResizeObserver(() => {
        if (vtkContext.current) {
          const { width, height } = container.getBoundingClientRect();
          vtkContext.current.openGLRenderWindow.setSize(width, height);
          vtkContext.current.renderWindow.render();
        }
      });
      resizeObserver.observe(container);
      vtkContext.current.resizeObserver = resizeObserver;
    }

    // Função de Limpeza (Desmontar Componente)
    return () => {
      if (vtkContext.current) {
        const ctx = vtkContext.current;
        if (ctx.resizeObserver) ctx.resizeObserver.disconnect();
        if (ctx.highlightManager) ctx.highlightManager.destroy();
        if (ctx.interactor) { ctx.interactor.unbindEvents(); ctx.interactor.delete(); }
        if (ctx.openGLRenderWindow) ctx.openGLRenderWindow.delete();
        if (ctx.renderer) ctx.renderer.delete();
        if (ctx.renderWindow) ctx.renderWindow.delete();
        vtkContext.current = null;
      }
    };
  }, []);

  // ==========================================
  // EFEITO 2: QUANDO UM NOVO MODELO É CARREGADO
  // ==========================================
  useEffect(() => {
    if (vtkContext.current && source) {
      const { tubeFilter, highlightManager, renderWindow, renderer } = vtkContext.current;

      const pd = source.getPointData();
      const radiusArray = pd.getArrayByName('Radius') || pd.getArrayByName('radius');

      // Se o arquivo tiver uma matriz de Raio, o tubo obedece o tamanho real
      if (radiusArray) {
          const name = radiusArray.getName();
          tubeFilter.setInputArrayToProcess(0, name, 'PointData', 'Scalars');
          tubeFilter.setVaryRadius(VaryRadius.VARY_RADIUS_BY_ABSOLUTE_SCALAR);
      } else {
          // Se não tiver raio no arquivo, cria um tubo de tamanho fixo 1.0
          tubeFilter.setVaryRadius(VaryRadius.VARY_RADIUS_OFF);
          tubeFilter.setRadius(1.0);
      }
      
      tubeFilter.setInputData(source);
      highlightManager.setSourceData(source);

      // Centraliza a câmera no novo modelo
      renderer.resetCamera();
      renderWindow.render();
    }
  }, [source]);

  // ==========================================
  // EFEITO 3: QUANDO O USUÁRIO MUDA CORES/OPACIDADE
  // ==========================================
  useEffect(() => {
    if (vtkContext.current && config && source) {
      const { actor, lookupTable, renderWindow, mapper, scalarBar } = vtkContext.current;

      try {
        actor.getProperty().setOpacity(config.opacity / 100);
        
        // Renderização por linhas ou tubo sólido
        actor.getProperty().setRepresentation(config.tubeEnabled ? 2 : 1); 

        // Paleta de Cores (Preset)
        if (config.preset) {
          const preset = vtkColorMaps.getPresetByName(config.preset);
          if (preset) {
            lookupTable.applyColorMap(preset);
            lookupTable.updated();
          }
        }

        let isColoringByArray = false;

        // Lógica de Pintar pela Física (Ex: Pressão, Velocidade)
        if (config.colorBy && typeof config.colorBy === 'string' && config.colorBy.includes(':')) {
          const [location, arrayName] = config.colorBy.split(':');
          const usePointData = location === 'PointData';
          const dataSet = usePointData ? source.getPointData() : source.getCellData();
          const activeArray = dataSet.getArrayByName(arrayName.trim());

          if (activeArray) {
            isColoringByArray = true;
            dataSet.setActiveScalars(arrayName.trim());
            
            const [min, max] = activeArray.getRange();
            const safeMax = (min === max) ? min + 0.00001 : max; // Evita divisão por zero

            lookupTable.setMappingRange(min, safeMax);
            lookupTable.updated();

            mapper.set({
              colorByArrayName: arrayName.trim(),
              colorMode: ColorMode.MAP_SCALARS,
              scalarMode: usePointData ? ScalarMode.USE_POINT_FIELD_DATA : ScalarMode.USE_CELL_FIELD_DATA,
              scalarVisibility: true,
            });

            if (scalarBar) {
              scalarBar.setVisibility(true);
              const meta = SCALAR_METADATA[arrayName.trim()];
              scalarBar.setAxisLabel(meta ? meta.label : arrayName.trim());
              scalarBar.modified();
            }
          }
        }

        // Se não escolheu nenhuma variável física, pinta de cor sólida
        if (!isColoringByArray) {
          mapper.setScalarVisibility(false);
          if (scalarBar) scalarBar.setVisibility(false);
          // O ADAN foi pintado de uma cor vermelha sangue levemente metálica como padrão
          actor.getProperty().setColor(0.8, 0.1, 0.1); 
        }

        renderWindow.render();
      } catch (error) {
        console.error("Erro ao aplicar configurações visuais:", error);
      }
    }
  }, [config, source]);

  // ==========================================
  // EFEITO 4: QUANDO CLICA NA TABELA (DESTAQUE)
  // ==========================================
  useEffect(() => {
    if (vtkContext.current?.highlightManager) {
      vtkContext.current.highlightManager.highlightCell(highlightedCellId);
    }
  }, [highlightedCellId]);

  // Retorna a DIV que vai abraçar o WebGL
  return <div ref={vtkContainerRef} style={{ width: '100%', height: '100%' }} />;
}