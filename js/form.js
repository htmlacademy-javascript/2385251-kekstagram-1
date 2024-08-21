import { resetValidation, isValid } from './validation.js';
import { resetScale } from './scale.js';
import { resetEffects } from './effects.js';
import { sendData } from './api.js';
import { setEscapeControl, removeEscapeControl } from './escape-control.js';
import { SubmitButtonText } from './constants.js';
import { openErrorPopup, openSuccessPopup } from './message-popup.js';

const hashtag = document.querySelector('.text__hashtags');
const comment = document.querySelector('.text__description');
const form = document.querySelector('.img-upload__form');
const modal = document.querySelector('.img-upload__overlay');
const body = document.querySelector('body');
const closeButton = document.querySelector('#upload-cancel');
const uploadElement = document.querySelector('#upload-file');
const buttonSubmit = document.querySelector('#upload-submit');

const isFieldFocus = () => !(document.activeElement === hashtag || document.activeElement === comment);

const showModalWindow = () => {
  modal.classList.remove('hidden');
  body.classList.add('modal-open');
  setEscapeControl(closeModalWindow, isFieldFocus);
};

const blockButtonSubmit = (isBlocked = true) => {
  buttonSubmit.disabled = isBlocked;
  buttonSubmit.textContent = isBlocked ? SubmitButtonText.SENDING : SubmitButtonText.IDLE;
};

function closeModalWindow() {
  body.classList.remove('modal-open');
  modal.classList.add('hidden');
  form.reset();
  resetValidation();
  resetEffects();
  resetScale();
}

form.addEventListener('submit', (evt) => {
  evt.preventDefault();
  if (isValid()) {
    blockButtonSubmit();
    sendData(new FormData(form))
      .then(() => {
        closeModalWindow();
        removeEscapeControl();
        openSuccessPopup();
      })
      .catch(() => {
        openErrorPopup();
      })
      .finally(() => {
        blockButtonSubmit(false);
      });
  }
});

uploadElement.addEventListener('change', showModalWindow);

closeButton.addEventListener('click', (evt) => {
  evt.preventDefault();
  closeModalWindow();
  removeEscapeControl();
});
