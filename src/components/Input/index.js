import React from 'react';

import { Container } from './styles';

function Input({onRef, handleFilter, filter, handleAddTransaction}) {
  return(
    <Container>
        <button 
          type="button" 
          onClick={handleAddTransaction}
        >
          + NOVO LANÇAMENTO
        </button>

        <input 
          ref={onRef} 
          type="text" 
          placeholder="Filtro" 
          onChange={handleFilter} 
          value={filter}
        />
      </Container>
  );
}

export default Input;