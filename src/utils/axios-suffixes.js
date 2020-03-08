export const publicUrl = filePath => `${process.env.PUBLIC_URL}/${filePath}`;
export const successfully = fetchAction => `${fetchAction}_SUCCESS`;
export const failingly = fetchAction => `${fetchAction}_FAIL`;
