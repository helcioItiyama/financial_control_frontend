import React, { useState, useMemo } from 'react';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
import { IoIosCloseCircle } from 'react-icons/io';
import { actualMonth } from '../../utils/format';
import { Container, DateInput, InputRadio, TextInput, SubmitButton, Label } from './styles';
import api from '../../services/api';

function Modal({handleClose, edit, loadTransactions, onRef}) {
  const today = useMemo(() => {
    return actualMonth().today;
  }, []);
  
  const {
    _id: id,
    description: editDescription, 
    category: editCategory, 
    value: editValue, 
    type: editType,
    yearMonthDay: editYearMonthDay
  } = edit;

  const [description, setDescription] = useState(editDescription || '');
  const [category, setCategory] = useState(editCategory || '');
  const [value, setValue] = useState(editValue || 0);
  const [yearMonthDay, setYearMonthDay] = useState(editYearMonthDay || today);
  const [type, setType] = useState(editType ||'+');


  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      if(id) {
        await api.put(`/api/transaction/${id}`, {
          value,
          description,
          category,
          yearMonthDay,
          type,
        });
        toast.success("Transação editada com sucesso!")
  
      } else {
        await api.post('/api/transaction', {
          value,
          description,
          category,
          yearMonthDay,
          type,
        });
        toast.success("Transação cadastrada com sucesso!")
      }
      handleClose();
      loadTransactions();
     
    } catch(err) {
      if(id) {
        toast.error("Não foi possível editar a transação");
      } else {
        toast.error("Não foi possível cadastrar a transação");
      }
    }
  };

  return (
    <Container>
      <form onSubmit={handleSubmit} ref={onRef}>
        <div>
          {id ? (
            <h2>Edição de lançamento</h2>
          ) : (
            <h2>Inclusão de lançamento</h2>
          )}
          <IoIosCloseCircle 
            as="button" 
            size="1.5rem" 
            color="red" 
            style={{cursor: 'pointer'}}
            onClick={() => handleClose()}
          />
        </div>

        <section>
          <InputRadio >
            <Label htmlFor="+" color={id ? true : false}>
              <input 
                disabled={id ? true : false}
                type="radio" 
                checked={type === '+'}
                onChange={(event) => setType(event.target.id)}
                id="+" 
                name="balance" 
                value="income"
              />
              Receita
            </Label>

            <Label htmlFor="-" color={id ? true: false}>
              <input 
                disabled={id ? true : false}
                type="radio"
                checked={type === '-'}
                onChange={(event) => setType(event.target.id)}
                id="-" 
                name="balance" 
                value="outcome"
              />
              Despesa
            </Label>
          </InputRadio>

          <TextInput>
            <div>
              <input 
                type="text" 
                id="description" 
                name="description"
                value={description}
                onChange={(event) => setDescription(event.target.value)}
              />
              <label htmlFor="description"> Descrição:</label>
            </div>
                
            <div>
              <input 
                type="text" 
                id="category" 
                name="category"
                value={category}
                onChange={(event) => setCategory(event.target.value)}
              />
              <label htmlFor="category">Categoria:</label> 
            </div>
          </TextInput>
     
          <DateInput>
            <div>
              <input 
                type="number" 
                id="value" 
                name="value" 
                value={value} 
                onChange={(event) => setValue(event.target.value)}
                min="0"
                step="0.10"
              />
              <label htmlFor="value">Valor:</label>  
            </div>

            <label htmlFor="date">
              <br/>
              <input 
                name="yearMonthDay" 
                id="date" 
                value={yearMonthDay} 
                onChange={(event) => setYearMonthDay(event.target.value)}
                type="date"
              />
            </label>
          </DateInput>
        </section>
        
        <SubmitButton 
          disabled={(description && category && value) ? false : true} 
          type="submit"
        >
          Salvar
        </SubmitButton>
          
      </form>
    </Container>
  );
}

export default Modal;

Modal.propTypes = {
  handleClose: PropTypes.func.isRequired, 
  edit: PropTypes.object.isRequired, 
  loadTransactions: PropTypes.func.isRequired, 
  onRef: PropTypes.object.isRequired
}