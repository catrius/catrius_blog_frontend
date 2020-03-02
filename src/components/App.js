import React, { Component } from 'react';
import { ConnectedRouter } from 'connected-react-router';
import { Provider } from 'react-redux';

import NavbarContainer from 'containers/navbar';
import styles from 'components/App.module.sass';
import Footer from 'components/footer';
import Router from 'components/router';
import store, { history } from 'store';
import Header from 'components/header';


export default class App extends Component {
  render() {
    return (
      <Provider store={ store }>
        <ConnectedRouter history={ history }>
          <div className={ styles['App'] }>
            <Header/>
            <NavbarContainer/>
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
