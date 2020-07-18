import styled from 'styled-components';

export const Container = styled.div`
  min-width: 300px;
  height: 14vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #000;
  box-shadow: 0px 0px 16px #f2f4f6;

  >h1 {
    font-size: 1.4rem;
    color: #f2f4f6;
  }

  @media(min-width: 425px) {
    >h1 {
      font-size: 1.6rem;
    }
  }

  @media(min-width: 768px) {
    >h1 {
      font-size: 1.8rem;
    }
  }

  @media(min-width: 1024px) {
    >h1 {
      font-size: 2rem;
    }
  }
`;