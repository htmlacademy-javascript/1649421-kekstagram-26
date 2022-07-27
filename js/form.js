import { scale, scaleDestroy } from './scale.js';
import { effects, sliderInit } from './effects.js';
import { isValid } from './upload-validator.js';
import { sendData } from './fetch.js';
import { SuccessMessage, ErrorMessage } from './modals.js';

const uploadFileInput = document.querySelector('#upload-file');
const overlay = document.querySelector('.img-upload__overlay');
const uploadPreviewImage = document.querySelector('.img-upload__preview img');
const overlayCloseButton = document.querySelector('.img-upload__cancel');
const uploadFormImage = document.querySelector('.img-upload__form');

const hideForm = () => {
  overlay.classList.add('hidden');
  document.body.classList.remove('modal-open');
  scaleDestroy();
  uploadFormImage.removeEventListener('submit', submitHandler);
};

const openForm = () => {
  overlay.classList.remove('hidden');
  uploadFormImage.addEventListener('submit', submitHandler);
  document.body.classList.add('modal-open');
  const file = uploadFileInput.files[0];
  uploadPreviewImage.src = URL.createObjectURL(file);
  scale();
  document.addEventListener('keydown', escapeKeydownHandler);
  effects();
};

function submitHandler(evt) {
  evt.preventDefault();
  if (isValid()) {
    sendData(
      () => {
        hideForm();
        SuccessMessage();
      },
      () => {
        hideForm();
        ErrorMessage();
      },
      new FormData(uploadFormImage)
    );
  }
}

const upLoadForm = () => {
  sliderInit();
  uploadFileInput.addEventListener('change', openForm);
  overlayCloseButton.addEventListener('click', hideForm);
};

function escapeKeydownHandler(evt) {
  if (evt.key === 'Escape') {
    evt.preventDefault();
    hideForm();
  }
}

export { upLoadForm };
