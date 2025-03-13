import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const Card = styled(motion.div)`
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  background-color: white;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  height: 100%;
  display: flex;
  flex-direction: column;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
  }
`;

const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  height: 0;
  padding-bottom: 56.25%; /* 16:9 Aspect Ratio */
  overflow: hidden;
`;

const Image = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
  
  ${Card}:hover & {
    transform: scale(1.05);
  }
`;

const Content = styled.div`
  padding: 1.5rem;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
`;

const Category = styled.span`
  text-transform: uppercase;
  font-size: 0.8rem;
  font-weight: 600;
  color: var(--accent-color);
  margin-bottom: 0.5rem;
`;

const Title = styled.h3`
  font-size: 1.2rem;
  margin-bottom: 0.8rem;
  font-weight: 600;
`;

const Description = styled.p`
  font-size: 0.9rem;
  color: #666;
  line-height: 1.6;
  margin-bottom: 1rem;
  flex-grow: 1;
`;

const Button = styled.button`
  background-color: transparent;
  color: var(--primary-color);
  border: 1px solid var(--primary-color);
  padding: 0.6rem 1rem;
  font-size: 0.9rem;
  font-weight: 500;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.3s ease;
  align-self: flex-start;
  
  &:hover {
    background-color: var(--primary-color);
    color: white;
  }
`;

const ProjectCard = ({ project, onClick }) => {
  return (
    <Card
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      layout
    >
      <ImageContainer>
        <Image src={project.imageUrl} alt={project.title} />
      </ImageContainer>
      <Content>
        <Category>{project.category}</Category>
        <Title>{project.title}</Title>
        <Description>{project.description}</Description>
        <Button onClick={() => onClick(project)}>Ver Projeto</Button>
      </Content>
    </Card>
  );
};

export default ProjectCard;
