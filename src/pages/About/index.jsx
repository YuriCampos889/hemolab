import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

import PageLayout from '../../components/layout/PageLayout';
import Card from '../../components/ui/Card';
import Title from '../../components/ui/Title';

import { 
  IntroText, FaqContainer, FaqHeader, 
  FaqItem, FaqQuestion, FaqAnswer 
} from './styles';

export default function AboutScreen() {
  const [openIndex, setOpenIndex] = useState(null);

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
    <PageLayout>
      <Card padding="40px" style={{ maxWidth: '900px', margin: '0 auto' }}>
        <Title underline>About</Title>

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
      </Card>
    </PageLayout>
  );
}