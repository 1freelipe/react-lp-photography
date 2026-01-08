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

  &.secondTitle {
    font-size: 32px;
    margin-bottom: 20px;
    font-weight: 400;
  }
`;

export const Information = styled(motion.p)`
  font-family: 'Poppins', sans-serif;
  font-weight: 200;
  font-style: italic;
  color: #252525;

  &.infoContact {
    position: absolute;
    top: -60px;
    left: 14%;
    font-family: 'Poppins', sans-serif;
    font-weight: 200;
    font-style: italic;
    font-size: 18px;
    padding: 10px;

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
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  margin-top: 80px;
  height: 700px;
`;

export const ContactImage = styled(motion.div)`
  width: 50%;
  padding: 10px;
  background: #252525;
  height: 100%;
  border-radius: 15px;
  border: 2px solid #eb9d52;
`;

export const LocationContainer = styled(motion.div)`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 30px;
  margin-top: 90px;
`;

export const MapContainer = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 90%;
  margin: 0 auto;

  .map {
    border: 0;
    border-radius: 12px;
    width: 650px;
    box-shadow: 2px 4px 12px rgba(0, 0, 0, 0.3);
  }
`;

export const IconsWrapper = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 20px;

  .insta {
    font-size: 30px;
    color: #252525;
    cursor: pointer;
    transition: all 0.2s ease-in-out;

    &:hover {
      transform: scale(1.1) rotate(9deg);
    }
  }

  .whats {
    font-size: 30px;
    color: #252525;
    cursor: pointer;
    transition: all 0.2s ease-in-out;

    &:hover {
      transform: scale(1.1) rotate(9deg);
    }
  }
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
`;

export const Form = styled(motion.form)`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 90%;
  gap: 30px;
  padding: 20px;
  height: 100%;
  position: relative;
`;

export const NameLastName = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
`;

export const NameInput = styled(motion.input)`
  width: 50%;
  border: none;
  padding: 10px;
  border: 2px solid #c3c6d1;
  font-family: 'Poppins', sans-serif;
  font-weight: 400;
  font-style: italic;
  border-radius: 9px;
  font-size: 20px;
  outline: none;

  &:focus {
    border-color: rgba(0, 0, 0, 0.6);
  }
`;

export const LastName = styled(motion.input)`
  width: 50%;
  border: none;
  padding: 10px;
  border: 2px solid #c3c6d1;
  font-family: 'Poppins', sans-serif;
  font-weight: 400;
  font-style: italic;
  border-radius: 9px;
  font-size: 20px;
  outline: none;

  &:focus {
    border-color: rgba(0, 0, 0, 0.6);
  }
`;

export const Service = styled(motion.input)`
  width: 100%;
  border: none;
  padding: 10px;
  border: 2px solid #c3c6d1;
  font-family: 'Poppins', sans-serif;
  font-weight: 400;
  font-style: italic;
  border-radius: 9px;
  font-size: 20px;
  outline: none;

  &:focus {
    border-color: rgba(0, 0, 0, 0.6);
  }
`;

export const Faq = styled(motion.textarea)`
  width: 100%;
  height: 200px;
  border: none;
  padding: 10px;
  border: 2px solid #c3c6d1;
  font-family: 'Poppins', sans-serif;
  font-weight: 400;
  font-style: italic;
  border-radius: 9px;
  font-size: 20px;
  outline: none;

  &:focus {
    border-color: rgba(0, 0, 0, 0.6);
  }
`;

export const Button = styled(motion.button)`
  width: 200px;
  padding: 10px;
  border: 1px solid #fffff0;
  background: #252525;
  color: #fffff0;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Poppins', sans-serif;
  font-weight: 300;
  font-style: normal;
  border-radius: 9px;
  font-size: 17px;
  cursor: pointer;
  transition: transform 0.3s ease-in-out;
  position: absolute;
  bottom: 0;
  right: 3%;
`;
