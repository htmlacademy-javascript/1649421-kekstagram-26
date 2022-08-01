import { scale, scaleDestroy } from './scale.js';
import { effects, createSlider } from './effects.js';
import { isValid } from './upload-validator.js';
import { sendData } from './fetch.js';
import { renderSuccessMessage, renderErrorMessage } from './modals.js';

const uploadFileInput = document.querySelector('#upload-file');
const overlay = document.querySelector('.img-upload__overlay');
const uploadPreviewImage = document.querySelector('.img-upload__preview img');
const overlayCloseButton = document.querySelector('.img-upload__cancel');
const uploadFormImage = document.querySelector('.img-upload__form');
const hashTagsInput = document.querySelector('.text__hashtags');
const textInput = document.querySelector('.text__description');

const resetForm = () => {
  uploadFileInput.value = '';
  hashTagsInput.value = '';
  textInput.value = '';
};

const hideForm = () => {
  overlay.classList.add('hidden');
  document.body.classList.remove('modal-open');
  scaleDestroy();
  uploadFormImage.removeEventListener('submit', submitHandler);
  resetForm();
};

const escapeKeydownHandler = (evt) => {
  if (
    evt.key === 'Escape' &&
    document.activeElement !== hashTagsInput &&
    document.activeElement !== textInput &&
    !overlay.classList.contains('hidden')
  ) {
    evt.preventDefault();
    hideForm();
  }
};

const openForm = () => {
  overlay.classList.remove('hidden');
  scale();
  effects();
  uploadFormImage.addEventListener('submit', submitHandler);
  document.body.classList.add('modal-open');
  const file = uploadFileInput.files[0];
  uploadPreviewImage.src = URL.createObjectURL(file);
};

function submitHandler(evt) {
  evt.preventDefault();
  if (isValid()) {
    sendData(
      () => {
        hideForm();
        renderSuccessMessage();
      },
      () => {
        renderErrorMessage();
        document.removeEventListener('keydown', escapeKeydownHandler);
      },
      new FormData(uploadFormImage)
    );
  }
}

const uploadFileInputChangeHandler = () => {
  openForm();
  document.addEventListener('keydown', escapeKeydownHandler);
};

const overlayCloseButtonClickHandler = () => {
  hideForm();
  document.removeEventListener('keydown', escapeKeydownHandler);
};

const upLoadForm = () => {
  createSlider();
  uploadFileInput.addEventListener('change', uploadFileInputChangeHandler);
  overlayCloseButton.addEventListener('click', overlayCloseButtonClickHandler);
};

export { upLoadForm, escapeKeydownHandler };
