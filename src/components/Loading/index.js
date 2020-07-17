import React from 'react';

import { Container, Money } from './styles';

function Loading() {
  return (
    <Container>
      <Money>$</Money>
      <h4>carregando</h4>
    </Container>
  );
}

export default Loading;