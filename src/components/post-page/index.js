import React, { Component } from 'react';
import { func, number, shape, string } from 'prop-types';
import { Link } from 'react-router-dom';

import styles from 'components/post-page/post-page.module.sass';


export default class PostPage extends Component {
  componentDidMount() {
    const { fetchPost, pk } = this.props;
    fetchPost(pk);
  }

  render() {
    const { post } = this.props;
    const { title, date, category, content } = post;
    return (
      <div className={ styles['post-page'] }>
        <h4 className={ styles['title'] }>{ title }</h4>
        <div className={ styles['meta'] }>
          <Link to='#' className={ styles['category'] }>{ category }</Link>
          <span className={ styles['date'] }>{ date }</span>
        </div>
        <div className={ styles['content'] }>{ content }</div>
      </div>
    );
  }
}

PostPage.propTypes = {
  pk: number,
  fetchPost: func,
  post: shape({
    pk: number,
    title: string,
    date: string,
    excerpt: string,
    category: string,
  }),
};
