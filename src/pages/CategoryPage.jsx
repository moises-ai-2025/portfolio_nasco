import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import ProjectCard from '../components/ProjectCard';
import ProjectModal from '../components/ProjectModal';
import { projectsData } from '../data/projectsData';

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

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
`;

const NoProjects = styled.div`
  text-align: center;
  padding: 3rem;
  background-color: #f9f9f9;
  border-radius: 8px;
`;

const BackButton = styled(motion.button)`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background: none;
  border: none;
  font-size: 1rem;
  color: var(--primary-color);
  cursor: pointer;
  margin-bottom: 2rem;
  
  &:hover {
    color: var(--accent-color);
  }
`;

const CategoryPage = () => {
  const { category } = useParams();
  const navigate = useNavigate();
  const [selectedProject, setSelectedProject] = useState(null);
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [category]);
  
  const getCategoryTitle = () => {
    if (category === 'todos') return 'Todos os Projetos';
    return category.charAt(0).toUpperCase() + category.slice(1);
  };
  
  const getCategoryDescription = () => {
    switch(category) {
      case 'produtos':
        return 'Vídeos e fotografias que destacam as características e benefícios dos seus produtos.';
      case 'publicidade':
        return 'Campanhas publicitárias impactantes para diversas plataformas e mídias.';
      case 'comerciais':
        return 'Comerciais memoráveis para TV e mídias digitais que geram resultados.';
      case 'empresariais':
        return 'Vídeos institucionais e corporativos que fortalecem sua marca e comunicação.';
      case 'lifestyle':
        return 'Capturamos momentos e experiências com uma abordagem natural e autêntica.';
      case 'retratos':
        return 'Ensaios fotográficos profissionais que revelam personalidade e emoção.';
      case 'todos':
        return 'Conheça todos os nossos projetos e descubra como podemos transformar suas ideias em realidade.';
      default:
        return 'Explore nossos projetos nesta categoria.';
    }
  };
  
  const filteredProjects = category === 'todos'
    ? projectsData
    : projectsData.filter(project => project.category.toLowerCase() === category);
  
  const handleProjectClick = (project) => {
    setSelectedProject(project);
  };
  
  const closeModal = () => {
    setSelectedProject(null);
  };
  
  const goBack = () => {
    navigate(-1);
  };
  
  return (
    <PageContainer>
      <Container>
        <BackButton 
          onClick={goBack}
          whileHover={{ x: -5 }}
          whileTap={{ scale: 0.95 }}
        >
          ← Voltar
        </BackButton>
        
        <PageHeader>
          <PageTitle
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {getCategoryTitle()}
          </PageTitle>
          
          <PageDescription
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {getCategoryDescription()}
          </PageDescription>
        </PageHeader>
        
        {filteredProjects.length > 0 ? (
          <ProjectsGrid>
            {filteredProjects.map(project => (
              <ProjectCard 
                key={project.id} 
                project={project} 
                onClick={handleProjectClick} 
              />
            ))}
          </ProjectsGrid>
        ) : (
          <NoProjects>
            <h3>Nenhum projeto encontrado nesta categoria.</h3>
            <p>Em breve adicionaremos novos projetos.</p>
          </NoProjects>
        )}
      </Container>
      
      {selectedProject && (
        <ProjectModal 
          project={selectedProject} 
          onClose={closeModal} 
        />
      )}
    </PageContainer>
  );
};

export default CategoryPage;
