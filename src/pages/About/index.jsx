import React, { useEffect, useRef, useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

import {
  Container,
  GrayWrapper,
  ContentWrapper,
  AboutCard,
  PageTitle,
  IntroText,
  FaqContainer,
  FaqHeader,
  FaqItem,
  FaqQuestion,
  FaqAnswer
} from './styles';

import Header from '../../components/Header';
import BackgroundTopbar from '../../components/Backgroundtopbar';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

export default function AboutScreen() {
  const navbarRef = useRef(null);
  const [openIndex, setOpenIndex] = useState(null);

  useEffect(() => {
    if (navbarRef.current) {
      setTimeout(() => {
        const rect = navbarRef.current.getBoundingClientRect();
        const elementTop = rect.top + window.scrollY;
        window.scrollTo({
          top: elementTop - 120,
          behavior: 'smooth'
        });
      }, 600);
    }
  }, []);

  const faqs = [
    {
      question: "O que é o OpenADAVN?",
      answer: "O OpenADAVN é um sistema focado em pesquisa e desenvolvimento de modelagem cardiovascular multiescala, indo do processamento de imagens até a simulação de fluxos complexos."
    },
    {
      question: "Como configuro uma simulação?",
      answer: "Acesse a tela principal de Cardiac Ejection, insira um nome para a sua simulação e preencha os parâmetros obrigatórios como CO, HR, EE e EC antes de submeter."
    },
    {
      question: "Posso exportar os resultados das minhas simulações?",
      answer: "Sim! Na aba de histórico, clique no ícone de visualização (olho) da simulação desejada e use o botão 'GERAR ARQUIVO .TXT' para fazer o download do relatório."
    },
    {
      question: "Onde ficam salvas minhas simulações?",
      answer: "Atualmente, as execuções são armazenadas no histórico local (LocalStorage) da sua sessão no navegador."
    },
    {
      question: "Quais são os limites e unidades dos parâmetros?",
      answer: "O CO é medido em L/min, o HR em bpm, e tanto EE quanto EC em mmHg/mL. O sistema aceita apenas valores numéricos positivos."
    },
    {
      question: "Como entro em contato com o suporte técnico?",
      answer: "Você pode nos contatar através do nosso e-mail oficial ou verificar a documentação completa no nosso repositório."
    }
  ];

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <Container>
      <Header />
      <BackgroundTopbar />
      <div ref={navbarRef}><Navbar /></div>

      <GrayWrapper>
        <ContentWrapper>
          <AboutCard>
            <PageTitle>About</PageTitle>

            <IntroText>
              Bem-vindo à central de ajuda. Este painel foi desenvolvido para auxiliar na compreensão da nossa plataforma de modelagem e análise vascular. Abaixo, detalhamos o funcionamento do sistema e disponibilizamos as respostas para as dúvidas mais comuns da nossa comunidade de pesquisadores e usuários.
            </IntroText>

            <FaqContainer>
              <FaqHeader>Perguntas frequentes</FaqHeader>
              
              {faqs.map((faq, index) => (
                <FaqItem key={index}>
                  <FaqQuestion 
                    onClick={() => toggleFaq(index)} 
                    $isOpen={openIndex === index}
                  >
                    <span>{faq.question}</span>
                    {openIndex === index ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                  </FaqQuestion>
                  <FaqAnswer $isOpen={openIndex === index}>
                    <p>{faq.answer}</p>
                  </FaqAnswer>
                </FaqItem>
              ))}
              
            </FaqContainer>
          </AboutCard>
        </ContentWrapper>
      </GrayWrapper>

      <Footer />
    </Container>
  );
}