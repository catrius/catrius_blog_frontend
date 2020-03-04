import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { fetchCategories } from 'actions/fetch-data';
import Navbar from 'components/navbar';
import { categoriesSelector, fetchedCategoriesSelector } from 'selectors/header';
import { getCategoryPK } from 'selectors/router';


const mapStateToProps = (state, ownProps) => ({
  categories: categoriesSelector(state),
  fetchedCategories: fetchedCategoriesSelector(state),
  pk: getCategoryPK(state, ownProps),
});

const mapDispatchToProps = {
  fetchCategories,
};

const NavbarContainer = withRouter(connect(mapStateToProps, mapDispatchToProps)(Navbar));

export default NavbarContainer;
