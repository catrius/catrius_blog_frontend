import { connect } from 'react-redux';

import { fetchCategories } from 'actions/fetch-data';
import Sidebar from 'components/sidebar';
import { categoriesSelector, fetchedCategoriesSelector } from 'selectors/sidebar';


const mapStateToProps = (state, ownProps) => ({
  categories: categoriesSelector(state),
  fetchedCategories: fetchedCategoriesSelector(state),
});

const mapDispatchToProps = {
  fetchCategories,
};

const SideBarContainer = connect(mapStateToProps, mapDispatchToProps)(Sidebar);

export default SideBarContainer;
