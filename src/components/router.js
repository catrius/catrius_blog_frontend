import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { CATEGORY_ROUTER, POST_ROUTER, SEARCH_ROUTER } from 'utils/constants';
import SearchPageContainer from 'containers/search-page-container';
import Homepage from 'components/homepage';
import PostPage from 'components/post-page';
import CategoryPage from 'components/category-page';


function Router() {
  return (
    <Switch>
      <Route exact path='/'>
        <Homepage/>
      </Route>
      <Route path={ POST_ROUTER }>
        <PostPage/>
      </Route>
      <Route path={ CATEGORY_ROUTER }>
        <CategoryPage/>
      </Route>
      <Route path={ SEARCH_ROUTER }>
        <SearchPageContainer/>
      </Route>
    </Switch>
  );
}

export default Router;
