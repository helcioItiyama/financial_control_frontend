import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  flex-direction: column-reverse;
  align-items: center;
  width: 100%;

  > button {
    background: #0f79af;
    box-shadow: 0 0 22px #001a66 inset;
    width: 280px;
    padding: 18px;
    font-size: 0.7rem;
    margin-top: 10px;
    font-weight: bold;

    &:hover {
      color: #f2f4f6;
      background: #79b8f3
    }
  }

  input {
    width: 280px;
    padding: 18px;

    &::placeholder {
      font-size: 0.7rem;
    }
  }

  @media(min-width: 375px) {
    > button {
    width: 340px;
    }

    input {
      width: 340px;
    }
  }

  @media(min-width: 425px) {
    > button {
    width: 380px;
    }

    input {
      width: 380px;
    }
  }

  @media(min-width: 768px) {
    > button {
    width: 600px;
    margin-top: 20px;
    }

    input {
      width: 600px;
    }
  }

  @media(min-width: 1024px) {
    flex-direction: row;
    align-items: center;
    justify-content: center;

    > button {
      margin-top: 0;
      width: initial;
      padding: 12px 40px;
      margin-right: 10px;
      font-size: 1rem;
    }

    input {
      flex: 1;
      width: initial;
      padding: 12px 8px;

      &::placeholder {
      font-size: 1.2rem;
    }
    }
  }
`;
