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

export const Imagesrc = () => {
  let num = Math.floor(Math.random() * 3);
  switch (num) {
    case 0:
      return 'https://image.flaticon.com/icons/png/128/4333/4333609.png';
    case 1:
      return 'https://img-premium.flaticon.com/png/512/1785/premium/1785918.png?token=exp=1630073051~hmac=7514419efa1df877a64c1d046060c135';
    case 2:
      return 'https://img-premium.flaticon.com/png/128/4134/premium/4134175.png?token=exp=1630073051~hmac=747c5840f80998cddfc30c1eccd1f715';
    case 3:
      return 'https://img-premium.flaticon.com/png/128/2202/premium/2202112.png?token=exp=1630073051~hmac=624d0627180ee24f67cbb395fa280461';
  }
  return 'https://image.flaticon.com/icons/png/128/924/924874.png';
};
