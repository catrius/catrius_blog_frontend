import React, { Component } from 'react';
import { map } from 'lodash';
import { arrayOf, bool, func, shape, number, object, string } from 'prop-types';
import { Link } from 'react-router-dom';
import cx from 'classnames';

import styles from './navbar.module.sass';

import { CATEGORY_SHAPE, MOBILE, RESPONSIVE_CLASS_NAMES, SEARCH_ROUTER } from 'utils/constants';
import { DeviceContext } from 'contexts';


export default class Navbar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchText: props.searchQuery,
      searchShowing: true,
    };
  }

  componentDidMount() {
    const { fetchCategories, fetchedCategories } = this.props;
    const device = this.context;

    this.setState({ searchShowing: device !== MOBILE });
    !fetchedCategories && fetchCategories();
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    const { searchQuery } = this.props;

    if (searchQuery !== prevProps.searchQuery) {
      this.setState({ searchText: searchQuery });
    }
  }

  handleSearchChange = e => this.setState({ searchText: e.target.value });

  handleSearchSubmit = e => {
    const { history } = this.props;

    e.preventDefault();
    history.push(`${SEARCH_ROUTER}?q=${this.state.searchText}`);
  };

  toggleSearch = () => this.setState({ searchShowing: !this.state.searchShowing });

  render() {
    const { categories, pk } = this.props;
    const device = this.context;

    return (
      <div className={ styles['navbar'] }>
        <div className={ cx(styles['wrapper'], styles[RESPONSIVE_CLASS_NAMES[device]]) }>
          <div className={ cx(styles['categories'], { 'half': this.state.searchShowing }) }>
            {
              map(categories, category => (
                <Link
                  to={ category.url }
                  className={ cx(styles['category'], { [styles['current']]: pk === category.pk }) }
                  key={ category.pk }>
                  { category.name }
                </Link>
              ))
            }
            { device === MOBILE ? (
              <i
                className={ cx(styles['category'], 'fas',
                  { 'fa-search': !this.state.searchShowing, 'fa-times': this.state.searchShowing },
                ) }
                onClick={ this.toggleSearch }
              />
            ) : null }
          </div>
          {
            this.state.searchShowing ? (
              <form className={ styles['search'] } onSubmit={ this.handleSearchSubmit }>
                <input
                  className={ cx(styles['search-element'], styles['search-text']) }
                  type='text'
                  value={ this.state.searchText }
                  onChange={ this.handleSearchChange }
                  placeholder='Search'
                />
                <button
                  className={ cx(styles['search-element'], styles['search-button']) }
                  type='submit'
                >
                  <i className='fas fa-search'/>
                </button>
              </form>
            ) : null
          }
        </div>
      </div>
    );
  }
}

Navbar.propTypes = {
  categories: arrayOf(shape(CATEGORY_SHAPE)),
  fetchCategories: func,
  fetchedCategories: bool,
  pk: number,
  history: object,
  searchQuery: string,
};

Navbar.contextType = DeviceContext;
