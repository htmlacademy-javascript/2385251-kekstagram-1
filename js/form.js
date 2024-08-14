import { resetValidation, isValid } from './validation.js';
import { isEscapeKey } from './util.js';
import { resetScale } from './scale.js';
import { resetEffects } from './effects.js';
import { sendData } from './api.js';

const hashtag = document.querySelector('.text__hashtags');
const comment = document.querySelector('.text__description');
const form = document.querySelector('.img-upload__form');
const modal = document.querySelector('.img-upload__overlay');
const body = document.querySelector('body');
const closeButton = document.querySelector('#upload-cancel');
const uploadElement = document.querySelector('#upload-file');
const buttonSubmit = document.querySelector('#upload-submit');
const success = document.querySelector('#success').content.querySelector('.success');
const errorSend = document.querySelector('#error').content.querySelector('.error');
// const errorButton = document.querySelector('.error__button');

const SubmitButtonText = {
  IDLE: 'Опубликовать',
  SENDING: 'Публикую...'
};

const showModalWindow = () => {
  modal.classList.remove('hidden');
  body.classList.add('modal-open');
  document.addEventListener('keydown', onDocumentKeydown);
  resetValidation();
  resetScale();
  resetEffects();
};

const blockButtonSubmit = () => {
  buttonSubmit.disabled = true;
  buttonSubmit.textContent = SubmitButtonText.SENDING;
};

const unblockButtonSubmit = () => {
  buttonSubmit.disabled = false;
  buttonSubmit.textContent = SubmitButtonText.IDLE;
};

const closeSuccessTemlateWindow = () => {
  document.querySelector('.success').remove();
  document.removeEventListener('keydown', onDocumentKeydown);
};

const closeErrorTemlateWindow = () => {
  document.querySelector('.error').remove();
  document.removeEventListener('keydown', onDocumentKeydown);
};

const closeModalWindow = () => {
  body.classList.remove('modal-open');
  modal.classList.add('hidden');
  document.removeEventListener('keydown', onDocumentKeydown);
  resetValidation();
  resetScale();
  form.reset();
};

form.addEventListener('submit', (evt) => {
  evt.preventDefault();
  if (isValid()) {
    blockButtonSubmit();
    sendData(new FormData(form))
      .then(() => {
        closeModalWindow(document.body.append(success));
        document.querySelector('.success__button').addEventListener('click', closeSuccessTemlateWindow);

      })
      .catch((error) => {
        document.body.append(errorSend);
        document.querySelector('.error__button').addEventListener('click', closeErrorTemlateWindow);
      })
      .finally(() => {
        unblockButtonSubmit();
      });
  }
});

const isFieldFocus = () => document.activeElement === hashtag || document.activeElement === comment;

function onDocumentKeydown(evt) {
  if (isEscapeKey(evt) && !isFieldFocus()) {
    closeModalWindow();
    closeSuccessTemlateWindow();
    closeErrorTemlateWindow();
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

