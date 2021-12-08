import './forms.js';
import {
  getData,
  sendData
} from './api.js';
import {
  getSuccessMessage,
  getErrorMessage,
  getErrorLoad
} from './modal.js';
import {
  submitFormElement
} from './data.js';
import {
  createMapOfFilteredAdverts
} from './filters.js';

getData(createMapOfFilteredAdverts, getErrorLoad);

submitFormElement.addEventListener('submit', (evt) => {
  evt.preventDefault();
  sendData(getSuccessMessage, getErrorMessage, evt.target);
});
