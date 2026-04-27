import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Clock, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import PageLayout from '../../components/layout/PageLayout';
import Cardiac from '../../assets/ADAVN_cardiac_.png'
import Vascular from '../../assets/ADAVN_vascular.png'
import Resp from '../../assets/ADAVN_resp.png'
import Intra from '../../assets/ADAVN_intra.png'


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
  RecentCardStatus
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

  const recentSims = JSON.parse(localStorage.getItem('@HeMoLAB:historico') || '[]').slice(0, 3);

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

  return (
    <PageLayout>
      <HomeContainer>
        <HeroSection>
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

        {/* ATIVIDADE RECENTE */}
        {recentSims.length > 0 && (
          <RecentActivityContainer>
            <RecentActivityHeader>
              <h3><Clock size={22} /> Recent Activity</h3>
              <ViewAllButton onClick={() => navigate('/results')}>
                View History <ArrowRight size={18} />
              </ViewAllButton>
            </RecentActivityHeader>
            
            <RecentGrid>
              {recentSims.map(sim => {
                const displayStatus = sim.status === 'Done' ? 'Completed' : (sim.status || 'Completed');
                
                return (
                  <RecentCard key={sim.historyId} onClick={() => navigate('/results')}>
                    <RecentCardTitle>{sim.nome}</RecentCardTitle>
                    <RecentCardMeta>SimID: {sim.simID}</RecentCardMeta>
                    <RecentCardStatus $status={displayStatus}>
                      {displayStatus}
                    </RecentCardStatus>
                  </RecentCard>
                );
              })}
            </RecentGrid>
          </RecentActivityContainer>
        )}
      </HomeContainer>
    </PageLayout>
  );
}