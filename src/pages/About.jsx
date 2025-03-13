import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const PageContainer = styled.div`
  padding: 8rem 0 5rem;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
`;

const PageHeader = styled.div`
  text-align: center;
  margin-bottom: 4rem;
`;

const PageTitle = styled(motion.h1)`
  font-size: 3rem;
  margin-bottom: 1rem;
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const PageDescription = styled(motion.p)`
  font-size: 1.1rem;
  max-width: 700px;
  margin: 0 auto;
  color: #666;
  line-height: 1.6;
  
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const AboutSection = styled.section`
  margin-bottom: 5rem;
`;

const AboutContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  align-items: center;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const AboutImage = styled(motion.img)`
  width: 100%;
  height: auto;
  border-radius: 8px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  
  @media (max-width: 768px) {
    margin-bottom: 2rem;
  }
`;

const AboutText = styled.div`
  h2 {
    font-size: 2rem;
    margin-bottom: 1.5rem;
  }
  
  p {
    font-size: 1rem;
    line-height: 1.8;
    margin-bottom: 1.5rem;
    color: #555;
  }
`;

const TeamSection = styled.section`
  margin-bottom: 5rem;
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 3rem;
  
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const TeamGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 2rem;
`;

const TeamMember = styled(motion.div)`
  text-align: center;
`;

const MemberImage = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 1.5rem;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
`;

const MemberName = styled.h3`
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
`;

const MemberRole = styled.p`
  font-size: 0.9rem;
  color: var(--accent-color);
  margin-bottom: 1rem;
`;

const MemberBio = styled.p`
  font-size: 0.9rem;
  color: #666;
  line-height: 1.6;
`;

const StatsSection = styled.section`
  background-color: #f9f9f9;
  padding: 5rem 0;
  margin-bottom: 5rem;
`;

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
  
  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const StatItem = styled(motion.div)`
  text-align: center;
`;

const StatNumber = styled.h3`
  font-size: 3rem;
  color: var(--accent-color);
  margin-bottom: 1rem;
`;

const StatTitle = styled.p`
  font-size: 1rem;
  font-weight: 500;
`;

const ValuesSection = styled.section`
  margin-bottom: 5rem;
`;

const ValuesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const ValueCard = styled(motion.div)`
  background-color: white;
  border-radius: 8px;
  padding: 2rem;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  text-align: center;
`;

const ValueIcon = styled.div`
  font-size: 2.5rem;
  margin-bottom: 1.5rem;
`;

const ValueTitle = styled.h3`
  font-size: 1.2rem;
  margin-bottom: 1rem;
`;

const ValueDescription = styled.p`
  font-size: 0.9rem;
  color: #666;
  line-height: 1.6;
`;

const About = () => {
  const teamMembers = [
    {
      name: 'Ana Silva',
      role: 'Diretora Criativa',
      bio: 'Com mais de 10 anos de experiência em produção audiovisual, Ana lidera nossa equipe criativa com paixão e inovação.',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
    },
    {
      name: 'Carlos Mendes',
      role: 'Diretor de Fotografia',
      bio: 'Especialista em iluminação e composição, Carlos traz uma estética única e memorável para cada projeto.',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
    },
    {
      name: 'Juliana Costa',
      role: 'Produtora Executiva',
      bio: 'Juliana coordena todas as etapas de produção, garantindo que cada projeto seja entregue com excelência e no prazo.',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
    },
    {
      name: 'Ricardo Oliveira',
      role: 'Editor Chefe',
      bio: 'Com um olhar apurado para narrativa, Ricardo transforma o material bruto em histórias envolventes e impactantes.',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
    }
  ];
  
  const stats = [
    { number: '150+', title: 'Projetos Concluídos' },
    { number: '45+', title: 'Clientes Satisfeitos' },
    { number: '12', title: 'Prêmios Conquistados' },
    { number: '8', title: 'Anos de Experiência' }
  ];
  
  const values = [
    {
      icon: '🎯',
      title: 'Excelência',
      description: 'Buscamos a excelência em cada detalhe, desde a concepção até a entrega final do projeto.'
    },
    {
      icon: '💡',
      title: 'Criatividade',
      description: 'Pensamos fora da caixa para criar soluções audiovisuais inovadoras e impactantes.'
    },
    {
      icon: '🤝',
      title: 'Colaboração',
      description: 'Trabalhamos em estreita colaboração com nossos clientes para entender e realizar suas visões.'
    }
  ];
  
  return (
    <PageContainer>
      <Container>
        <PageHeader>
          <PageTitle
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Sobre Nós
          </PageTitle>
          
          <PageDescription
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Conheça nossa história, equipe e valores que nos guiam na criação de experiências audiovisuais memoráveis.
          </PageDescription>
        </PageHeader>
        
        <AboutSection>
          <AboutContent>
            <AboutImage
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
              alt="Nossa equipe trabalhando"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            />
            
            <AboutText>
              <h2>Nossa História</h2>
              <p>
                Fundada em 2015, nossa produtora audiovisual nasceu da paixão por contar histórias através de imagens e sons. O que começou como um pequeno estúdio com apenas três profissionais, hoje se transformou em uma equipe completa de especialistas dedicados a criar conteúdo audiovisual de alta qualidade.
              </p>
              <p>
                Ao longo dos anos, desenvolvemos projetos para diversos segmentos, desde pequenas empresas locais até grandes marcas nacionais. Nossa abordagem personalizada e atenção aos detalhes nos permitiu construir relacionamentos duradouros com nossos clientes.
              </p>
              <p>
                Acreditamos que cada projeto é único e merece uma abordagem criativa específica. Por isso, trabalhamos em estreita colaboração com nossos clientes para entender suas necessidades e objetivos, garantindo que cada produção seja autêntica e eficaz.
              </p>
            </AboutText>
          </AboutContent>
        </AboutSection>
        
        <StatsSection>
          <Container>
            <StatsGrid>
              {stats.map((stat, index) => (
                <StatItem
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <StatNumber>{stat.number}</StatNumber>
                  <StatTitle>{stat.title}</StatTitle>
                </StatItem>
              ))}
            </StatsGrid>
          </Container>
        </StatsSection>
        
        <ValuesSection>
          <SectionTitle>Nossos Valores</SectionTitle>
          <ValuesGrid>
            {values.map((value, index) => (
              <ValueCard
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <ValueIcon>{value.icon}</ValueIcon>
                <ValueTitle>{value.title}</ValueTitle>
                <ValueDescription>{value.description}</ValueDescription>
              </ValueCard>
            ))}
          </ValuesGrid>
        </ValuesSection>
        
        <TeamSection>
          <SectionTitle>Nossa Equipe</SectionTitle>
          <TeamGrid>
            {teamMembers.map((member, index) => (
              <TeamMember
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <MemberImage src={member.image} alt={member.name} />
                <MemberName>{member.name}</MemberName>
                <MemberRole>{member.role}</MemberRole>
                <MemberBio>{member.bio}</MemberBio>
              </TeamMember>
            ))}
          </TeamGrid>
        </TeamSection>
      </Container>
    </PageContainer>
  );
};

export default About;
