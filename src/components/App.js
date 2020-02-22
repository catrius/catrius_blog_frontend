import React, { Component } from 'react';
import { ConnectedRouter } from 'connected-react-router';
import { Provider } from 'react-redux';

import styles from 'components/App.module.sass';
import Footer from 'components/footer';
import Header from 'components/header';
import Router from 'components/router';
import SidebarContainer from 'containers/sidebar';
import store, { history } from 'store';


export default class App extends Component {
  render() {
    return (
      <Provider store={ store }>
        <ConnectedRouter history={ history }>
          <div className={ styles['App'] }>
            <Header/>
            <div className={ styles['content'] }>
              <Router/>
              <SidebarContainer/>
            </div>
            <Footer/>
          </div>
        </ConnectedRouter>
      </Provider>
    );
  }
}
