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
`;

export const Title = styled.h3`
  font-family: 'Poppins', sans-serif;
  font-weight: 200;
  font-style: italic;
  color: #fffff0;
  font-size: 25px;
`;

export const IconsWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 50px;
  color: #fffff0;
  font-size: 30px;
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
