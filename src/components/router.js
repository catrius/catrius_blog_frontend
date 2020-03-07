import React from 'react';
import { Route, Switch } from 'react-router-dom';

import HomepageContainer from 'containers/homepage';
import PostPageContainer from 'containers/post-page';
import { CATEGORY_ROUTER, POST_ROUTER, SEARCH_ROUTER } from 'utils/constants';
import CategoryPageContainer from 'containers/category-page';
import SearchPageContainer from 'containers/search-page';


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
