import styled from 'styled-components';
import { motion } from 'framer-motion';

export const DivNavLinks = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 650px;
  padding: 15px 20px;
  border: 1px solid #fffff0;
  border-radius: 45px;
  background: #252525;
  box-shadow: 8px 8px 8px rgba(0, 0, 0, 0.3);
`;

export const DivNav = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 95%;
  margin: 10px auto 50px;
  padding: 5px;

  @media (max-width: 899px) {
    justify-content: center;
  }

  @media (min-width: 350px) and (max-width: 600px) {
    display: none;
  }
`;

export const DivNavSecond = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5px;
  width: 95%;
  margin: 10px auto 50px;
  position: relative;
  z-index: 101;

  @media (min-width: 599px) {
    display: none;
  }
`;

export const Logo = styled.h2`
  font-size: 30px;
  color: #fffff0;
  font-family: 'Poppins', sans-serif;
  font-weight: 700;
  font-style: normal;

  @media (min-width: 350px) and (max-width: 1300px) {
    display: none;
  }
`;

export const NavLinks = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  list-style: none;
  gap: 25px;
`;

export const Link = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  color: #fffff0;
  font-family: 'Poppins', sans-serif;
  font-weight: 200;
  font-style: normal;
  cursor: pointer;
  position: relative;

  &::after {
    content: '';
    height: 1px;
    width: 0%;
    bottom: -4px;
    background: #fffff0;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    transition: all 0.3s ease-in-out;
    display: ${(props) => (props.$noUnderline ? 'none' : 'block')};
  }

  &:hover::after {
    width: 100%;
  }

  .wpp {
    font-size: 25px;
    transition: all 0.2s ease-in-out;

    &:hover {
      transform: scale(1.3) rotateZ(9deg);
    }
  }

  .instagram {
    font-size: 25px;
    transition: all 0.2s ease-in-out;

    &:hover {
      transform: scale(1.3) rotateZ(9deg);
    }
  }

  .facebook {
    font-size: 22px;
    transition: all 0.2s ease-in-out;

    &:hover {
      transform: scale(1.3) rotateZ(9deg);
    }
  }

  .twitter {
    font-size: 20px;
    transition: all 0.2s ease-in-out;

    &:hover {
      transform: scale(1.3) rotateZ(9deg);
    }
  }
`;

export const IconsWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 15px;

  @media (max-width: 899px) {
    display: none;
  }
`;

export const MainSection = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  width: 100%;
  gap: 20px;
  padding: 40px 5%;
  position: relative;
  margin-bottom: 50px;

  &::before {
    content: '';
    position: absolute;
    width: 80%;
    left: 50%;
    transform: translateX(-50%);
    bottom: 0px;
    height: 150px;
    z-index: 0;
    pointer-events: none;
    clip-path: polygon(0 0, 100% 0, 50% 100%);

    background: linear-gradient(
      to bottom,
      rgba(255, 255, 240, 0.5) 0%,
      rgba(255, 255, 240, 0.2) 30%,
      rgba(255, 255, 240, 0.1) 70%,
      transparent 100%
    );
    filter: blur(40px);

    @media (min-width: 600px) and (max-width: 900px) {
      bottom: -13px;
    }
  }

  &::after {
    content: '';
    position: absolute;
    width: 80%;
    left: 50%;
    transform: translateX(-50%);
    height: 1px;
    background: #fffff0;
    bottom: 20.5%;
    z-index: 1;
    box-shadow: 0 0 4px rgba(255, 255, 240, 0.8);

    @media (min-width: 1100px) and (max-width: 1400px) {
      bottom: 25%;
    }

    @media (min-width: 912px) and (max-width: 1024px) {
      bottom: 19.5%;
    }
  }

  @media (min-width: 350px) and (max-width: 900px) {
    padding: 0;
    grid-template-columns: 1fr;
  }

  @media (min-width: 1100px) and (max-width: 1400px) {
    margin-top: 130px;
  }

  @media (min-width: 820px) and (max-width: 1024px) {
    margin-top: 165px;
    padding-right: 0;
  }
`;

export const DivArrow = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  position: absolute;
  bottom: 20px;
  transform: translateX(-50%);
  cursor: pointer;
  z-index: 20;

  .arrow {
    font-size: 25px;
    color: #fffff0;
  }
`;

export const DivContent = styled(motion.div)`
  display: flex;
  align-items: flex-end;
  justify-content: center;
  flex-direction: column;
  height: 650px;
  padding: 20px;
  gap: 20px;
  line-height: 2;

  @media (min-width: 350px) and (max-width: 900px) {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0;
  }

  @media (min-width: 901px) and (max-width: 1099px) {
    margin-bottom: 35px;
  }

  @media (min-width: 1100px) and (max-width: 1400px) {
    height: auto;
    margin-bottom: 150px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const DivImage = styled(motion.div)`
  padding: 20px;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  pointer-events: none;
  width: 100%;
  height: 100%;

  img {
    width: 60%;
    height: auto;
    opacity: 0.8;
    transform: translateX(-50%) translateY(-15%);
    position: relative;
    z-index: -100;
  }

  @media (min-width: 350px) and (max-width: 400px) {
    img {
      position: absolute;
      top: 16.5%;
      right: -67%;
      width: 120%;
    }
  }

  @media (min-width: 400px) and (max-width: 576px) {
    img {
      position: absolute;
      top: 15%;
      width: 100%;
      right: -48%;
    }
  }

  @media (min-width: 577px) and (max-width: 768px) {
    position: absolute;
    top: 3%;
    width: 100%;
    right: -30%;
  }

  @media (min-width: 769px) and (max-width: 1099px) {
    position: absolute;
    right: -25%;
    top: 4%;
    width: 90%;
  }

  @media (min-width: 1440px) and (max-width: 1798px) {
    position: absolute;
    width: 60%;
    right: -5%;
    top: 5%;
  }
`;

export const MyName = styled.h1`
  color: #fffff0;
  font-family: 'Playfair Display', serif;
  font-optical-sizing: auto;
  font-weight: 500;
  font-style: normal;
  font-size: 60px;
  width: auto;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  &.secondTitle {
    font-size: 25px;
    font-style: italic;
    opacity: 0.9;
  }

  @media (min-width: 350px) and (max-width: 900px) {
    font-size: 30px;
  }

  @media (min-width: 1100px) {
    font-size: 50px;
  }

  @media (min-width: 1101px) and (max-width: 1400px) {
    font-size: 40px;
    white-space: nowrap;
  }
`;

export const Content = styled.p`
  color: #fffff0;
  font-family: 'Poppins', sans-serif;
  font-weight: 200;
  font-style: italic;
  font-size: 25px;

  &.subtitle {
    font-size: 20px;
    margin-bottom: 30px;
  }

  @media (max-width: 500px) {
    font-size: 20px;
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 40px;
`;

export const ButtonP = styled.button`
  width: 200px;
  border: none;
  border: 1px solid #fffff0;
  cursor: pointer;
  padding: 10px;
  border-radius: 7px;
  background: #252525;
  color: #fffff0;
  font-family: 'Poppins', sans-serif;
  font-weight: 300;
  font-style: italic;
  font-size: 15px;
  text-transform: uppercase;
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(1.05);
  }

  @media (min-width: 350px) and (max-width: 900px) {
    width: 145px;
    font-size: 14px;
  }
`;

export const ButtonC = styled.button`
  width: 200px;
  border: none;
  border: 1px solid #fffff0;
  cursor: pointer;
  padding: 10px;
  border-radius: 7px;
  background: #252525;
  color: #fffff0;
  font-family: 'Poppins', sans-serif;
  font-weight: 300;
  font-style: italic;
  font-size: 15px;
  text-transform: uppercase;
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(1.05);
  }

  @media (min-width: 350px) and (max-width: 900px) {
    width: 155px;
    font-size: 14px;
  }
`;

export const DivMenu = styled(motion.div)`
  position: absolute;
  background: #222222;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  height: 100%;
  z-index: 100;
  gap: 10px;
  display: none;

  @media (max-width: 599px) {
    display: flex;
  }
`;
