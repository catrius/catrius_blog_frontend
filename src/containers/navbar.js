import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { fetchCategories } from 'actions/fetch-data';
import Navbar from 'components/navbar';
import { categoriesSelector, fetchedCategoriesSelector } from 'selectors/categories';
import { getCategorySlug, getSearchQuery } from 'selectors/router';


const mapStateToProps = (state, ownProps) => ({
  categories: categoriesSelector(state),
  fetchedCategories: fetchedCategoriesSelector(state),
  slug: getCategorySlug(state, ownProps),
  searchQuery: getSearchQuery(state, ownProps),
});

const mapDispatchToProps = {
  fetchCategories,
};

const NavbarContainer = withRouter(connect(mapStateToProps, mapDispatchToProps)(Navbar));

export default NavbarContainer;
