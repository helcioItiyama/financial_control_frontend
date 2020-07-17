import React from 'react';
import { MdEdit, MdDelete } from 'react-icons/md';
import {TiArrowDownThick, TiArrowUpThick} from 'react-icons/ti';
import { IconContext } from 'react-icons';
import { Container, Row } from './styles';

function Table({ transactions }) {
  return (
    <Container>
      <thead>
        <tr>
          <th>Data</th>
          <th>Descrição</th>
          <th/>
          <th>Valor</th>
          <th>Ações</th>
        </tr>
      </thead>

      <tbody>
        {transactions.map(({
          _id, 
          category, 
          description, 
          value, 
          day, 
          month,
          type
        }) => (
          <Row key={_id} isCashIn={type === "+"}>
          <td>{`${day}/${month}`}</td>
          <td>
          <strong>{category}</strong>
            <p>{description}</p>
          </td>

          <td>
            {type === "+" ? (
              <IconContext.Provider value={{color: 'green', size: '2rem'}}>
               <TiArrowUpThick/>
              </IconContext.Provider>
            ) : (
              <IconContext.Provider value={{color: 'red', size: '2rem'}}>
                <TiArrowDownThick/>
              </IconContext.Provider>
              )} 
          </td>
          
          <td>{value}</td>
         
          <td>
            <button><MdEdit/></button> 
            <button><MdDelete/></button>
          </td>
        </Row>
      ))}
      </tbody>
    </Container>
  );
}

export default Table;