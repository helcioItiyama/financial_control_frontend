import styled from 'styled-components';

export const Container = styled.div`
  max-width: 900px;
  width: 100vw;
  padding: 10px;
  margin: 10px auto 0;

  @media(min-width: 768px) {
    padding: 20px 73px;
  }

  @media(min-width: 1024px) {
    padding: 20px;
  }
`;
export const Message = styled.h5`
  margin-top: 20vh;
  text-align: center;
  font-size: 1rem;
  color: red;

  @media(min-width: 768px) {
    font-size: 1.2rem;
  }

  @media(min-width: 1024px) {
    font-size: 1.8rem;
  }
`;
