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
  let num = Math.floor(Math.random() * 5);
  console.log(num);
  switch (num) {
    case 0:
      return 'https://image.flaticon.com/icons/png/128/4333/4333609.png';
    case 1:
      return 'https://img-premium.flaticon.com/png/128/2202/premium/2202112.png?token=exp=1630088442~hmac=d71dced9c011890816611a069354c936';
    case 2:
      return 'https://img-premium.flaticon.com/png/512/706/premium/706807.png?token=exp=1630088442~hmac=c348c85f1d38edeb06aab12415f629c0';
    case 3:
      return 'https://img-premium.flaticon.com/png/128/1785/premium/1785918.png?token=exp=1630088557~hmac=97fb6bf882c902300bc5ee3659971221';
    case 4:
      return 'https://image.flaticon.com/icons/png/512/3048/3048127.png';
    default:
      return 'https://image.flaticon.com/icons/png/128/924/924874.png';
  }
  return 'https://image.flaticon.com/icons/svg/2154/2154651.svg';
};
