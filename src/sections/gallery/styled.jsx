import styled from 'styled-components';
import { motion } from 'framer-motion';

export const DivTitle = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin: 100px auto;
  width: 100%;
`;

export const Title = styled.h2`
  color: #252525;
  font-family: 'Poppins', sans-serif;
  font-weight: 500;
  font-style: italic;
  font-size: 50px;
  text-align: center;
  text-transform: uppercase;
`;

export const Information = styled(motion.p)`
  font-family: 'Poppins', sans-serif;
  font-weight: 200;
  font-style: italic;
  color: #252525;
`;

export const Container = styled.div`
  background: #fffff0;
  position: relative;
`;
