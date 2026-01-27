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
  color: #252525;
  font-family: 'Playfair Display', serif;
  font-weight: 500;
  font-style: italic;
  font-size: 50px;
  text-align: center;

  @media (max-width: 470px) {
    font-size: 40px;
  }
`;

export const Information = styled(motion.p)`
  font-family: 'Poppins', sans-serif;
  font-weight: 200;
  font-style: italic;
  color: #252525;

  @media (max-width: 560px) {
    text-align: center;
  }
`;

export const NavLinks = styled(motion.nav)`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 20px;
  border-bottom: 1px solid #c3c6d1;
  padding: 10px;
  max-width: 900px;
  box-shadow: 0 8px 8px #fffff0;

  @media (max-width: 920px) {
    width: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 0;
    padding: 5px;
  }
`;

export const NavList = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 20px;

  @media (max-width: 920px) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    width: 100%;
    gap: 15px;
    justify-content: center;
    justify-items: center;
  }
`;

export const Links = styled.li`
  font-family: 'Playfair Display', serif;
  font-weight: 500;
  color: ${(props) => (props.$isActive ? '#fffff0' : '#252525')};
  font-size: 16px;
  border: 1px solid #c3c6d1;
  padding: 7px;
  border-radius: 12px;
  box-shadow: 2px 4px 6px #c3c6d1;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  width: 130px;
  text-align: center;
  background: ${(props) => (props.$isActive ? '#252525' : '#fffff0')};

  &:hover {
    transform: scale(1.09);
  }

  @media (max-width: 460px) {
    width: 120px;
  }
`;

export const MainGallery = styled.main`
  width: 100%;
  padding: 10px;
  margin-top: 10px;
`;

export const PhotoGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
  grid-auto-rows: 300px;
  gap: 20px;
  width: 100%;
  z-index: 10;
  grid-auto-flow: dense;

  & > div:nth-child(4n + 1) {
    grid-column: span 1;
    grid-row: span 2;
  }
  & > div:nth-child(5n) {
    grid-column: span 2;
    grid-row: span 1;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    & > div {
      grid-column: span 1 !important;
      grid-row: span 1 !important;
    }
  }
`;

export const PhotoItem = styled(motion.div)`
  position: relative;
  border-radius: 12px;
  overflow: hidden;
  cursor: pointer;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.05);

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s ease;
  }

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.2);
    opacity: 0;
    transition: opacity 0.3s;
  }

  &:hover {
    img {
      transform: scale(1.1);
    }
    &::after {
      opacity: 1;
    }
  }
`;

export const ModalOverlay = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.6);
  z-index: 9999;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 40px;
  cursor: zoom-out;
  backdrop-filter: blur(10px);
`;

export const ModalContent = styled(motion.div)`
  position: relative;
  width: 100%;
  max-width: 1200px;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: default;
`;

export const ExpandedImage = styled(motion.img)`
  width: 100%;
  max-height: 80vh;
  object-fit: contain;
  border-radius: 8px;
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.5);
`;

export const CloseButton = styled.button`
  position: absolute;
  top: -40px;
  right: 0;
  background: transparent;
  border: none;
  color: #fffff0;
  font-size: 30px;
  cursor: pointer;
  opacity: 0.8;
  transition: all 0.3s ease-in-out;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  transform-origin: center;

  &:hover {
    opacity: 1;
    transform: rotateZ(180deg);
  }
`;

export const Footer = styled(motion.h3)`
  width: 500px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  font-size: 16px;
  font-family: 'Playfair Display', serif;
  font-weight: 300;
  font-style: italic;
  color: #252525;
  margin: 0 auto;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    width: 600px;
    height: 1px;
    background: #c3c6d1;
    box-shadow: 0 2px 8px #fffff0;
  }
`;
