import React from 'react';
import { Route, Switch } from 'react-router-dom';

import HomepageContainer from 'containers/homepage-container';
import PostPageContainer from 'containers/post-page-container';
import { CATEGORY_ROUTER, POST_ROUTER, SEARCH_ROUTER } from 'utils/constants';
import CategoryPageContainer from 'containers/category-page-container';
import SearchPageContainer from 'containers/search-page-container';


function Router() {
  return (
    <Switch>
      <Route exact path='/'>
        <HomepageContainer/>
      </Route>
      <Route path={ POST_ROUTER }>
        <PostPageContainer/>
      </Route>
      <Route path={ CATEGORY_ROUTER }>
        <CategoryPageContainer/>
      </Route>
      <Route path={ SEARCH_ROUTER }>
        <SearchPageContainer/>
      </Route>
    </Switch>
  );
}

export default Router;
