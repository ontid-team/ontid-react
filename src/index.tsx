import { StrictMode } from 'react';

import ReactDOM from 'react-dom';
import { Router } from 'react-router-dom';

import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { history } from './shared/utils';

ReactDOM.render(
  <StrictMode>
    <Router history={history}>
      <App />
    </Router>
  </StrictMode>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
