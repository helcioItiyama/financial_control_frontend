import styled, { keyframes } from 'styled-components';

export const Container = styled.div`
  margin-top: 8vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h4 {
    font-size: 2rem;
    margin-top: 10px;
    text-shadow: 1px 1px 8px green;
  }
`;

const filling = keyframes`
      from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

export const Money = styled.p`
  font-size: 4rem;
  border: 8px solid black;
  box-shadow: 1px 1px 8px green;
  border-radius: 50%;
  padding: 0px 21px;
  color: black;
  text-shadow: 1px 1px 8px green;
  animation: ${filling} 1s linear;

`;


  
  



