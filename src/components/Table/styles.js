import styled from 'styled-components';

export const Container = styled.table`
  margin-top: 20px;
  font-size: 1.5rem;
  width: 100%;
  border-collapse: separate;
  border-spacing: 0px 20px;

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
          padding-left: 60px;
        }

        &:last-child {
          border-top-right-radius: 8px;
          border-bottom-right-radius: 8px;
        }
      }
    }
  }
`;

export const Row = styled.tr `
  background: ${props => props.isCashIn ? '#9cdfbe' : '#ffcad4'};
  box-shadow: ${props => props.isCashIn ? '0px 0px 30px #4b8162 inset' : '0px 0px 30px #f08080 inset'};

  td {
    padding: 4px;
    text-align: center;
    
    &:first-child {
      border-top-left-radius: 8px;
      border-bottom-left-radius: 8px;
      overflow: hidden;
    }

    &:nth-child(2) {
      text-align: left;
      padding-left: 60px;
      > p {
        font-size: 1.2rem;
      }
    }
    
    &:last-child {
      border-top-right-radius: 8px;
      border-bottom-right-radius: 8px;

      button {
        border: none;
        background: none;
        font-size: 1.5rem;

        &:hover {
          color: #0f79af;
        }

        &:last-child {
          padding-left: 20px;
        }
      }
    }

    > div {
      display: flex;
      align-items: center;
    }
  }
`;

