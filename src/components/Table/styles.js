import styled from 'styled-components';

export const Container = styled.table`
  padding: 10px;
  font-size: 0.9rem;
  min-width: 200px;
  width: 100%;
  border-collapse: separate;
  border-spacing: 0px 10px;
  border-radius: 8px;
  
  thead {
    tr {
      box-shadow: 0px 2px 4px #0f171e;
      background:none;

      color: #f2f4f6;
      
      th {
        &:first-child {
          border-top-left-radius: 8px;
          border-bottom-left-radius: 8px;
          overflow: hidden;
        }

        &:nth-child(2) {
          text-align: left;
          padding-left: 10px;
        }

        &:last-child {
          border-top-right-radius: 8px;
          border-bottom-right-radius: 8px;
        }
      }
    }
  }

  @media(min-width: 768px) {
    border-spacing: 0px 15px;   
  }

  @media(min-width: 1024px) {
    padding: 0;
    margin-top: 20px;
    font-size: 1.5rem;
    border-spacing: 0px 20px;

    thead {
      tr {        
        th {
          &:nth-child(2) {
            padding-left: 60px;
          }
        }
      }
    }
  }
`;

export const Icons = styled.p`
  font-size: 1rem;
  display:flex;
  align-items: center;

  @media(min-width: 1024px) {
    font-size: 2rem;
  }
`;

export const Row = styled.tr `
  background: ${props => props.isCashIn ? '#9cdfbe' : '#ffcad4'};
  box-shadow: ${props => props.isCashIn ? '0px 0px 30px #4b8162 inset' : '0px 0px 30px #f08080 inset'};
  width: 20px;
  td {
    padding: 16px 4px;
    text-align: center;
    width: 2px;
   
    
    &:first-child {
      border-top-left-radius: 8px;
      border-bottom-left-radius: 8px;
      overflow: hidden; 
    }

    &:nth-child(2) {
      text-align: left;
      padding-left: 10px;
      > p {
        font-size: 0.6rem;
      }
    }
    
    &:last-child {
      border-top-right-radius: 8px;
      border-bottom-right-radius: 8px;

      div {
        display: flex;
        align-items: center;
        justify-content: center;

        button {
          border: none;
          background: none;
          font-size: 1rem;

          &:hover {
            color: #0f79af;
          }

          &:last-child {
            padding-left: 15px;
          }
        }
      }
    }

    > div {
      display: flex;
      align-items: center;
    }
  }

  @media(min-width: 768px) {
    td {
      &:nth-child(2) {
        > p {
          font-size: 0.8rem;
        }
      }

      &:last-child {
        div {
          button {
            &:last-child {
              padding-left: 20px;
            }
          }
        }
      }
    }
  }

  @media(min-width: 1024px) {
    td {
        padding: 4px;
      &:nth-child(2) {
        padding-left: 60px;
        > p {
          font-size: 1.2rem;
        }
      }

      &:last-child {
        div {
          button {
            font-size: 1.5rem;
          }
        }
      }
    }
  }
`;

