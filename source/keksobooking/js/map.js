import {
  MAP_LATITUDE,
  MAP_LONGITUDE
} from './data.js';
import {
  setActiveState,
  setInactiveState
} from './swift.js';
import {
  createCard
} from './card.js';
import {
  getData
} from './api.js';
import {
  getErrorLoad
} from './modal.js';
import {
  createMapOfFilteredAdverts
} from './filters.js';

setInactiveState();

// ! Создание интерактивного окна карты

const map = L.map('map-canvas');
map.on('load', () => {
  getData(createMapOfFilteredAdverts, getErrorLoad).then(() => {
    setActiveState();
  });
});

map.setView({
  lat: MAP_LATITUDE,
  lng: MAP_LONGITUDE,
}, 10);

// ! Подключение сервиса карт
L.tileLayer(
  'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  },
).addTo(map);

// ! Маркер
const mainPinIcon = L.icon({
  iconUrl: 'img/main-pin.svg',
  iconSize: [52, 52],
  iconAnchor: [26, 52],
});

const marker = L.marker({
  lat: MAP_LATITUDE,
  lng: MAP_LONGITUDE,
}, {
  draggable: true,
  icon: mainPinIcon,
});
marker.addTo(map);

// ! Получение координат
function getDefaultCoordinates() {
  const addressInputElement = document.querySelector('#address');
  addressInputElement.value = `${MAP_LATITUDE}, ${MAP_LONGITUDE}`;
  marker.on('moveend', (evt) => {
    const coordinates = `${(evt.target.getLatLng().lat).toFixed(5)}, ${(evt.target.getLatLng().lng).toFixed(5)}`;
    addressInputElement.value = coordinates;
  });
}
getDefaultCoordinates();
// ! Получение точек из массива

function createCustomPopup(point) {
  const balloonTemplate = document.querySelector('#card').content.querySelector('.popup');
  const popupElement = balloonTemplate.cloneNode(true);
  createCard(point, popupElement);
  return popupElement;
}

// ! Создание слоя для меток объявлений

const markerGroup = L.layerGroup().addTo(map);

function createPointsOfMap(dataForMap) {

  dataForMap.forEach((point) => {
    const {
      location: {
        lat,
        lng,
      },
    } = point;

    const icon = L.icon({
      iconUrl: 'img/pin.svg',
      iconSize: [40, 40],
      iconAnchor: [20, 40],
    });

    const scorer = L.marker({
      lat,
      lng,
    }, {
      icon,
    });

    scorer
      .addTo(markerGroup)
      .bindPopup(createCustomPopup(point));
  });
}

function resetMap() {
  map.closePopup();
  map.setView({
    lat: MAP_LATITUDE,
    lng: MAP_LONGITUDE,
  }, 10);
  marker.setLatLng({
    lat: MAP_LATITUDE,
    lng: MAP_LONGITUDE,
  });
}

export {
  createPointsOfMap,
  resetMap,
  markerGroup
};
