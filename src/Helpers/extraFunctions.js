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
  // let num = Math.floor(Math.random() * 3);
  // switch (num) {
  //   case 0:
  //     return 'https://image.flaticon.com/icons/png/128/4333/4333609.png';
  //   case 1:
  //     return 'https://www.flaticon.com/free-icon/user_709722';
  //   case 2:
  //     return 'https://www.flaticon.com/free-icon/user_709722';
  //   case 3:
  //     return 'https://image.flaticon.com/icons/png/512/747/747376.png';
  //   default:
  //     return 'https://image.flaticon.com/icons/png/128/924/924874.png';
  // }
  return 'https://image.flaticon.com/icons/png/512/4333/4333609.png';
};
