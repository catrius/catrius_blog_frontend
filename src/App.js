import React from 'react';

import HomePageContainer from 'containers/homepage';
import styles from './App.sass';

function App() {
  return (
    <div className={ styles['App'] }>
      <HomePageContainer/>
    </div>
  );
}

export default App;
