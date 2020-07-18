import React from 'react';
import ReactDOM from 'react-dom';
import App from './pages/App';
import Title from './components/Title';
import { ToastContainer } from 'react-toastify';
import GlobalStyle from './styles/Global';

ReactDOM.render(
  <React.StrictMode>
    <Title/>
    <App />
    <GlobalStyle/>
    <ToastContainer autoClose={3000}/>
  </React.StrictMode>,
  document.getElementById('root')
);
