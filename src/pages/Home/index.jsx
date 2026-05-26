import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Clock, ArrowRight, BarChart2, Zap, Activity, PlayCircle, User, CheckCircle2, Loader2, FolderOpen } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import PageLayout from '../../components/layout/PageLayout';
import Button from '../../components/ui/Button';
import Cardiac from '../../assets/ADAVN_cardiac_.png'
import Vascular from '../../assets/ADAVN_vascular.png'
import Resp from '../../assets/ADAVN_resp.png'
import Intra from '../../assets/ADAVN_intra.png'
import BackToTop from '../../components/layout/BackToTop';

// NOVO: Importa API e JWT
import { fetchJobsByUsuario } from '../../services/api';
import { getUserIdFromToken } from '../../hooks/jwtDecoder';

import {
  HomeContainer,
  HeroSection,
  CarouselWrapper,
  ImageContainer,
  SlideImage,
  ControlsContainer,
  IconButton,
  DotsWrapper,
  Dot,
  TextContent,
  ModuleTag,
  Title,
  Description,
  RecentActivityContainer,
  RecentActivityHeader,
  ViewAllButton,
  RecentGrid,
  RecentCard,
  RecentCardTitle,
  RecentCardMeta,
  RecentCardStatus,
  MiddleGrid,
  OverviewWrapper,
  SectionTitle,
  EmptyStateMessage,
  StatsRow,
  StatBox,
  StatIconBox,
  StatDetails,
  QuickActionsWrapper,
  ActionLink
} from './styles';

const CAROUSEL_DATA = [
  {
    id: 'cardiac',
    tag: 'Cardiac',
    title: 'Cardiac Title',
    description: 'Text Description Text Description Text Description Text Description Text Description Text Description Text Description Text Description Text Description Text Description  ',
    image: Cardiac,
  },
  {
    id: 'vascular',
    tag: 'Vascular',
    title: 'Vascular Title',
    description: 'Text Description Text Description Text Description Text Description Text Description Text Description Text Description Text Description Text Description Text Description ',
    image: Vascular,
  },
  {
    id: 'respiration',
    tag: 'Respiration',
    title: 'Respiratory Title',
    description: 'Text Description Text Description Text Description Text Description Text Description Text Description Text Description Text Description Text Description Text Description ',
    image: Resp,
  },
  {
    id: 'intracranial',
    tag: 'Intracranial',
    title: 'Intracranial Title ',
    description: 'Text Description Text Description Text Description Text Description Text Description Text Description Text Description Text Description Text Description Text Description ',
    image: Intra,
  }
];

export default function HomeScreen() {
  const navigate = useNavigate();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [recentSims, setRecentSims] = useState([]);
  const [stats, setStats] = useState({ total: 0, completed: 0, running: 0 });
  const userId = getUserIdFromToken();

  useEffect(() => {
    const carregarDados = async () => {
      let fullHistory = [];

      if (userId) {
        try {
          const response = await fetchJobsByUsuario(userId);
          fullHistory = response?.jobs || [];
        } catch (err) {
          fullHistory = JSON.parse(localStorage.getItem('@HeMoLAB:historico') || '[]');
        }
      } else {
        fullHistory = JSON.parse(localStorage.getItem('@HeMoLAB:historico') || '[]');
      }

      setStats({
        total: fullHistory.length,
        completed: fullHistory.filter(s => {
          const st = (s.status || '').toLowerCase();
          return st === 'completed' || st === 'done';
        }).length,
        running: fullHistory.filter(s => {
          const st = (s.status || '').toLowerCase();
          return st === 'processing' || st === 'running';
        }).length
      });

      const recentes = fullHistory.slice(0, 3).map(job => {
          let params = {};
          if (job.parametros) {
            try {
              params = typeof job.parametros === 'string' 
                ? JSON.parse(job.parametros) 
                : job.parametros;
            } catch(e) {}
          }
          
          return {
            ...job,
            historyId: job.id ? `api-${job.id}` : job.historyId,
            nome: job.nome || 'Simulation',
            status: job.status || 'processing',
            simID: params.simID || (job.id ? `#${job.id}` : job.simID)
          };
        });
        
        setRecentSims(recentes);
    };
    
    carregarDados();
  }, [userId]);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % CAROUSEL_DATA.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? CAROUSEL_DATA.length - 1 : prevIndex - 1));
  };

  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 8000);
    return () => clearInterval(timer);
  }, []);

  const activeSlide = CAROUSEL_DATA[currentIndex];

  // NOVO: Formata status corretamente
  const formatStatus = (status) => {
    if (!status) return 'Unknown';
    return status.charAt(0).toUpperCase() + status.slice(1);
  };

  return (
    <PageLayout>
      <HomeContainer>

        <HeroSection
          as={motion.section}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <CarouselWrapper>
            <ImageContainer>
              <SlideImage key={activeSlide.id} src={activeSlide.image} alt={activeSlide.title} />
            </ImageContainer>
            
            <ControlsContainer>
              <IconButton onClick={handlePrev} aria-label="Previous slide">
                <ChevronLeft size={24} />
              </IconButton>
              
              <DotsWrapper>
                {CAROUSEL_DATA.map((_, index) => (
                  <Dot 
                    key={index} 
                    $active={index === currentIndex} 
                    onClick={() => setCurrentIndex(index)}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </DotsWrapper>
              
              <IconButton onClick={handleNext} aria-label="Next slide">
                <ChevronRight size={24} />
              </IconButton>
            </ControlsContainer>
          </CarouselWrapper>

          <TextContent key={`text-${activeSlide.id}`}>
            <ModuleTag>{activeSlide.tag} Module</ModuleTag>
            <Title>{activeSlide.title}</Title>
            <Description>{activeSlide.description}</Description>
          </TextContent>
        </HeroSection>

        {/* ESTATÍSTICAS & AÇÕES RÁPIDAS */}
        <MiddleGrid
          as={motion.div}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <OverviewWrapper>
            <SectionTitle>
              <BarChart2 size={22} /> Overview
            </SectionTitle>
            <StatsRow>
              <StatBox>
                <StatIconBox $bg="#E0F2FE" $color="#0369A1"><Activity size={20} /></StatIconBox>
                <StatDetails><h4>{stats.total}</h4><span>Total Simulations</span></StatDetails>
              </StatBox>
              <StatBox>
                <StatIconBox $bg="#DCFCE7" $color="#166534"><CheckCircle2 size={20} /></StatIconBox>
                <StatDetails><h4>{stats.completed}</h4><span>Completed</span></StatDetails>
              </StatBox>
              <StatBox>
                <StatIconBox $bg="#FEF9C3" $color="#A16207"><Loader2 size={20} /></StatIconBox>
                <StatDetails><h4>{stats.running}</h4><span>In Progress</span></StatDetails>
              </StatBox>
            </StatsRow>

          </OverviewWrapper>

          <QuickActionsWrapper>
            <SectionTitle><Zap size={22} /> Quick Actions</SectionTitle>
            <ActionLink onClick={() => navigate('/simulator')}>
              <PlayCircle size={22} color="#0369A1" /> <span>Start New Simulation</span>
              <ArrowRight size={18} className="arrow-icon" />
            </ActionLink>
            <ActionLink onClick={() => navigate('/profile')}>
              <User size={22} color="#0369A1" /> <span>Update Profile</span>
              <ArrowRight size={18} className="arrow-icon" />
            </ActionLink>
          <ActionLink as="div" style={{ cursor: 'default', opacity: 0.4 }}>
            <div style={{ height: '22px' }} />
          </ActionLink>
          </QuickActionsWrapper>
        </MiddleGrid>

        {/* ATIVIDADE RECENTE */}
          <RecentActivityContainer
            as={motion.section}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <RecentActivityHeader>
              <h3><Clock size={22} /> Recent Activity</h3>
              <ViewAllButton onClick={() => navigate('/results')}>
                View History <ArrowRight size={18} />
              </ViewAllButton>
            </RecentActivityHeader>
            
            {recentSims.length > 0 ? (
              <RecentGrid>
                {recentSims.map(sim => {
                  const displayStatus = formatStatus(sim.status);
                  
                  return (
                    <RecentCard key={sim.historyId || Math.random()} onClick={() => navigate('/results')}>
                      <RecentCardTitle>{sim.nome}</RecentCardTitle>
                      <RecentCardMeta>SimID: {sim.simID}</RecentCardMeta>
                      <RecentCardStatus $status={displayStatus}>
                        {displayStatus}
                      </RecentCardStatus>
                    </RecentCard>
                  );
                })}
              </RecentGrid>
            ) : (
              <EmptyStateMessage>
                <Activity size={40} color="#CBD5E1" style={{ marginBottom: '1rem' }} />
                <h4 style={{ margin: '0 0 0.5rem 0', color: '#1A2B4C' }}>No recent simulations</h4>
                <p style={{ margin: 0, fontSize: '0.85rem' }}>You haven't run any simulations yet. Start your first analysis from the Quick Actions menu</p>
              </EmptyStateMessage>
            )}
          </RecentActivityContainer>
          
        <BackToTop />
      </HomeContainer>
    </PageLayout>
  );
}