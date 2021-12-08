import {
  PROPERTIES
} from './data.js';

// ! Обработка аватаров
function createAvatars(advert, cardElement) {
  if (advert.author.avatar) {
    cardElement.querySelector('.popup__avatar').src = advert.author.avatar;
  } else {
    cardElement.querySelector('.popup__avatar').remove();
  }
}

// ! Обработка фотографий недвижимости
function createImages(advert, cardElement) {
  const photos = cardElement.querySelector('.popup__photos');
  const photo = photos.querySelector('.popup__photo');
  if (advert.offer.photos === undefined || advert.offer.photos.length === 0) {
    photos.remove();
    return;
  }
  for (let k = 0; k < advert.offer.photos.length; k++) {
    const clonedPhoto = photo.cloneNode();
    clonedPhoto.src = advert.offer.photos[k];
    photos.appendChild(clonedPhoto);
  }
  photo.remove();
}

// ! Выбор типа недвижимости
function getFlatType(flatType) {
  if (flatType === 'flat') {
    return 'Квартира';
  } else if (flatType === 'bungalow') {
    return 'Бунгало';
  } else if (flatType === 'house') {
    return 'Дом';
  } else if (flatType === 'palace') {
    return 'Дворец';
  } else if (flatType === 'hotel') {
    return 'Отель';
  }
}

// ! Features
function createFeatures(advert, cardElement) {
  const features = cardElement.querySelector('.popup__features');
  if (advert.offer.features === undefined || advert.offer.features.length === 0) {
    features.remove();
    return;
  }
  for (let k = 0; k < PROPERTIES.length; k++) {
    if (advert.offer.features.includes(PROPERTIES[k])) {
      const featureClass = `.popup__feature--${PROPERTIES[k]}`;
      const feature = features.querySelector(featureClass);
      feature.textContent = PROPERTIES[k];
    } else {
      const featureClass = `.popup__feature--${PROPERTIES[k]}`;
      const feature = features.querySelector(featureClass);
      feature.remove();
    }
  }
}

// ! Заполнение карточки
function createCard(advert, cardElement) {
  createAvatars(advert, cardElement);
  createImages(advert, cardElement);
  createFeatures(advert, cardElement);
  if (advert.offer.title) {
    cardElement.querySelector('.popup__title').textContent = advert.offer.title;
  } else {
    cardElement.querySelector('.popup__title').remove();
  }
  if (advert.offer.address) {
    cardElement.querySelector('.popup__text--address').textContent = advert.offer.address;
  } else {
    cardElement.querySelector('.popup__text--address').remove();
  }
  if (advert.offer.price) {
    cardElement.querySelector('.popup__text--price').textContent = `${advert.offer.price} ₽/ночь`;
  } else {
    cardElement.querySelector('.popup__text--price').remove();
  }
  if (advert.offer.type) {
    cardElement.querySelector('.popup__type').textContent = getFlatType(advert.offer.type);
  } else {
    cardElement.querySelector('.popup__type').remove();
  }
  if (advert.offer.rooms && advert.offer.guests) {
    cardElement.querySelector('.popup__text--capacity').textContent = `${advert.offer.rooms} комнаты для
    ${advert.offer.guests} гостей`;
  } else {
    cardElement.querySelector('.popup__text--capacity').remove();
  }
  if (advert.offer.checkin && advert.offer.checkout) {
    cardElement.querySelector('.popup__text--time').textContent = `Заезд после ${advert.offer.checkin}, выезд до ${advert.offer.checkout}`;
  } else {
    cardElement.querySelector('.popup__text--time').remove();
  }
  if (advert.offer.description) {
    cardElement.querySelector('.popup__description').textContent = advert.offer.description;
  } else {
    cardElement.querySelector('.popup__description').remove();
  }
}

export {
  createCard
};
