import styled from 'styled-components';

export const Container = styled.div`
  width: 282px;
  margin: 0 auto;
  display: flex;
  align-items: center;

  >button {
    background: #0f79af;
    box-shadow: 0 0 22px #001a66 inset;
    padding: 8px 26px;

    &:hover {
      color: #f2f4f6;
      background: #79b8f3
    }
  }

  select {
    padding: 12px;
    width:200px;
  }
`;
