import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  align-items: center;
  width: 100%;

  > button {
    background: #0f79af;
    box-shadow: 0 0 22px #001a66 inset;
    padding: 12px 40px;
    margin-right: 10px;
    font-weight: bold;

    &:hover {
      color: #f2f4f6;
      background: #79b8f3
    }
  }

  input {
    flex: 1;
    padding: 12px 8px;

    &::placeholder {
      font-size: 1.2rem;
    }
  }
`;
