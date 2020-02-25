import React, { Component } from 'react';
import { arrayOf, bool, func, shape } from 'prop-types';

import AboutMe from 'components/sidebar/about-me';
import Categories from 'components/sidebar/categories';
import FollowMe from 'components/sidebar/follow-me';
import Newsletter from 'components/sidebar/newsletter';
import Search from 'components/sidebar/search';
import styles from 'components/sidebar/sidebar.module.sass';
import { CATEGORY_SHAPE } from 'utils/constants';


export default class Sidebar extends Component {
  componentDidMount() {
    const { fetchCategories, fetchedCategories } = this.props;
    !fetchedCategories && fetchCategories();
  }

  render() {
    const { categories } = this.props;
    const aboutMeContent = (
      "Hi! I'm Thang Pham, a senior full stack web developer. My majors are Python, Django and React."
    );

    return (
      <div className={ styles['sidebar'] }>
        <AboutMe content={ aboutMeContent }/>
        <Search/>
        <Categories categories={ categories }/>
        <Newsletter/>
        <FollowMe/>
      </div>
    );
  }
}

Sidebar.propTypes = {
  fetchCategories: func,
  fetchedCategories: bool,
  categories: arrayOf(shape(CATEGORY_SHAPE)),
};
