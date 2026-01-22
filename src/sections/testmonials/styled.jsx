import styled from 'styled-components';
import { motion } from 'framer-motion';

export const DivTitle = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin: 80px auto;
  width: 100%;
  line-height: 2;
  margin-bottom: 50px;
`;

export const Title = styled(motion.h2)`
  color: #fffff0;
  font-family: 'Poppins', sans-serif;
  font-weight: 200;
  font-style: normal;
  font-size: 50px;
  text-align: center;
  text-transform: uppercase;
`;

export const Information = styled(motion.p)`
  font-family: 'Poppins', sans-serif;
  font-weight: 200;
  font-style: italic;
  color: #fffff0;
`;

export const DivContent = styled.section`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  margin: 0 auto;
  width: 100%;
  max-width: 1600px;
  height: auto;
  padding: 20px;
  gap: 30px;
  position: relative;
  margin-bottom: 100px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }

  .quote {
    font-size: 50px;
    position: absolute;
    bottom: 150px;
    left: 20px;
  }
`;

export const CardTest = styled.div`
  width: 100%;
  height: 500px;
  min-height: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background: rgba(37, 37, 37, 0.1);
  backdrop-filter: blur(2px);
  border-radius: 12px;
  box-shadow: 4px 4px 0px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease-in-out;
  border: 2px solid #eb9d52;
  padding: 5px;
  gap: 20px;
  transform-style: preserve-3d;

  &:hover {
    transform: translateY(-20px);
    box-shadow: 10px 10px 2px rgba(0, 0, 0, 0.6);
  }
`;

export const CardPerspectiveWrapper = styled.div`
  perspective: 1000px;
  width: 100%;
  height: 100%;
`;

export const ImgClient = styled.img`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #c3c6d1;
  border-radius: 50%;
  width: 150px;
  height: 150px;
`;

export const StarWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  gap: 10px;
  color: #eb9d52;
`;

export const ClientName = styled.h2`
  font-family: 'Playfair Display', serif;
  font-weight: 400;
  font-style: italic;
  font-size: 20px;
  color: #fffff0;
`;

export const EventName = styled.h3`
  font-family: 'Playfair Display', serif;
  font-weight: 300;
  font-style: italic;
  font-size: 15px;
  color: #fffff0;
`;

export const ClientComent = styled.p`
  font-family: 'Poppins', sans-serif;
  font-weight: 200;
  font-style: italic;
  text-align: center;
  padding: 5px;
  color: #fffff0;
`;
