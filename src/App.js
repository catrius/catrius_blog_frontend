import React from 'react';
import { Provider } from 'react-redux';
import { Route, Switch } from 'react-router';
import { ConnectedRouter } from 'connected-react-router';

import styles from 'App.module.sass';
import HomePageContainer from 'containers/homepage';
import store, { history } from 'store';
import Header from 'components/header';
import Footer from 'components/footer';
import Sidebar from 'components/sidebar';


function App() {
  return (
    <Provider store={ store }>
      <ConnectedRouter history={ history }>
        <div className={ styles['App'] }>
          <Header/>
          <div className={ styles['content'] }>
            <Switch>
              <Route exact path='/'>
                <HomePageContainer/>
              </Route>
            </Switch>
            <Sidebar/>
          </div>
          <Footer/>
        </div>
      </ConnectedRouter>
    </Provider>
  );
}

export default App;
