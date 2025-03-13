import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const StyledHeader = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
  background-color: ${props => props.scrolled ? 'rgba(255, 255, 255, 0.95)' : 'transparent'};
  box-shadow: ${props => props.scrolled ? '0 2px 10px rgba(0, 0, 0, 0.1)' : 'none'};
  transition: all 0.3s ease;
  backdrop-filter: ${props => props.scrolled ? 'blur(10px)' : 'none'};
`;

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem 2rem;
  max-width: 1400px;
  margin: 0 auto;

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

const Logo = styled(Link)`
  font-size: 1.8rem;
  font-weight: 700;
  color: var(--primary-color);
  z-index: 1001;
`;

const NavLinks = styled.div`
  display: flex;
  gap: 2rem;

  @media (max-width: 768px) {
    position: fixed;
    top: 0;
    right: ${props => (props.isOpen ? '0' : '-100%')};
    width: 70%;
    height: 100vh;
    background-color: var(--background-color);
    flex-direction: column;
    justify-content: center;
    align-items: center;
    transition: right 0.3s ease;
    box-shadow: -5px 0 15px rgba(0, 0, 0, 0.1);
    z-index: 1000;
  }
`;

const StyledNavLink = styled(NavLink)`
  font-size: 1rem;
  font-weight: 500;
  position: relative;
  
  &:after {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 0;
    height: 2px;
    background-color: var(--accent-color);
    transition: width 0.3s ease;
  }
  
  &:hover:after, &.active:after {
    width: 100%;
  }

  @media (max-width: 768px) {
    font-size: 1.2rem;
    margin: 1rem 0;
  }
`;

const MenuButton = styled.button`
  display: none;
  z-index: 1001;
  
  @media (max-width: 768px) {
    display: block;
    font-size: 1.5rem;
  }
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  opacity: ${props => (props.isOpen ? 1 : 0)};
  visibility: ${props => (props.isOpen ? 'visible' : 'hidden')};
  transition: opacity 0.3s ease, visibility 0.3s ease;
  z-index: 999;
`;

const Header = ({ darkMode, toggleDarkMode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    document.body.style.overflow = isOpen ? 'auto' : 'hidden';
  };

  const closeMenu = () => {
    setIsOpen(false);
    document.body.style.overflow = 'auto';
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <StyledHeader scrolled={scrolled}>
      <Nav>
        <Logo to="/">SUA PRODUTORA</Logo>
        
        <MenuButton onClick={toggleMenu}>
          {isOpen ? '✕' : '☰'}
        </MenuButton>
        
        <NavLinks isOpen={isOpen}>
          <StyledNavLink to="/" onClick={closeMenu}>Home</StyledNavLink>
          <StyledNavLink to="/categoria/produtos" onClick={closeMenu}>Produtos</StyledNavLink>
          <StyledNavLink to="/categoria/publicidade" onClick={closeMenu}>Publicidade</StyledNavLink>
          <StyledNavLink to="/categoria/comerciais" onClick={closeMenu}>Comerciais</StyledNavLink>
          <StyledNavLink to="/categoria/empresariais" onClick={closeMenu}>Empresariais</StyledNavLink>
          <StyledNavLink to="/categoria/lifestyle" onClick={closeMenu}>Lifestyle</StyledNavLink>
          <StyledNavLink to="/categoria/retratos" onClick={closeMenu}>Retratos</StyledNavLink>
          <StyledNavLink to="/sobre" onClick={closeMenu}>Sobre</StyledNavLink>
          <StyledNavLink to="/contato" onClick={closeMenu}>Contato</StyledNavLink>
        </NavLinks>
        
        <Overlay isOpen={isOpen} onClick={closeMenu} />
      </Nav>
    </StyledHeader>
  );
};

export default Header;
