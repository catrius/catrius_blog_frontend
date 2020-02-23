import { get } from 'lodash';


export const getPK = (state, props) => parseInt(get(props, 'match.params.pk', ''));
