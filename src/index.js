import React from 'react';
import ReactDOM from 'react-dom';

import './styles/app.css';
import App from './components/App';
require('dotenv').config();

ReactDOM.render(<App />, document.querySelector('#root'));