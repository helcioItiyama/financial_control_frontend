/* eslint-disable no-restricted-globals */
import React from 'react';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
import { MdEdit, MdDelete } from 'react-icons/md';
import {TiArrowDownThick, TiArrowUpThick} from 'react-icons/ti';
import { IconContext } from 'react-icons';
import { Container, Row } from './styles';
import api from '../../services/api';

function Table({ transactions, loadTransactions, handleOpen, handleModal }) {
  const handleDelete = async (id) => {
    const confirmation = confirm('Você deseja apagar transação?');

    try {
      if(confirmation) {
        await api.delete(`/api/transaction/${id}`);
        loadTransactions();
        toast.success("Transação apagada com sucesso!")
      }
    } catch(err) {
      toast.error("Não foi possível cancelar a transação");
    }
  } 

  const handleEdit = async (id) => {
    handleOpen();
    handleModal(id);
  }

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
          formatValue, 
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
          
          <td>{formatValue}</td>
         
          <td>
            <button onClick={() => handleEdit(_id)}><MdEdit/></button> 
            <button onClick={() => handleDelete(_id)}><MdDelete/></button>
          </td>
        </Row>
      ))}
      </tbody>
    </Container>
  );
}

export default Table;

Table.propTypes = {
  transactions: PropTypes.object.isRequired, 
  loadTransactions: PropTypes.func.isRequired, 
  handleOpen: PropTypes.func.isRequired, 
  handleModal: PropTypes.func.isRequired, 
}