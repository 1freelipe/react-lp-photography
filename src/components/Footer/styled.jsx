import styled from 'styled-components';

export const Container = styled.footer`
  width: 100%;
  background: #252525;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 30px;
  padding: 10px 0 0;
  margin-top: 50px;
`;

export const Title = styled.h3`
  font-family: 'Poppins', sans-serif;
  font-weight: 200;
  font-style: italic;
  color: #fffff0;
  font-size: 18px;
`;

export const IconsWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 50px;
  color: #fffff0;
  font-size: 35px;

  .whats,
  .insta,
  .twitter,
  .face {
    transition: all 0.2s ease-in-out;
    cursor: pointer;

    &:hover {
      transform: scale(1.1) rotate(9deg);
    }
  }
`;

export const SubFooter = styled.div`
  width: 100%;
  padding: 10px;
  background: rgba(0, 0, 0, 0.1);
  border-radius: 12px;
`;

export const Information = styled.p`
  font-family: 'Poppins', sans-serif;
  font-weight: 200;
  font-style: italic;
  color: #c3c7d6;
  text-align: center;
`;
