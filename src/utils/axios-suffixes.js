import { SUCCESS, FAIL } from 'utils/constants';


export const successfully = fetchAction => `${fetchAction}_${SUCCESS}`;
export const failingly = fetchAction => `${fetchAction}_${FAIL}`;
