import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  margin: 40px 0 40px;
  padding: 12px;
  border-radius: 8px;
  color: #0f171e;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #c4c4cf;
  box-shadow: 0px 0px 14px #0f171e inset;
  
  > p {
    font-size: 1.3rem;
    font-weight: bold;
  }
`;

export const Span = styled.span`
  color: ${props => props.isPositive ? 'green' : 'red'}
`;
