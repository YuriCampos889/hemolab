import React, { useState } from 'react';
import PageLayout from '../../components/layout/PageLayout';
import Card from '../../components/ui/Card';
import Title from '../../components/ui/Title';
import Tabs from '../../components/ui/Tabs';
import Button from '../../components/ui/Button';

import { InfoBar, ContainerImagemCompleta } from './styles';
import adanhead from '../../assets/adan_head 1.png';

export default function ResultadosScreen() {
  const [regiao, setRegiao] = useState('Head');

  return (
    <PageLayout>
      <Card padding="40px" style={{ alignItems: 'center' }}>
        <Title underline style={{ alignSelf: 'flex-start' }}>Resultados</Title>

        <InfoBar>
          <span><strong>ID:</strong> 0000000</span>
          <span><strong>Nome:</strong> Yuri Moreira Campos</span>
          <span><strong>Data:</strong> 22/04/2026</span>
        </InfoBar>

        <Tabs
          tabs={['Head', 'Aorta', 'Limbs', 'Torso']}
          activeTab={regiao}
          onChange={setRegiao}
          centered
        />

        <ContainerImagemCompleta>
          <img src={adanhead} alt="Visualização Principal do HeMoLAB" />
        </ContainerImagemCompleta>

        <Button variant="primary">Download .CSV</Button>
      </Card>
    </PageLayout>
  );
}