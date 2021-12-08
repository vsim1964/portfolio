import {
  resetForm
} from './forms.js';
import {
  resetMap,
  markerGroup
} from './map.js';
import {
  createMapOfFilteredAdverts
} from './filters.js';
import {
  adverts
} from './api.js';

const bodyElement = document.querySelector('body');
const successTemplate = document.querySelector('#success');
const errorTemplate = document.querySelector('#error');
const getErrorTemplate = document.querySelector('#get-error');

function getSuccessMessage() {
  const successModalElement = successTemplate.content.cloneNode(true);
  const successModalDivElement = successModalElement.querySelector('div');

  let onModalKeyDown = null;
  const closeModal = () => {
    markerGroup.clearLayers();
    resetMap();
    resetForm();
    createMapOfFilteredAdverts(adverts);
    document.querySelector('.success').remove();
    bodyElement.removeEventListener('keydown', onModalKeyDown);
  };
  onModalKeyDown = (evt) => {
    if (evt.key === 'Escape') {
      closeModal();
    }
  };
  successModalDivElement.addEventListener('click', () => {
    closeModal();
  });
  bodyElement.addEventListener('keydown', onModalKeyDown);
  bodyElement.appendChild(successModalElement);
}

function getErrorMessage() {
  const errorModalElement = errorTemplate.content.cloneNode(true);
  const errorModalDivElement = errorModalElement.querySelector('div');

  let onModalKeyDown = null;
  const closeModal = () => {
    markerGroup.clearLayers();
    createMapOfFilteredAdverts(adverts);
    document.querySelector('.error').remove();
    bodyElement.removeEventListener('keydown', onModalKeyDown);
  };
  onModalKeyDown = (evt) => {
    if (evt.key === 'Escape') {
      closeModal();
    }
  };
  errorModalDivElement.addEventListener('click', () => {
    closeModal();
  });
  bodyElement.addEventListener('keydown', onModalKeyDown);
  bodyElement.appendChild(errorModalElement);
}

function getErrorLoad() {
  const getErrorModalElement = getErrorTemplate.content.cloneNode(true);
  const getErrorModalDivElement = getErrorModalElement.querySelector('div');

  let onModalKeyDown = null;
  const closeModal = () => {
    markerGroup.clearLayers();
    createMapOfFilteredAdverts(adverts);
    document.querySelector('.get-error').remove();
    bodyElement.removeEventListener('keydown', onModalKeyDown);
  };
  onModalKeyDown = (evt) => {
    if (evt.key === 'Escape') {
      closeModal();
    }
  };
  getErrorModalDivElement.addEventListener('click', () => {
    closeModal();
  });
  bodyElement.addEventListener('keydown', onModalKeyDown);
  bodyElement.appendChild(getErrorModalDivElement);
}

export {
  getSuccessMessage,
  getErrorMessage,
  getErrorLoad
};
