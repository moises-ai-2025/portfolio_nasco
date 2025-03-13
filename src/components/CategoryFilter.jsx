import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const FilterContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1rem;
  margin-bottom: 3rem;
`;

const FilterButton = styled(motion.button)`
  padding: 0.6rem 1.2rem;
  background-color: ${props => props.active ? 'var(--primary-color)' : 'transparent'};
  color: ${props => props.active ? 'white' : 'var(--primary-color)'};
  border: 1px solid var(--primary-color);
  border-radius: 30px;
  font-size: 0.9rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: ${props => props.active ? 'var(--primary-color)' : 'rgba(15, 15, 15, 0.1)'};
  }
`;

const CategoryFilter = ({ categories, activeCategory, setActiveCategory }) => {
  return (
    <FilterContainer>
      <FilterButton
        active={activeCategory === 'todos'}
        onClick={() => setActiveCategory('todos')}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        Todos
      </FilterButton>
      
      {categories.map(category => (
        <FilterButton
          key={category}
          active={activeCategory === category.toLowerCase()}
          onClick={() => setActiveCategory(category.toLowerCase())}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {category}
        </FilterButton>
      ))}
    </FilterContainer>
  );
};

export default CategoryFilter;
