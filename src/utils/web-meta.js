import { isEmpty } from 'lodash';

import { WEB_NAME } from 'utils/constants';


export const buildTitle = text => !isEmpty(text) ? `${text} - ${WEB_NAME}` : WEB_NAME;
