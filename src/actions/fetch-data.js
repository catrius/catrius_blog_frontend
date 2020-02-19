import { POSTS_URL, FETCH_ALL_POSTS, FETCH_SINGLE_POST } from 'utils/constants';
import { get } from 'actions/axios-requests';


export const fetchAllPosts = get(FETCH_ALL_POSTS, POSTS_URL);
export const fetchSinglePost = postPK => get(FETCH_SINGLE_POST, `${POSTS_URL}${postPK}/`);
