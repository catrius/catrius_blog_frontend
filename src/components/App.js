import React from 'react';
import { ConnectedRouter } from 'connected-react-router';
import { Provider } from 'react-redux';
import { useMediaQuery } from 'react-responsive';
import cx from 'classnames';
import { HelmetProvider } from 'react-helmet-async';

import NavbarContainer from 'containers/navbar';
import styles from 'components/App.module.sass';
import Footer from 'components/footer';
import Router from 'components/router';
import store, { history } from 'store';
import Header from 'components/header';
import { DeviceContext, HelmetContext } from 'contexts';
import { DESKTOP, MOBILE, RESPONSIVE_CLASS_NAMES, TABLET, WIDTHS } from 'utils/constants';


export default function App() {
  const isDesktop = useMediaQuery({ minWidth: WIDTHS.DESKTOP });
  const isTablet = useMediaQuery({ minWidth: WIDTHS.TABLET, maxWidth: WIDTHS.DESKTOP - 1 });
  const isMobile = useMediaQuery({ maxWidth: WIDTHS.TABLET });
  const device = isDesktop ? DESKTOP : isTablet ? TABLET : isMobile ? MOBILE : DESKTOP;

  return (
    <HelmetProvider context={ HelmetContext }>
      <Provider store={ store }>
        <ConnectedRouter history={ history }>
          <div className={ styles['App'] }>
            <DeviceContext.Provider value={ device }>
              <Header/>
              <NavbarContainer/>
              <div className={ cx(styles['content'], styles[RESPONSIVE_CLASS_NAMES[device]]) }>
                <Router/>
              </div>
              <Footer/>
            </DeviceContext.Provider>
          </div>
        </ConnectedRouter>
      </Provider>
    </HelmetProvider>
  );
}
