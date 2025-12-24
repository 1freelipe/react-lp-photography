import styled from 'styled-components';
import { motion } from 'framer-motion';

export const SectionContainer = styled.section`
  position: relative;
  width: 100%;
  min-height: 100vh;
  background-color: #fffff0;
  color: #f4f4f4;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ContentLayer = styled.div`
  position: relative;
  z-index: 10;
  width: 100%;
  height: 100vh;
`;

export const Grain = styled(motion.div)`
  position: absolute;
  background-color: #252525;
  border-radius: 50%;
  pointer-events: none;
`;
