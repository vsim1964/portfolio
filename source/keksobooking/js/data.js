const PROPERTIES = [
  'wifi',
  'dishwasher',
  'parking',
  'washer',
  'elevator',
  'conditioner',
];
const MAP_LATITUDE = 35.69968;
const MAP_LONGITUDE = 139.75708;
const MIN_NAME_LENGTH = 30;
const MAX_NAME_LENGTH = 100;
const ONE_ROOM_ERROR_MESSAGE = 'Количество гостей не может быть больше 1';
const TWO_ROOM_ERROR_MESSAGE = 'Количество гостей не может быть больше 2';
const THREE_ROOM_ERROR_MESSAGE = 'Количество гостей должно быть 1, 2 или 3';
const HUNDRED_ROOM_ERROR_MESSAGE = '100 комнат - не длля гостей';
const MAX_PRICE_ERROR_MESSAGE = 'Превышена максимальная цена - 1 000 000';
const EMPTY_FIELD_ERROR_MESSAGE = 'Поле не должно быть пустым. Напишите цену, не меньше минимальной';
const submitFormElement = document.querySelector('.ad-form');
const ADVERTS_ON_MAP = 10;

export {
  PROPERTIES,
  MAP_LATITUDE,
  MAP_LONGITUDE,
  MIN_NAME_LENGTH,
  MAX_NAME_LENGTH,
  ONE_ROOM_ERROR_MESSAGE,
  TWO_ROOM_ERROR_MESSAGE,
  THREE_ROOM_ERROR_MESSAGE,
  HUNDRED_ROOM_ERROR_MESSAGE,
  MAX_PRICE_ERROR_MESSAGE,
  EMPTY_FIELD_ERROR_MESSAGE,
  submitFormElement,
  ADVERTS_ON_MAP
};
