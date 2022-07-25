import { scale, scaleDestroy } from './scale.js';
import { effects, resetEffects } from './effects.js';

const uploadFileInput = document.querySelector('#upload-file');
const overlay = document.querySelector('.img-upload__overlay');
const uploadPreviewImage = document.querySelector('.img-upload__preview img');
const overlayCloseButton = document.querySelector('.img-upload__cancel');
const uploadFormImage = document.querySelector('.img-upload__form');
const textHashtags = document.querySelector('.text__hashtags');
const textDescription = document.querySelector('.text__description');

const hideForm = () => {
  overlay.classList.add('hidden');
  document.body.classList.remove('modal-open');
  scaleDestroy();
};

const openForm = () => {
  overlay.classList.remove('hidden');
  document.body.classList.add('modal-open');
  const file = uploadFileInput.files[0];
  uploadPreviewImage.src = URL.createObjectURL(file);
  scale();
  document.addEventListener('keydown', escapeKeydownHandler);
  effects();
};

const submitHandler = (evt) => {
  evt.preventDefault();
  const re = /^#[A-Za-zA-Яа-яЁё0-9]{1,19}/;
  if (re.test(textHashtags.value)) {
    console.log('все верно');
  }
};

const upLoadForm = () => {
  uploadFileInput.addEventListener('change', openForm);
  overlayCloseButton.addEventListener('click', hideForm);
  uploadFormImage.addEventListener('submit', submitHandler);
};

function escapeKeydownHandler(evt) {
  if (evt.key === 'Escape') {
    evt.preventDefault();
    hideForm();
  }
}

export { upLoadForm };
