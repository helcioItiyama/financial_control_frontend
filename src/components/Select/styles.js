import styled from 'styled-components';

export const Container = styled.div`
  width: 280px;
  margin: 0 auto;
  display: flex;
  align-items: center;

  >button {
    background: #0f79af;
    box-shadow: 0 0 22px #001a66 inset;
    padding: 16px;
  

    &:hover {
      color: #f2f4f6;
      background: #79b8f3
    }
  }

  select {
    padding: 16px 0px 16px 50px;
    width:200px;
  }

  @media(min-width: 375px) {
    width: 340px;

    select {
      width: 260px;
      padding:16px 0px 16px 90px;
    }
  }

  @media(min-width: 425px) {
    width: 380px;

    select {
      width: 300px;
      padding: 16px 0px 16px 110px;
    }
  }

  @media(min-width: 1024px) {
    width: 380px;
    margin-top: 30px;

    >button {
      padding: 8px 26px;
    }

    select {
      width: 300px;
      padding: 12px;
    }
  } 
`;
