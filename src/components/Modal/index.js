import React from 'react';
import { IoIosCloseCircle } from 'react-icons/io';

import { Container, DateInput, InputRadio, TextInput } from './styles';

function Modal({handleCloseModal}) {
  return (
    <Container>
      <form>
        <div>
          <h2>Edição de lançamento</h2>
          <IoIosCloseCircle 
            as="button" 
            size="1.5rem" 
            color="red" 
            style={{cursor: 'pointer'}}
            onClick={handleCloseModal}
          />
        </div>

        <section>
          <InputRadio>
            <label htmlFor="type1">
              <input type="radio" checked id="type1" name="balance" value="income"/>
              Receita
            </label>

            <label htmlFor="type2">
              <input type="radio" id="type2" name="balance" value="outcome"/>
              Despesa
            </label>
          </InputRadio>

          <TextInput>
            <div>
              <input type="text" id="description" name="description" value=""/>
              <label htmlFor="description"> Descrição:</label>
            </div>
                
            <div>
              <input type="text" id="category" name="category" value=""/>
              <label htmlFor="category">Categoria:</label> 
            </div>
          </TextInput>
          
         
          
          <DateInput>
            <div>
              <input type="number" id="value" name="value" value="" min="0"/>
              <label htmlFor="value">Valor:</label>  
            </div>

            <label htmlFor="date">
              <br/>
              <input name="yearMonthDay" id="date" value="" type="date"/>
            </label>
          </DateInput>
        </section>

        <button type="submit">Salvar</button>
      </form>
    </Container>
  );
}

export default Modal;