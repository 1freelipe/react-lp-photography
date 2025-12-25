import styled from 'styled-components';
import { motion } from 'framer-motion';

export const SectionContainer = styled.section`
  position: relative;
  width: 100%;
  background-color: #252525;
  color: #f4f4f4;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
`;

export const ContentLayer = styled.div`
  position: relative;
  z-index: 10;
  width: 100%;
  min-height: 100vh;
`;

export const Grain = styled(motion.div)`
  position: absolute;
  background-color: #f4f4f4;
  border-radius: 50%;
  pointer-events: none;
`;

export const Meteor = motion(styled.div`
  position: absolute;
  height: 2px; /* Cauda fina */
  background: linear-gradient(
    90deg,
    rgba(255, 255, 255, 0.8),
    transparent
  ); /* Cauda fade */
  border-radius: 999px;
  opacity: 0;
  z-index: 10;
  pointer-events: none;

  /* A CABEÇA DO METEORO (O segredo do visual) */
  &::before {
    content: '';
    position: absolute;
    left: 0; /* Fica na ponta esquerda da linha */
    top: 50%;
    transform: translateY(-50%);
    width: 4px; /* Cabeça maior que a cauda */
    height: 4px;
    background: #fff;
    border-radius: 50%;
    box-shadow: 0 0 10px 2px rgba(255, 255, 255, 0.8); /* Glow forte na cabeça */
  }
`);
