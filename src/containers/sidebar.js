import { connect } from 'react-redux';

import { fetchAllCategories } from 'actions/fetch-data';
import Sidebar from 'components/sidebar';
import { allCategoriesSelector, fetchedAllCategoriesSelector } from 'selectors/sidebar';


const mapStateToProps = (state, ownProps) => ({
  allCategories: allCategoriesSelector(state),
  fetchedAllCategories: fetchedAllCategoriesSelector(state),
});

const mapDispatchToProps = {
  fetchAllCategories,
};

const SideBarContainer = connect(mapStateToProps, mapDispatchToProps)(Sidebar);

export default SideBarContainer;
