import React from 'react';
import { Route, Switch } from 'react-router-dom';

import HomePageContainer from 'containers/homepage';
import SinglePostPageContainer from 'containers/single-post-page';
import { SINGLE_POST_ROUTER } from 'utils/constants';


function Router() {
  return (
    <Switch>
      <Route exact path='/'>
        <HomePageContainer/>
      </Route>
      <Route path={ SINGLE_POST_ROUTER }>
        <SinglePostPageContainer/>
      </Route>
    </Switch>
  );
}

export default Router;
