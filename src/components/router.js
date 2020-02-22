import React from 'react';
import { Route, Switch } from 'react-router-dom';

import HomePageContainer from 'containers/homepage';
import PostPageContainer from 'containers/post-page';
import { POST_ROUTER } from 'utils/constants';


function Router() {
  return (
    <Switch>
      <Route exact path='/'>
        <HomePageContainer/>
      </Route>
      <Route path={ POST_ROUTER }>
        <PostPageContainer/>
      </Route>
    </Switch>
  );
}

export default Router;
