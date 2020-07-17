import React from 'react';
import ReactDOM from 'react-dom';
import GlobalStyle from './styles/Global';

import App from './pages/App';
import Title from './components/Title';

ReactDOM.render(
  <React.StrictMode>
    <Title/>
    <App />
    <GlobalStyle/>
  </React.StrictMode>,
  document.getElementById('root')
);
