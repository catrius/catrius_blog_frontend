import React from 'react';

import HomePage from 'components/home-page';
import styles from './App.sass';

function App() {
  return (
    <div className={ styles['App'] }>
      <HomePage/>
    </div>
  )
}

export default App;
