import React from 'react';
import { ConnectedRouter } from 'connected-react-router';
import { Provider } from 'react-redux';
import { useMediaQuery } from 'react-responsive';
import cx from 'classnames';

import NavbarContainer from 'containers/navbar';
import styles from 'components/App.module.sass';
import Footer from 'components/footer';
import Router from 'components/router';
import store, { history } from 'store';
import Header from 'components/header';
import { DeviceTypeContext } from 'contexts';
import { WIDTHS, DESKTOP, TABLET, MOBILE, RESPONSIVE_CLASS_NAMES } from 'utils/constants';


export default function App() {
  const isDesktop = useMediaQuery({ minWidth: WIDTHS.DESKTOP });
  const isTablet = useMediaQuery({ minWidth: WIDTHS.TABLET, maxWidth: WIDTHS.DESKTOP - 1 });
  const isMobile = useMediaQuery({ maxWidth: WIDTHS.TABLET });
  const device = isDesktop ? DESKTOP : isTablet ? TABLET : isMobile ? MOBILE : DESKTOP;

  return (
    <Provider store={ store }>
      <ConnectedRouter history={ history }>
        <div className={ styles['App'] }>
          <DeviceTypeContext.Provider value={ device }>
            <Header/>
            <NavbarContainer/>
            <div className={ cx(styles['content'], styles[RESPONSIVE_CLASS_NAMES[device]]) }>
              <Router/>
            </div>
            <Footer/>
          </DeviceTypeContext.Provider>
        </div>
      </ConnectedRouter>
    </Provider>
  );
}
