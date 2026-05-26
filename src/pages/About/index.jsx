import React, { useState } from 'react';
import { Users, History, Mail, Send } from 'lucide-react';

import PageLayout from '../../components/layout/PageLayout';
import Card from '../../components/ui/Card';
import Title from '../../components/ui/Title';
import Button from '../../components/ui/Button';

import TeamMember from './components/TeamMember';
import UpdateItem from './components/UpdateItem';
import BackToTop from '../../components/layout/BackToTop';

import { sendContactMessage } from '../../services/api';

import {
  AboutContainer,
  Section,
  SectionHeader,
  TextContent,
  TeamGrid,
  UpdatesList,
  ContactForm,
  InputGroup
} from './styles';

export default function AboutScreen() {
  // NOVO: Estado para o formulário
  const [formData, setFormData] = useState({
    subject: '',
    message: ''
  });
  const [isSending, setIsSending] = useState(false);
  const [feedback, setFeedback] = useState({ type: '', message: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleContactSubmit = async (e) => {
    e.preventDefault();
    setIsSending(true);
    setFeedback({ type: '', message: '' });

    try {
      await sendContactMessage(formData);
      setFeedback({ type: 'success', message: 'Mensagem enviada com sucesso!' });
      setFormData({ subject: '', message: '' });
    } catch (error) {
      setFeedback({ type: 'error', message: error.message || 'Erro ao enviar mensagem.' });
    } finally {
      setIsSending(false);
    }
  };

  return (
    <PageLayout>
      <Card padding="2.5rem" style={{ minHeight: '46.875rem' }}>
        <Title underline style={{ marginBottom: '2rem' }}>About HeMoLAB</Title>

        <AboutContainer>
          <Section>
            <SectionHeader>
              <Users size={24} />
              <h3>HeMoLab Team</h3>
            </SectionHeader>
            <TextContent>
              Text Example <strong>Text Description example Text Description example </strong>. Text Description example Text Description example Text Description example Text Description example Text Description example Text Description example 
            </TextContent>
            
            <TeamGrid>
              <TeamMember initials="AB" name="Name Exmaple" role="Role Example" />
              <TeamMember initials="CD" name="Name Example" role="Role Example " />
              <TeamMember initials="EF" name="Name Example" role="Role Example " />
            </TeamGrid>
          </Section>

          <Section>
            <SectionHeader>
              <History size={24} />
              <h3>Updates</h3>
            </SectionHeader>
            <TextContent>
              Text Description example Text Description example Text Description example Text Description example Text Description example 
            </TextContent>
            
            <UpdatesList>
              <UpdateItem date="XXX 2026" version="Version 1.2.1: Update & Patch">
                <p>Text Update example Text Update example Text Update example Text Update example Text Update example Text Update example Text Update example </p>
              </UpdateItem>
              <UpdateItem date="XXX 2026" version="Version 1.1.0: Feature Example">
                <p>Text Update example Text Update example Text Update example Text Update example Text Update example .</p>
              </UpdateItem>
              <UpdateItem date="XXX 2026" version="Version 1.0.0: Initial Release">
                <p>Text Update example Text Update example Text Update example Text Update example Text Update example Text Update example .</p>
              </UpdateItem>
            </UpdatesList>
          </Section>

          <Section>
            <SectionHeader>
              <Mail size={24} />
              <h3>Contact us</h3>
            </SectionHeader>
            <TextContent>
              Text Update example Text Update example, Text Update example or Text Update example? Text Update example. 
            </TextContent>

            <ContactForm onSubmit={handleContactSubmit}>
              <InputGroup>
                <label htmlFor="subject">Subject</label>
                <input type="text" id="subject" placeholder="How can we help you?" value={formData.subject} onChange={handleChange} required />
              </InputGroup>

              <InputGroup>
                <label htmlFor="message">Message</label>
                <textarea id="message" placeholder="Type your message here" value={formData.message} onChange={handleChange} required></textarea>
              </InputGroup>

              {/* Feedback */}
              {feedback.message && (
                <p style={{ color: feedback.type === 'success' ? '#16A34A' : '#DC2626', fontSize: '0.9rem' }}>
                  {feedback.message}
                </p>
              )}

              <Button 
                type="submit" 
                variant="primary" 
                disabled={isSending}
                style={{ width: 'fit-content', display: 'flex', alignItems: 'center', gap: '0.5rem' }}
              >
                <Send size={16} />
                {isSending ? 'Enviando...' : 'Send Message'}
              </Button>
            </ContactForm>
          </Section>
        </AboutContainer>
      </Card>
      
      <BackToTop />
    </PageLayout>
  );
}