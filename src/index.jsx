import React from 'react';
import ReactDOM from 'react-dom';
import { GlobalStyles } from './styles/global-styles';
import Home from './templates/App';

ReactDOM.render(
  <React.StrictMode>

    {/* Componente pra estilo global */}
    <GlobalStyles />
    
    <Home />

  </React.StrictMode>,
  document.getElementById('root'),
);
