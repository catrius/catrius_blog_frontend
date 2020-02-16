import { get } from 'lodash';

export const getAllPosts = state => get(state, 'homepage.allPosts');
