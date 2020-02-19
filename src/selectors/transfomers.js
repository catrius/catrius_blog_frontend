import moment from 'moment';


export const transformPost = post => ({
  pk: post.pk,
  title: post.title,
  date: moment(post.created).format('ll'),
  excerpt: post.excerpt,
  category: post.category,
});
