import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { ShowFormProvider } from './components/ShowFormContext'
// import img1 from "./assets/images/img2.jpg"
import img1 from "./assets/images/img1.jpg"

ReactDOM.render(
  <ShowFormProvider>
    <div className="background" style={{ background: `url('${img1}') no-repeat center/cover` }}></div>
    <App />
  </ShowFormProvider>,
  document.getElementById('root')
);

