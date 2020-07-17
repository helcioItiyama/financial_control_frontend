import React from 'react';

import { Container, Span  } from './styles';

function Details({transactionDetails}) {
  const {income, outcome, transactionNumber, balance, formattedBalance} = transactionDetails;
  return (
    <Container>
      <p>Lançamentos: <span>{transactionNumber}</span> </p>
      <p>Receitas: <span style={{color: 'green'}}>{income}</span> </p>
      <p>Despesas: <span style={{color: 'red'}}>{outcome}</span> </p>
      <p>Saldos: <Span isPositive={balance > 0}>{formattedBalance}</Span></p>
    </Container>
  );
}

export default Details;