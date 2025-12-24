import styled from 'styled-components';
import { motion } from 'framer-motion';

export const AboutSection = styled(motion.section)`
  width: 100%;
  min-height: 100vh;
  background: ${(props) =>
    props.$bgImage
      ? `linear-gradient(rgba(0,0,0,0.8), rgba(0,0,0,0.8)), url(${props.$bgImage})`
      : '#fffff0'};
  position: relative;
  background-size: cover;
  background-position: center;
  transition: background 0.5s ease-in-out;
  color: ${(props) => (props.$bgImage ? '#fffff0' : '#252525')};
  overflow: visible;
`;

export const DivNav = styled(motion.nav)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30%;
  min-width: 400px;
  border: 1px solid
    ${(props) => (props.$hasImage ? 'rgba(255, 255, 255, 0.2)' : '#c3c6d1')};
  border-radius: 17px;
  box-shadow: ${(props) =>
    props.$hasImage
      ? '0 8px 32px 0 rgba(0, 0, 0, 0.5)'
      : '4px 6px 6px #c3c6d1'};
  padding: 20px;
  backdrop-filter: ${(props) => (props.$hasImage ? 'blur(50px)' : 'none')};
  position: ${(props) => (props.$isSticky ? 'fixed' : 'absolute')};
  left: 50%;
  top: ${(props) => (props.$isSticky ? '20px' : 'calc(100vh + 20px)')};
  transform: translateX(-50%);
  z-index: 9999;
  background: #fffff0;
`;

export const NavLinks = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  list-style: none;
  gap: 40px;
`;

export const Link = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  font-family: 'Poppins', sans-serif;
  font-weight: 300;
  font-style: italic;
  cursor: pointer;
  position: relative;

  &::after {
    content: '';
    height: 2px;
    width: 0%;
    bottom: -4px;
    background: ${(props) => (props.$hasImage ? '#fffff0' : '#252525')};
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    transition: all 0.3s ease-in-out;
    display: ${(props) => (props.$noUnderline ? 'none' : 'block')};
  }

  &:hover::after {
    width: 100%;
  }
`;

export const DivContent = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 1200px;
  height: 930px;
  margin: 0 auto;
  border-radius: 12px;
  line-height: 2;
  text-align: center;
  position: relative;
`;

export const MyName = styled(motion.h2)`
  font-family: 'Playfair Display', serif;
  font-optical-sizing: auto;
  font-weight: 500;
  font-style: normal;
  font-size: 60px;
`;

export const Content = styled(motion.p)`
  font-family: 'Poppins', sans-serif;
  font-weight: 200;
  font-style: italic;
  font-size: 25px;
`;

export const Ass = styled.div`
  position: absolute;
  bottom: 130px;
  right: 130px;
  font-family: 'Poppins', sans-serif;
  font-weight: 300;
  font-style: italic;
`;

export const SideBarRight = styled(motion.div)`
  position: absolute;
  background: rgba(255, 255, 240, 0.9);
  right: 15px;
  top: 20%;
  width: 100px;
  height: 60%;
  border: 1px solid #c3c6d1;
  border-radius: 17px;
  box-shadow: -2px 5px 6px #c3c6d1;
  padding: 20px;
  z-index: 100;
`;

export const ImgWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 17px;
`;

export const Img = styled.div`
  display: flex;
  border: 1px solid #c3c6d1;
  border-radius: 20px;
  width: 80px;
  height: 80px;
  box-shadow: 2px 2px 6px #c3c6d1;
  cursor: pointer;
  transition: transform 0.3s ease-in-out;
  background-image: url(${(props) => props.$src});
  background-size: cover;
  background-position: center;
  transition: all 0.3s ease;

  &:hover {
    transform: scale(1.15);
  }
  border-color: ${(props) => (props.$isActive ? '#252525' : '#c3c6d1')};
`;

export const Clear = styled.button`
  width: 70px;
  border: 1px solid #c3c6d1;
  background: red;
  position: absolute;
  right: 1.5%;
  top: 15%;
  padding: 6px;
  color: #252525;
  background: #fffff0;
  border-radius: 9px;
  font-size: 15px;
  display: ${(props) => (props.$hasImage ? 'block' : 'none')};
  font-family: 'Poppins', sans-serif;
  font-weight: 300;
  font-style: italic;
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  &:hover {
    transform: scale(1.1);
  }
`;
