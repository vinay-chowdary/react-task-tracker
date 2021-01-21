import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { ShowFormProvider } from './components/ShowFormContext'

ReactDOM.render(
  <ShowFormProvider>
    <App />
  </ShowFormProvider>,
  document.getElementById('root')
);

