import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import Hero from '../components/Hero';
import ProjectCard from '../components/ProjectCard';
import ProjectModal from '../components/ProjectModal';
import CategoryFilter from '../components/CategoryFilter';
import { Link } from 'react-router-dom';
import { projectsData } from '../data/projectsData';

const Section = styled.section`
  padding: 5rem 0;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 1rem;
  
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const SectionSubtitle = styled.p`
  font-size: 1.1rem;
  text-align: center;
  max-width: 700px;
  margin: 0 auto 3rem;
  color: #666;
  line-height: 1.6;
  
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
`;

const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
`;

const ServiceCard = styled(motion.div)`
  background-color: white;
  border-radius: 8px;
  padding: 2rem;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  text-align: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
  }
`;

const ServiceIcon = styled.div`
  font-size: 2.5rem;
  margin-bottom: 1.5rem;
`;

const ServiceTitle = styled.h3`
  font-size: 1.2rem;
  margin-bottom: 1rem;
`;

const ServiceDescription = styled.p`
  font-size: 0.9rem;
  color: #666;
  line-height: 1.6;
`;

const CtaSection = styled.section`
  background-color: var(--primary-color);
  color: white;
  padding: 5rem 0;
  text-align: center;
`;

const CtaTitle = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 1.5rem;
  
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const CtaText = styled.p`
  font-size: 1.1rem;
  max-width: 700px;
  margin: 0 auto 2rem;
  line-height: 1.6;
  
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const CtaButton = styled(motion.button)`
  background-color: var(--accent-color);
  color: white;
  padding: 1rem 2.5rem;
  font-size: 1.1rem;
  font-weight: 600;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  
  &:hover {
    background-color: #d32f2f;
  }
`;

const ViewAllButton = styled(Link)`
  display: block;
  text-align: center;
  margin-top: 3rem;
  font-weight: 600;
  color: var(--primary-color);
  position: relative;
  
  &:after {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 50%;
    transform: translateX(-50%);
    width: 0;
    height: 2px;
    background-color: var(--accent-color);
    transition: width 0.3s ease;
  }
  
  &:hover:after {
    width: 100px;
  }
`;

const Home = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeCategory, setActiveCategory] = useState('todos');
  
  const categories = ['Produtos', 'Publicidade', 'Comerciais', 'Empresariais', 'Lifestyle', 'Retratos'];
  
  const filteredProjects = activeCategory === 'todos'
    ? projectsData.slice(0, 6)
    : projectsData.filter(project => 
        project.category.toLowerCase() === activeCategory
      ).slice(0, 6);
  
  const handleProjectClick = (project) => {
    setSelectedProject(project);
  };
  
  const closeModal = () => {
    setSelectedProject(null);
  };
  
  const services = [
    {
      icon: '📹',
      title: 'Produtos',
      description: 'Destacamos seus produtos com vídeos e fotos de alta qualidade que ressaltam características e benefícios.'
    },
    {
      icon: '🎬',
      title: 'Publicidade',
      description: 'Criamos campanhas publicitárias impactantes que comunicam sua mensagem de forma eficaz.'
    },
    {
      icon: '📺',
      title: 'Comerciais',
      description: 'Produzimos comerciais memoráveis para TV e mídias digitais que geram resultados.'
    },
    {
      icon: '🏢',
      title: 'Empresariais',
      description: 'Desenvolvemos vídeos institucionais e corporativos que fortalecem sua marca e comunicação interna.'
    },
    {
      icon: '🌴',
      title: 'Lifestyle',
      description: 'Capturamos momentos e experiências com uma abordagem natural e autêntica.'
    },
    {
      icon: '📸',
      title: 'Retratos',
      description: 'Realizamos ensaios fotográficos profissionais que revelam personalidade e emoção.'
    }
  ];
  
  return (
    <>
      <Hero />
      
      <Section id="projetos">
        <Container>
          <SectionTitle>Nossos Projetos</SectionTitle>
          <SectionSubtitle>
            Conheça alguns dos nossos trabalhos mais recentes e descubra como podemos transformar suas ideias em realidade.
          </SectionSubtitle>
          
          <CategoryFilter 
            categories={categories} 
            activeCategory={activeCategory} 
            setActiveCategory={setActiveCategory} 
          />
          
          <ProjectsGrid>
            {filteredProjects.map(project => (
              <ProjectCard 
                key={project.id} 
                project={project} 
                onClick={handleProjectClick} 
              />
            ))}
          </ProjectsGrid>
          
          <ViewAllButton to="/categoria/todos">
            Ver Todos os Projetos
          </ViewAllButton>
        </Container>
      </Section>
      
      <Section style={{ backgroundColor: '#f9f9f9' }}>
        <Container>
          <SectionTitle>Nossos Serviços</SectionTitle>
          <SectionSubtitle>
            Oferecemos uma ampla gama de serviços audiovisuais para atender às suas necessidades específicas.
          </SectionSubtitle>
          
          <ServicesGrid>
            {services.map((service, index) => (
              <ServiceCard 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <ServiceIcon>{service.icon}</ServiceIcon>
                <ServiceTitle>{service.title}</ServiceTitle>
                <ServiceDescription>{service.description}</ServiceDescription>
              </ServiceCard>
            ))}
          </ServicesGrid>
        </Container>
      </Section>
      
      <CtaSection>
        <Container>
          <CtaTitle>Vamos Trabalhar Juntos?</CtaTitle>
          <CtaText>
            Estamos prontos para transformar suas ideias em experiências audiovisuais memoráveis. Entre em contato conosco para discutir seu próximo projeto.
          </CtaText>
          <Link to="/contato">
            <CtaButton
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Fale Conosco
            </CtaButton>
          </Link>
        </Container>
      </CtaSection>
      
      {selectedProject && (
        <ProjectModal 
          project={selectedProject} 
          onClose={closeModal} 
        />
      )}
    </>
  );
};

export default Home;
