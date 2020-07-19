import React from 'react';
import PropTypes from 'prop-types';

import { Container } from './styles';

function Input({handleFilter, filter, handleAddTransaction}) {
  return(
    <Container>
        <button 
          type="button" 
          onClick={handleAddTransaction}
        >
          + NOVO LANÇAMENTO
        </button>

        <input 
          type="text" 
          placeholder="Filtro" 
          onChange={handleFilter} 
          value={filter}
        />
      </Container>
  );
}

export default Input;

Input.propTypes = {
  handleFilter: PropTypes.func.isRequired, 
  filter: PropTypes.string.isRequired, 
  handleAddTransaction: PropTypes.func.isRequired,
}