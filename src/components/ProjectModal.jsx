import React, { useEffect } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';

const Overlay = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 1000;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  overflow-y: auto;
`;

const ModalContainer = styled(motion.div)`
  background-color: white;
  border-radius: 8px;
  width: 100%;
  max-width: 900px;
  max-height: 90vh;
  overflow-y: auto;
  position: relative;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  cursor: pointer;
  z-index: 10;
  transition: background-color 0.3s ease;
  
  &:hover {
    background-color: rgba(0, 0, 0, 0.7);
  }
`;

const ModalHeader = styled.div`
  position: relative;
  width: 100%;
  height: 0;
  padding-bottom: 56.25%; /* 16:9 Aspect Ratio */
`;

const HeaderImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const ModalContent = styled.div`
  padding: 2rem;
`;

const ProjectTitle = styled.h2`
  font-size: 2rem;
  margin-bottom: 0.5rem;
`;

const ProjectCategory = styled.span`
  display: inline-block;
  background-color: var(--accent-color);
  color: white;
  padding: 0.3rem 0.8rem;
  border-radius: 4px;
  font-size: 0.8rem;
  margin-bottom: 1.5rem;
`;

const ProjectDescription = styled.p`
  font-size: 1rem;
  line-height: 1.8;
  margin-bottom: 2rem;
`;

const ProjectDetails = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
  margin-bottom: 2rem;
`;

const DetailItem = styled.div`
  h4 {
    font-size: 1rem;
    margin-bottom: 0.5rem;
    color: var(--accent-color);
  }
  
  p {
    font-size: 0.9rem;
  }
`;

const Gallery = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 1rem;
  margin-top: 2rem;
`;

const GalleryImage = styled.img`
  width: 100%;
  height: 180px;
  object-fit: cover;
  border-radius: 4px;
  cursor: pointer;
  transition: transform 0.3s ease;
  
  &:hover {
    transform: scale(1.03);
  }
`;

const VideoContainer = styled.div`
  position: relative;
  width: 100%;
  height: 0;
  padding-bottom: 56.25%; /* 16:9 Aspect Ratio */
  margin: 2rem 0;
`;

const Video = styled.iframe`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: none;
`;

const ProjectModal = ({ project, onClose }) => {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  if (!project) return null;

  return (
    <AnimatePresence>
      <Overlay
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <ModalContainer
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 50, opacity: 0 }}
          transition={{ type: 'spring', damping: 25 }}
          onClick={(e) => e.stopPropagation()}
        >
          <CloseButton onClick={onClose}>✕</CloseButton>
          
          <ModalHeader>
            <HeaderImage src={project.imageUrl} alt={project.title} />
          </ModalHeader>
          
          <ModalContent>
            <ProjectTitle>{project.title}</ProjectTitle>
            <ProjectCategory>{project.category}</ProjectCategory>
            
            <ProjectDescription>{project.fullDescription || project.description}</ProjectDescription>
            
            <ProjectDetails>
              <DetailItem>
                <h4>Cliente</h4>
                <p>{project.client}</p>
              </DetailItem>
              
              <DetailItem>
                <h4>Data</h4>
                <p>{project.date}</p>
              </DetailItem>
              
              <DetailItem>
                <h4>Serviços</h4>
                <p>{project.services}</p>
              </DetailItem>
            </ProjectDetails>
            
            {project.videoUrl && (
              <VideoContainer>
                <Video 
                  src={project.videoUrl} 
                  title={project.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </VideoContainer>
            )}
            
            {project.gallery && (
              <Gallery>
                {project.gallery.map((image, index) => (
                  <GalleryImage 
                    key={index} 
                    src={image} 
                    alt={`${project.title} - Imagem ${index + 1}`} 
                  />
                ))}
              </Gallery>
            )}
          </ModalContent>
        </ModalContainer>
      </Overlay>
    </AnimatePresence>
  );
};

export default ProjectModal;
