import moment from 'moment';


export const transformPost = post => ({
  pk: post.pk,
  title: post.title,
  date: moment(post.created).format('lll'),
  excerpt: post.excerpt,
  content: post.content,
  category: post.category,
});
