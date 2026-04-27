import React from 'react';
import { Users, History, Mail, Send } from 'lucide-react';

import PageLayout from '../../components/layout/PageLayout';
import Card from '../../components/ui/Card';
import Title from '../../components/ui/Title';
import Button from '../../components/ui/Button';

import {
  AboutContainer,
  Section,
  SectionHeader,
  TextContent,
  TeamGrid,
  MemberCard,
  Avatar,
  MemberInfo,
  UpdatesList,
  UpdateItem,
  ContactForm,
  InputGroup
} from './styles';

export default function AboutScreen() {
  const handleContactSubmit = (e) => {
    e.preventDefault();
    console.log('Mensagem enviada');
  };

  return (
    <PageLayout>
      <Card padding="40px" style={{ minHeight: '750px' }}>
        <Title underline style={{ marginBottom: '32px' }}>About HeMoLAB</Title>

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
              <MemberCard>
                <Avatar>AB</Avatar>
                <MemberInfo>
                  <strong>Name Exmaple</strong>
                  <span>Role Example</span>
                </MemberInfo>
              </MemberCard>
              <MemberCard>
                <Avatar>CD</Avatar>
                <MemberInfo>
                  <strong>Name Example</strong>
                  <span>Role Example </span>
                </MemberInfo>
              </MemberCard>
               <MemberCard>
                <Avatar>EF</Avatar>
                <MemberInfo>
                  <strong>Name Example</strong>
                  <span>Role Example </span>
                </MemberInfo>
              </MemberCard>
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
              <UpdateItem>
                <div className="date">XXX 2026</div>
                <div className="content">
                  <strong>Version 1.2.1: Update & Patch</strong>
                  <p>Text Update example Text Update example Text Update example Text Update example Text Update example Text Update example Text Update example </p>
                </div>
              </UpdateItem>
              <UpdateItem>
                <div className="date">XXX 2026</div>
                <div className="content">
                  <strong>Version 1.1.0: Feature Example</strong>
                  <p>Text Update example Text Update example Text Update example Text Update example Text Update example .</p>
                </div>
              </UpdateItem>
              <UpdateItem>
                <div className="date">XXX 2026</div>
                <div className="content">
                  <strong>Version 1.0.0: Initial Release</strong>
                  <p>Text Update example Text Update example Text Update example Text Update example Text Update example Text Update example .</p>
                </div>
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
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                <InputGroup>
                  <label htmlFor="name">Name</label>
                  <input type="text" id="name" placeholder="John" required />
                </InputGroup>
                <InputGroup>
                  <label htmlFor="email">Email address</label>
                  <input type="email" id="email" placeholder="john@example.com" required />
                </InputGroup>
              </div>
              
              <InputGroup>
                <label htmlFor="subject">Subject</label>
                <input type="text" id="subject" placeholder="How can we help you?" required />
              </InputGroup>

              <InputGroup>
                <label htmlFor="message">Message</label>
                <textarea id="message" placeholder="Type your message here" required></textarea>
              </InputGroup>

              <Button type="submit" variant="primary" style={{ width: 'fit-content', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Send size={16} />
                Send Message
              </Button>
            </ContactForm>
          </Section>

        </AboutContainer>
      </Card>
    </PageLayout>
  );
}