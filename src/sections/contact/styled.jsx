import styled from 'styled-components';
import { motion } from 'framer-motion';

export const DivTitle = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin: 40px auto;
  width: 100%;
  line-height: 2;
  margin-bottom: 20px;
`;

export const Title = styled(motion.h2)`
  color: #252525;
  font-family: 'Playfair Display', serif;
  font-weight: 500;
  font-style: italic;
  font-size: 50px;
  text-align: center;
`;

export const Information = styled(motion.p)`
  font-family: 'Poppins', sans-serif;
  font-weight: 200;
  font-style: italic;
  color: #252525;

  &.infoContact {
    position: absolute;
    top: -30px;
    left: 16%;
    font-weight: 400;

    span {
      color: #4fce5d;
      font-weight: 700;
    }
  }
`;

export const Container = styled(motion.section)`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  gap: 20px;
`;

export const ContactContainer = styled.div`
  width: 50%;
  height: 600px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background: red;
  position: relative;
`;

export const LocationContainer = styled.div`
  width: 50%;
  height: 600px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background: red;
`;
