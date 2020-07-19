import styled from 'styled-components';

export const Container = styled.div`
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #fff;
  padding: 18px 8px;

  font-size: 1rem;

  form {
    background: #fff;
    margin: 20px auto;
    width: 280px;

    >div {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 40px;

      >h2 {
        font-size: 1.4rem;
      }
    }

    >section {
      border: 1px solid #000;
      padding: 10px;
    }
  }

  @media(min-width: 375px) {
    form {
      width: 320px;
    }
  }

  @media(min-width: 768px) {
    form {
      width: 600px;

      >div {
        margin-bottom: 30px;
      }
    }
  }

  @media(min-width: 1024px) {
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(231, 227, 227, 0.9);
    font-size: 1.2rem;

    form {
      width: 500px;
      padding: 40px;

      >div {
        margin-bottom: 30px;

        >h2 {
          font-size: 1.8rem;
        }
      }

      >section {
        padding: 30px;
      }
    }
  }
`;

export const SubmitButton = styled.button`
  background: ${props => props.disabled ? '#999999' : '#0f79af'};
  box-shadow: ${props => props.disabled ? '0 0 22px #777777 inset' : '0 0 22px #001a66 inset'};
  padding: 16px 8px;
  width: 280px;
  margin: 40px auto 0;
  display: block;
  font-size: 1.2rem;

  &:hover {
      color: ${props => props.disabled ? '' : '#f2f4f6'};
      background: ${props => props.disabled ? '' : '#79b8f3'};
    }

  @media(min-width: 375px) {
    width: 320px;
  }

  @media(min-width: 768px) {
    width: 600px;
    margin-top: 30px;
  }

  @media(min-width: 1024px) {
    width: initial;
    padding: 8px 26px;
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
`;

export const Label = styled.label`
  font-size: 1rem;

  &:first-child {
    color: ${props => props.color ? "#999999" : "green" }
  }

  &:last-child {
    color: ${props => props.color ?  "#999999" : "red" }
  }

  >input {
  margin-right: 10px;
  }

  @media(min-width: 1024px) {
    font-size: 1.4rem;
  }
`;

export const DateInput = styled.div`

  > label {
    input {
      width: 260px;
      margin-bottom: 20px;
    }
  }

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
      margin-bottom: 20px;

      &:focus {
        border-bottom: 1px solid #0f79af;

        +label {
          color: #0f79af;
        }
      }
    }
  }

  @media(min-width: 375px) {
    > label {
      input {
        width: 300px;
      }
    }
  }

  @media(min-width: 768px) {
    > label {
      input {
        width: 580px;
      }
    }
  }

  @media(min-width: 1024px) {
    display: flex;
    align-items: center;

    > label {
      input {
        width: 170px;
        margin-bottom: 20px;
      }
    }
    
    div {
      input {
        width: 170px;
        margin-right: 20px;
      }
    }
  }
`;
