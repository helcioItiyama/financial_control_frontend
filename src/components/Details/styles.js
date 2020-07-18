import styled from 'styled-components';

export const Container = styled.div`
  width: 280px;
  margin: 10px auto;
  padding: 10px;
  border-radius: 2px;
  color: #0f171e;
  background: #c4c4cf;
  box-shadow: 0px 0px 14px #0f171e inset;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 8px;
  
  > p {
    font-size: 0.7rem;
    font-weight: bold;
  }

  @media(min-width: 375px) {
    width: 340px;
  }

  @media(min-width: 425px) {
    width: 380px;
    margin: 20px auto;

    >p {
      font-size: 0.8rem;
    }
  }

  @media(min-width: 768px) {
    width: 600px;

    >p {
      font-size: 0.9rem;
    }
  }

  @media(min-width: 1024px) {
    width: initial;
    margin: 40px 0 40px;
    border-radius: 8px;
    grid-template-columns: repeat(4, 1fr);
    padding: 20px;

    >p {
      font-size: 1.2rem;
    }
  }
`;

export const Span = styled.span`
  color: ${props => props.isPositive ? 'green' : 'red'}
`;
