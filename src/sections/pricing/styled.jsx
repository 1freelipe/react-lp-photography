import styled from 'styled-components';
import { motion } from 'framer-motion';

export const DivInformation = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin: 0 auto;
`;

export const Title = styled(motion.h2)`
  color: #fffff0;
  font-family: 'Poppins', sans-serif;
  font-weight: 500;
  font-style: italic;
  font-size: 50px;
  text-align: center;
  margin-top: 50px;
  text-transform: uppercase;
`;

export const Information = styled(motion.p)`
  font-family: 'Poppins', sans-serif;
  font-weight: 200;
  font-style: italic;
  color: #fffff0;
`;

export const PricingDiv = styled(motion.section)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 1700px;
  height: 700px;
  gap: 20px;
  margin: 80px auto;
  position: relative;
`;

export const DivArrow = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  cursor: pointer;

  .Arrow {
    color: #fffff0;
    position: absolute;
    top: 50%;
    right: 170px;
    font-size: 50px;
  }

  .Arrow1 {
    color: #fffff0;
    position: absolute;
    top: 50%;
    left: 170px;
    font-size: 50px;
  }
`;

export const CardPricing = styled(motion.div)`
  width: 450px;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.8);
  border-radius: 12px;
  border: 1px solid #c3c6d1;
  box-shadow: 8px 8px 12px rgba(0, 0, 0, 0.5);
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(1.02);
  }

  &.cardFloat {
    margin-bottom: 60px;
    background: #252525;
  }
`;

export const Subtitle = styled(motion.h3)`
  color: ${(props) => (props.$isPremium ? '#fffff0' : '#252525')};
  font-family: 'Poppins', sans-serif;
  font-weight: 400;
  font-style: italic;
  text-align: center;
  margin-top: 10px;
  position: relative;

  .star {
    position: absolute;
    top: 5px;
    right: 20px;
    font-size: 22px;
    color: #eb9d52;
  }

  &:after {
    content: '';
    position: absolute;
    bottom: -10px;
    height: 1px;
    width: 70%;
    background: ${(props) => (props.$isPremium ? '#fffff0' : '#252525')};
    left: 60px;
    box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
  }
`;

export const PriceTitle = styled.h3`
  color: ${(props) => (props.$isPremium ? '#fffff0' : '#252525')};
  text-align: center;
  font-family: 'Poppins', sans-serif;
  font-weight: 200;
  font-style: italic;
  margin-top: 30px;
`;

export const Price = styled.h2`
  color: ${(props) => (props.$isPremium ? '#fffff0' : '#252525')};
  text-align: center;
  font-family: 'Poppins', sans-serif;
  font-weight: 500;
  font-style: normal;
  margin-top: 20px;
  font-size: 50px;
`;

export const Package = styled.h2`
  width: 100%;
  padding: 7px;
  color: #fffff0;
  background: ${(props) => (props.$isPremium ? '#EB9D52' : '#924F11')};
  font-family: 'Poppins', sans-serif;
  font-weight: 300;
  font-style: italic;
  border: 1px solid #c3c6d1;
  text-align: center;
  margin-top: 50px;
`;
