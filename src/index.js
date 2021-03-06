import React from 'react';
import { render } from 'react-dom';

import 'index.sass';
import * as serviceWorker from './serviceWorker';

import App from 'components/App';


render(
  <App />,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about-me service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
