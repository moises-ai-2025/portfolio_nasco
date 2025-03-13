import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import ContactForm from '../components/ContactForm';

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

const ContactContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const ContactInfo = styled.div`
  h2 {
    font-size: 1.8rem;
    margin-bottom: 2rem;
  }
`;

const InfoItem = styled.div`
  margin-bottom: 2rem;
  
  h3 {
    font-size: 1.2rem;
    margin-bottom: 0.5rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
  
  p {
    font-size: 1rem;
    color: #666;
    line-height: 1.6;
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1.5rem;
  margin-top: 3rem;
`;

const SocialLink = styled.a`
  font-size: 1.5rem;
  color: var(--primary-color);
  transition: color 0.3s ease;
  
  &:hover {
    color: var(--accent-color);
  }
`;

const MapContainer = styled.div`
  margin-top: 5rem;
  
  h2 {
    font-size: 1.8rem;
    margin-bottom: 2rem;
    text-align: center;
  }
`;

const Map = styled.div`
  width: 100%;
  height: 400px;
  background-color: #f0f0f0;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  
  p {
    font-size: 1rem;
    color: #666;
  }
`;

const Contact = () => {
  return (
    <PageContainer>
      <Container>
        <PageHeader>
          <PageTitle
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Entre em Contato
          </PageTitle>
          
          <PageDescription
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Estamos prontos para transformar suas ideias em experiências audiovisuais memoráveis. Entre em contato conosco para discutir seu próximo projeto.
          </PageDescription>
        </PageHeader>
        
        <ContactContent>
          <ContactInfo>
            <h2>Informações de Contato</h2>
            
            <InfoItem>
              <h3>
                <span role="img" aria-label="Localização">📍</span> Endereço
              </h3>
              <p>Rua da Produtora, 123</p>
              <p>Bairro Criativo</p>
              <p>São Paulo, SP - 01234-567</p>
            </InfoItem>
            
            <InfoItem>
              <h3>
                <span role="img" aria-label="Email">✉️</span> Email
              </h3>
              <p>contato@suaprodutora.com</p>
              <p>comercial@suaprodutora.com</p>
            </InfoItem>
            
            <InfoItem>
              <h3>
                <span role="img" aria-label="Telefone">📞</span> Telefone
              </h3>
              <p>(11) 99999-9999</p>
              <p>(11) 5555-5555</p>
            </InfoItem>
            
            <InfoItem>
              <h3>
                <span role="img" aria-label="Horário">🕒</span> Horário de Funcionamento
              </h3>
              <p>Segunda a Sexta: 9h às 18h</p>
              <p>Sábado: 9h às 13h</p>
            </InfoItem>
            
            <SocialLinks>
              <SocialLink href="#" target="_blank" rel="noopener noreferrer">
                <span role="img" aria-label="Instagram">📷</span>
              </SocialLink>
              <SocialLink href="#" target="_blank" rel="noopener noreferrer">
                <span role="img" aria-label="Facebook">👍</span>
              </SocialLink>
              <SocialLink href="#" target="_blank" rel="noopener noreferrer">
                <span role="img" aria-label="YouTube">▶️</span>
              </SocialLink>
              <SocialLink href="#" target="_blank" rel="noopener noreferrer">
                <span role="img" aria-label="Vimeo">🎬</span>
              </SocialLink>
            </SocialLinks>
          </ContactInfo>
          
          <ContactForm />
        </ContactContent>
        
        <MapContainer>
          <h2>Nossa Localização</h2>
          <Map>
            <p>Mapa será carregado aqui (Google Maps ou similar)</p>
          </Map>
        </MapContainer>
      </Container>
    </PageContainer>
  );
};

export default Contact;
