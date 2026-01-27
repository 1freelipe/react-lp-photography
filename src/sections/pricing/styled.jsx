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
  margin-top: 100px;
  text-transform: uppercase;
`;

export const Information = styled(motion.p)`
  font-family: 'Poppins', sans-serif;
  font-weight: 200;
  font-style: italic;
  color: #fffff0;
  margin-bottom: 30px;

  @media (max-width: 560px) {
    text-align: center;
  }
`;

export const PricingDiv = styled(motion.section)`
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 1700px;
  gap: 20px;
  position: relative;

  @media (max-width: 560px) {
    width: auto;
  }

  @media (min-width: 768px) and (max-width: 1024px) {
    width: auto;
  }
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
    z-index: 100;

    @media (min-width: 400px) and (max-width: 1440px) {
      right: 0;
      top: 55%;
    }
  }

  .Arrow1 {
    color: #fffff0;
    position: absolute;
    top: 50%;
    left: 170px;
    font-size: 50px;
    z-index: 100;

    @media (min-width: 400px) and (max-width: 1440px) {
      left: 0;
      top: 55%;
    }
  }
`;

export const CardPricing = styled(motion.div)`
  min-width: 450px;
  min-height: 690px;
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

    @media (max-width: 1200px) {
      margin-bottom: 0;
    }
  }

  @media (max-width: 560px) {
    min-width: 420px;
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

export const DivItems = styled.div`
  width: 90%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 80px auto;
`;

export const ContentList = styled.ul`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
  color: ${(props) => (props.$isPremium ? '#fffff0' : '#252525')};
  gap: 15px;
`;

export const ListItems = styled.li`
  font-family: 'Poppins', sans-serif;
  font-weight: 300;
  font-style: italic;
  font-size: 16px;
`;

export const CTA = styled(motion.button)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 200px;
  padding: 10px;
  border: none;
  border: 1px solid #fffff0;
  font-family: 'Poppins', sans-serif;
  font-weight: 500;
  font-size: 15 px;
  font-style: italic;
  background: ${(props) => (props.$isPremium ? '#EB9D52' : '#252525')};
  color: #fffff0;
  margin: 0 auto;
  border-radius: 12px;
  cursor: pointer;
`;
