import React from 'react';
import ReactDOM from 'react-dom';

import '../assets/stylesheets/application.scss';
import Random from './components/Random.jsx';


const root = document.getElementById('root');
if (root) {
  ReactDOM.render(<Random />, root);
}
