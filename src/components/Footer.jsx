import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledFooter = styled.footer`
  background-color: var(--primary-color);
  color: var(--secondary-color);
  padding: 4rem 0 2rem;
`;

const FooterContent = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
`;

const FooterSection = styled.div`
  display: flex;
  flex-direction: column;
`;

const FooterTitle = styled.h3`
  font-size: 1.2rem;
  margin-bottom: 1.5rem;
  position: relative;
  
  &:after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 0;
    width: 50px;
    height: 2px;
    background-color: var(--accent-color);
  }
`;

const FooterLink = styled(Link)`
  margin-bottom: 0.8rem;
  transition: color 0.3s ease;
  
  &:hover {
    color: var(--accent-color);
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
`;

const SocialIcon = styled.a`
  font-size: 1.5rem;
  transition: color 0.3s ease;
  
  &:hover {
    color: var(--accent-color);
  }
`;

const Copyright = styled.div`
  text-align: center;
  margin-top: 3rem;
  padding-top: 2rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  font-size: 0.9rem;
`;

const Footer = () => {
  return (
    <StyledFooter>
      <FooterContent>
        <FooterSection>
          <FooterTitle>Sua Produtora</FooterTitle>
          <p>Transformando ideias em experiências audiovisuais memoráveis desde 2023.</p>
          <SocialLinks>
            <SocialIcon href="#" target="_blank" rel="noopener noreferrer">
              <span role="img" aria-label="Instagram">📷</span>
            </SocialIcon>
            <SocialIcon href="#" target="_blank" rel="noopener noreferrer">
              <span role="img" aria-label="Facebook">👍</span>
            </SocialIcon>
            <SocialIcon href="#" target="_blank" rel="noopener noreferrer">
              <span role="img" aria-label="YouTube">▶️</span>
            </SocialIcon>
            <SocialIcon href="#" target="_blank" rel="noopener noreferrer">
              <span role="img" aria-label="Vimeo">🎬</span>
            </SocialIcon>
          </SocialLinks>
        </FooterSection>
        
        <FooterSection>
          <FooterTitle>Serviços</FooterTitle>
          <FooterLink to="/categoria/produtos">Produtos</FooterLink>
          <FooterLink to="/categoria/publicidade">Publicidade</FooterLink>
          <FooterLink to="/categoria/comerciais">Comerciais</FooterLink>
          <FooterLink to="/categoria/empresariais">Empresariais</FooterLink>
          <FooterLink to="/categoria/lifestyle">Lifestyle</FooterLink>
          <FooterLink to="/categoria/retratos">Retratos</FooterLink>
        </FooterSection>
        
        <FooterSection>
          <FooterTitle>Empresa</FooterTitle>
          <FooterLink to="/sobre">Sobre Nós</FooterLink>
          <FooterLink to="/equipe">Nossa Equipe</FooterLink>
          <FooterLink to="/clientes">Clientes</FooterLink>
          <FooterLink to="/blog">Blog</FooterLink>
        </FooterSection>
        
        <FooterSection>
          <FooterTitle>Contato</FooterTitle>
          <p>Rua da Produtora, 123</p>
          <p>São Paulo, SP</p>
          <p>contato@suaprodutora.com</p>
          <p>(11) 99999-9999</p>
        </FooterSection>
      </FooterContent>
      
      <Copyright>
        <p>&copy; {new Date().getFullYear()} Sua Produtora Audiovisual. Todos os direitos reservados.</p>
      </Copyright>
    </StyledFooter>
  );
};

export default Footer;
