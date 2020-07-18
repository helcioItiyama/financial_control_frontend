import styled from 'styled-components';

export const Container = styled.div`
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(231, 227, 227, 0.9);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;

  form {
    background: #fff;
    padding: 40px;

    >div {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 30px;

      >h2 {
        font-size: 1.8rem;
      }

    }

    >button {
      background: #0f79af;
      box-shadow: 0 0 22px #001a66 inset;
      padding: 8px 26px;
      margin: 20px auto 0;
      display: block;
    }

    >section {
      border: 1px solid #000;
      padding: 30px;
    }
  }
`;

export const TextInput = styled.div`
  >div {
    display: flex;
    flex-direction: column-reverse;
    margin-bottom: 40px;

    label {
      display: inline-block;
      color: #999999;
      margin-bottom: 10px;
      }

    >input {
      border: none;
      display: block;
      border-bottom: 1px solid #999999;
      width: 100%;

      &:focus {
        border-bottom: 1px solid #0f79af;

        +label {
          color: #0f79af;
        }
      }
    }
  }
`;

export const InputRadio = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 40px;

  > label {
    font-size: 1.4rem;

    &:first-child {
      color: green;
    }

    &:last-child {
      color: red;
    }
    > input {
      margin-right: 10px;
    }
  }
`;

export const DateInput = styled.div`
  display: flex;
  align-items: center;

  div {
    display: flex;
    flex-direction: column-reverse;

    label {
      color: #999999;
      display: inline-block;
      margin-bottom: 10px;
    }

    input {
      display: block;
      border: none;
      border-bottom: 1px solid #999999;
      margin-right: 20px;

      &:focus {
        border-bottom: 1px solid #0f79af;

        +label {
          color: #0f79af;
        }
      }
    }
  }
`;
