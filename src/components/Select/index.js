import React from 'react';
import { GoTriangleLeft, GoTriangleRight } from 'react-icons/go';
import { Container } from './styles';

function Select({years, onHandleChange, onButtonToggle, currentDate}) {  
  const handleDate = (buttonType) => {
    onButtonToggle(buttonType)
  }

  return (
    <Container>
        <button onClick={() => handleDate('back')}><GoTriangleLeft size="20px"/></button>
          {years.length !== 0 ? (
            <select name="period" onChange={onHandleChange}>
              {years.map(({date, formatDate}) => (
                <React.Fragment key={date}>
                    <option selected={currentDate === date} value={date}>{formatDate}</option>
                </React.Fragment>
                )
              )}
            </select>
          ) : (
            <select>
              <option>carregando...</option>
            </select>
          )}
          <button onClick={() => handleDate('next')}><GoTriangleRight size="20px"/></button>
    </Container>  
  )
}

export default Select;