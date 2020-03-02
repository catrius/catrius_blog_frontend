import { connect } from 'react-redux';

import { fetchCategories } from 'actions/fetch-data';
import Navbar from 'components/navbar';
import { categoriesSelector, fetchedCategoriesSelector } from 'selectors/header';


const mapStateToProps = (state, ownProps) => ({
  categories: categoriesSelector(state),
  fetchedCategories: fetchedCategoriesSelector(state),
});

const mapDispatchToProps = {
  fetchCategories,
};

const NavbarContainer = connect(mapStateToProps, mapDispatchToProps)(Navbar);

export default NavbarContainer;
