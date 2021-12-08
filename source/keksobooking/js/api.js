let adverts = [];
const getData = (onSuccess, onError) =>
  fetch('https://24.javascript.pages.academy/keksobooking/data')
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error('Что-то пошло не так');
      }
    })
    .then((data) => {
      adverts = data;
      onSuccess(data);
    })
    .catch(() => {
      onError();
    });

const sendData = (onSuccess, onError, data) => {
  const formData = new FormData(data);

  fetch('https://24.javascript.pages.academy/keksobooking', {
    method: 'POST',
    body: formData,
  }).then((response) => {
    if (response.ok) {
      onSuccess();
    } else {
      throw new Error('Что-то пошло не так');
    }
  }).catch(() => {
    onError();
  });
};

export {
  getData,
  sendData,
  adverts
};
