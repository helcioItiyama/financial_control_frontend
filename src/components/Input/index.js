import React from 'react';
import PropTypes from 'prop-types';

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

Input.propTypes = {
  onRef: PropTypes.object.isRequired, 
  handleFilter: PropTypes.func.isRequired, 
  filter: PropTypes.string.isRequired, 
  handleAddTransaction: PropTypes.func.isRequired,
}