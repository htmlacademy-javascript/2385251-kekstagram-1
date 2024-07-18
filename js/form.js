import { resetValidation, isValid } from './validation.js';
import { isEscapeKey } from './util.js';
import { resetScale } from './scale.js';
import { resetEffects } from './effects.js';

const hashtag = document.querySelector('.text__hashtags');
const comment = document.querySelector('.text__description');
const form = document.querySelector('.img-upload__form');
const modal = document.querySelector('.img-upload__overlay');
const body = document.querySelector('body');
const closeButton = document.querySelector('#upload-cancel');
const uploadElement = document.querySelector('#upload-file');

const showModalWindow = () => {
  modal.classList.remove('hidden');
  body.classList.add('modal-open');
  document.addEventListener('keydown', onKeydown);
  resetValidation();
  resetScale();
  resetEffects();
};

form.addEventListener('submit', (evt) => {
  if (!isValid()) {
    evt.preventDefault();
  }
});

const closeModalWindow = () => {
  resetScale();
  modal.classList.add('hidden');
  body.classList.remove('modal-open');
  document.removeEventListener('keydown', onKeydown);
  resetValidation();
};

const isFieldFocus = () => document.activeElement === hashtag || document.activeElement === comment;

function onKeydown(evt) {
  if (isEscapeKey(evt) && !isFieldFocus) {
    closeModalWindow();
  }
}

uploadElement.addEventListener('change', showModalWindow);

closeButton.addEventListener('click', closeModalWindow);

// hashtag.addEventListener('focus', () => {
//   document.removeEventListener('keydown', onKeydown);
// });

// hashtag.addEventListener('blur', () => {
//   document.addEventListener('keydown', onKeydown);
// });

// comment.addEventListener('focus', () => {
//   document.removeEventListener('keydown', onKeydown);
// });

// comment.addEventListener('blur', () => {
//   document.addEventListener('keydown', onKeydown);
// });

