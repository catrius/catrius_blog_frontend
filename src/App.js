import React from 'react';

import styles from './App.sass';

import HomePageContainer from 'containers/homepage';


function App() {
  return (
    <div className={ styles['App'] }>
      <HomePageContainer/>
    </div>
  );
}

export default App;
