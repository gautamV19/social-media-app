export const getFormBody = (params) => {
  let madeUrl = [];
  for (const key in params) {
    const encodedKey = encodeURIComponent(params);
    const encodedValue = encodeURIComponent(params[key]);
    madeUrl.push(encodedKey + '=' + encodedValue);
  }
  return madeUrl.join('&');
};
