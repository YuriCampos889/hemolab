import vtkActor from '@kitware/vtk.js/Rendering/Core/Actor';
import vtkMapper from '@kitware/vtk.js/Rendering/Core/Mapper';
import vtkPolyData from '@kitware/vtk.js/Common/DataModel/PolyData';

function getCellConnectivity(polyData, cellId) {
  const lines = polyData.getLines().getData();
  if (!lines || lines.length === 0) {
    return null;
  }

  let i = 0;
  let currentCell = 0;
  while (i < lines.length) {
    const numPoints = lines[i];
    if (currentCell === cellId) {
      return lines.slice(i, i + numPoints + 1);
    }
    i += numPoints + 1;
    currentCell++;
  }
  return null;
}

class HighlightManager {
  constructor(renderer, renderWindow) {
    if (!renderer || !renderWindow) {
      throw new Error('HighlightManager requer uma instância de renderer e renderWindow.');
    }

    this.renderer = renderer;
    this.renderWindow = renderWindow;
    this.sourceData = null;

    this.actor = vtkActor.newInstance();
    this.mapper = vtkMapper.newInstance();
    this.polyData = vtkPolyData.newInstance();

    this.actor.setMapper(this.mapper);
    this.mapper.setInputData(this.polyData);

    this.actor.getProperty().setColor(1, 0, 1);
    this.actor.getProperty().setLineWidth(5);
    this.actor.getProperty().setOpacity(1.0);

    this.actor.setVisibility(false);
    this.renderer.addActor(this.actor);
  }

  setSourceData(sourceData) {
    this.sourceData = sourceData;
  }

  highlightCell(cellId) {
    if (!this.sourceData || cellId < 0) {
      this.clearHighlight();
      return;
    }

    const connectivity = getCellConnectivity(this.sourceData, cellId);

    if (!connectivity) {
      console.warn(`Célula com ID ${cellId} não encontrada.`);
      this.clearHighlight();
      return;
    }

    this.polyData.setPoints(this.sourceData.getPoints());
    this.polyData.getLines().setData(connectivity, 1);
    this.polyData.modified();

    this.actor.setVisibility(true);
    this.renderWindow.render();
  }

  clearHighlight() {
    if (this.actor.getVisibility()) {
      this.actor.setVisibility(false);
      this.renderWindow.render();
    }
  }

  destroy() {
    this.renderer.removeActor(this.actor);
    this.mapper.delete();
    this.actor.delete();
    this.polyData.delete();
  }
}

export default HighlightManager;