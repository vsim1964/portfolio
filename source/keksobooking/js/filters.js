import {
  createPointsOfMap,
  markerGroup
} from './map.js';
import {
  adverts
} from './api.js';
import {
  ADVERTS_ON_MAP
} from './data.js';

const RERENDER_DELAY = 500;
const typeFilterElement = document.querySelector('#housing-type');
const priceFilterElement = document.querySelector('#housing-price');
const roomsFilterElement = document.querySelector('#housing-rooms');
const guestsFilterElement = document.querySelector('#housing-guests');
const filtersForm = document.querySelector('.map__filters');
const filterWifi = document.querySelector('#filter-wifi');
const filterDishwasher = document.querySelector('#filter-dishwasher');
const filterParking = document.querySelector('#filter-parking');
const filterWasher = document.querySelector('#filter-washer');
const filterElevator = document.querySelector('#filter-elevator');
const filterConditioner = document.querySelector('#filter-conditioner');

let filteredAdverts = [];

// ! Объявления с массивом фич
function isAdvertFitFeaturesFilter(advert) {
  const checkedFeaturesFilters = [];
  if (filterWifi.checked) {
    checkedFeaturesFilters.push('wifi');
  }
  if (filterDishwasher.checked) {
    checkedFeaturesFilters.push('dishwasher');
  }
  if (filterParking.checked) {
    checkedFeaturesFilters.push('parking');
  }
  if (filterWasher.checked) {
    checkedFeaturesFilters.push('washer');
  }
  if (filterElevator.checked) {
    checkedFeaturesFilters.push('elevator');
  }
  if (filterConditioner.checked) {
    checkedFeaturesFilters.push('conditioner');
  }
  if (checkedFeaturesFilters.length && !advert.offer.features) {
    return false;
  }
  for (let i = 0; i < checkedFeaturesFilters.length; i++) {
    if (!advert.offer.features.includes(checkedFeaturesFilters[i])) {
      return false;
    }
  }
  return true;
}

// ! Фильтрация по цене
function isAdvertFitPriceFilter(advert) {
  const priceValue = priceFilterElement.value;
  if (priceValue === 'low' && advert.offer.price < 10000) {
    return true;
  }
  if (
    priceValue === 'middle' &&
    advert.offer.price >= 10000 &&
    advert.offer.price <= 50000
  ) {
    return true;
  }
  if (priceValue === 'high' && advert.offer.price > 50000) {
    return true;
  }
  if (priceValue === 'any') {
    return true;
  }
  return false;
}

// ! Основная функция фильтрации
function getFiters() {
  const typeValue = typeFilterElement.value;
  const roomsValue = roomsFilterElement.value;
  const guestsValue = guestsFilterElement.value;
  return adverts.filter(
    (item) => (item.offer.type === typeValue || typeValue === 'any') &&
    isAdvertFitPriceFilter(item) &&
    (item.offer.rooms === +roomsValue || roomsValue === 'any') &&
    (item.offer.guests === +guestsValue || guestsValue === 'any') &&
    isAdvertFitFeaturesFilter(item));
}

// ! Функция отрисовки
function createMapOfFilteredAdverts() {
  markerGroup.clearLayers();
  filteredAdverts = getFiters();
  createPointsOfMap(filteredAdverts.slice(0, ADVERTS_ON_MAP));
}

// ! Прослушка, отрисовка и устранение дребезга
filtersForm.addEventListener('change', () => {
  _.debounce(() => createMapOfFilteredAdverts(), RERENDER_DELAY)();
});

export {
  createMapOfFilteredAdverts
};
