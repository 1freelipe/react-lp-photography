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
  margin: 10px auto;
`;

export const Logo = styled.h2`
  font-size: 30px;
  color: #fffff0;
  font-family: 'Poppins', sans-serif;
  font-weight: 700;
  font-style: normal;
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
`;

export const MainSection = styled.section`
  display: flex;
  justify-content: center;
  width: 100%;
  gap: 20px;
  padding: 20px;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    width: 80%;
    left: 50%;
    transform: translateX(-50%);
    bottom: 30px;
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
  }

  &::after {
    content: '';
    position: absolute;
    width: 80%;
    left: 50%;
    transform: translateX(-50%);
    height: 1px;
    background: #fffff0;
    bottom: 180px;
    z-index: 1;
    box-shadow: 0 0 4px rgba(255, 255, 240, 0.8);
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
  width: 70%;
  height: 650px;
  padding: 20px;
  gap: 20px;
  line-height: 2;
`;

export const DivImage = styled(motion.div)`
  width: 50%;
  height: 800px;
  padding: 20px;
  position: relative;

  img {
    width: 69%;
    height: auto;
    position: absolute;
    left: -21%;
    top: -9%;
    z-index: -1000;
  }
`;

export const MyName = styled.h1`
  color: #fffff0;
  font-family: 'Playfair Display', serif;
  font-optical-sizing: auto;
  font-weight: 500;
  font-style: normal;
  font-size: 60px;
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
`;
