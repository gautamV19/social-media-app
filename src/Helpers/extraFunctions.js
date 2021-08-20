export const getFormBody = (params) => {
  let madeUrl = [];
  for (const key in params) {
    const encodedKey = encodeURIComponent(key);
    const encodedValue = encodeURIComponent(params[key]);
    // console.log('inside getFormBody', encodedKey, encodedValue);
    madeUrl.push(encodedKey + '=' + encodedValue);
  }

  // console.log(madeUrl.join('&'));
  return madeUrl.join('&');
};

export const getToken = () => {
  return localStorage.getItem('token');
};
