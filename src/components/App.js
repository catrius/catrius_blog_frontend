import React, { Component } from 'react';
import { ConnectedRouter } from 'connected-react-router';
import { Provider } from 'react-redux';

import HeaderContainer from 'containers/header';
import styles from 'components/App.module.sass';
import Footer from 'components/footer';
import Router from 'components/router';
import store, { history } from 'store';


export default class App extends Component {
  render() {
    return (
      <Provider store={ store }>
        <ConnectedRouter history={ history }>
          <div className={ styles['App'] }>
            <HeaderContainer/>
            <div className={ styles['content'] }>
              <Router/>
            </div>
            <Footer/>
          </div>
        </ConnectedRouter>
      </Provider>
    );
  }
}
