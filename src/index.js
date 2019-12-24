import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faDog, faSignOutAlt, faCaretRight } from '@fortawesome/free-solid-svg-icons';

import App from './App';

import './index.css';

library.add(faDog, faCaretRight, faSignOutAlt);

const app = (
    <App />
  )

ReactDOM.render(app, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
