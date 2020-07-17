import React from 'react';

// import { Container } from './styles';

function Modal() {
  return (
    <form>
        <div>
          <h2>Edição de lançamento</h2>
          <p>close</p>
        </div>

        <div>
          <label htmlFor="type1">
            <input type="radio" id="type1" name="balance" value="income"/>
            Receita
          </label>

          <label htmlFor="type2">
            <input type="radio" id="type2" name="balance" value="outcome"/>
            Despesa
          </label>
          
          <label htmlFor="description">
            Descrição:
            <input type="text" id="description" name="description" value=""/>
          </label>

          <label htmlFor="category">
            Categoria:
            <input type="text" id="category" name="category" value=""/>
          </label>
          
          <div>
            <label htmlFor="value">
              Valor:
              <input type="number" id="value" name="value" value="" min="0"/>
            </label>

            <label htmlFor="date">
              <input name="yearMonthDay" id="date" value="" type="date"/>
            </label>
          </div>
        </div>

        <button type="submit">Salvar</button>
      </form>
  );
}

export default Modal;