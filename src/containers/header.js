import { connect } from 'react-redux';

import { fetchCategories } from 'actions/fetch-data';
import Header from 'components/header';
import { categoriesSelector, fetchedCategoriesSelector } from 'selectors/header';


const mapStateToProps = (state, ownProps) => ({
  categories: categoriesSelector(state),
  fetchedCategories: fetchedCategoriesSelector(state),
});

const mapDispatchToProps = {
  fetchCategories,
};

const HeaderContainer = connect(mapStateToProps, mapDispatchToProps)(Header);

export default HeaderContainer;
