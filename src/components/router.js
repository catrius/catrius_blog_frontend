import React from 'react';
import { Route, Switch } from 'react-router-dom';

import HomePageContainer from 'containers/homepage';
import PostPageContainer from 'containers/post-page';
import { CATEGORY_ROUTER, POST_ROUTER } from 'utils/constants';
import CategoryPageContainer from 'containers/category-page';


function Router() {
  return (
    <Switch>
      <Route exact path='/'>
        <HomePageContainer/>
      </Route>
      <Route path={ POST_ROUTER }>
        <PostPageContainer/>
      </Route>
      <Route path={ CATEGORY_ROUTER }>
        <CategoryPageContainer/>
      </Route>
    </Switch>
  );
}

export default Router;
