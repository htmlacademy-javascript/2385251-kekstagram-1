import { resetValidation, isValid } from './validation.js';
import { resetScale } from './scale.js';
import { resetEffects } from './effects.js';
import { sendData } from './api.js';
import { setEscapeControl, removeEscapeControl } from './escape-control.js';

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

const isFieldFocus = () => document.activeElement === hashtag || document.activeElement === comment;

const showModalWindow = () => {
  modal.classList.remove('hidden');
  body.classList.add('modal-open');
  resetValidation();
  resetScale();
  resetEffects();
  setEscapeControl(closeModalWindow);
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
};

const closeErrorTemlateWindow = () => {
  document.querySelector('.error').remove();
};

function closeModalWindow() {
  body.classList.remove('modal-open');
  modal.classList.add('hidden');
  resetValidation();
  resetScale();
};

const openErrorPopup = () => {
  const errorTemplate = errorSend.cloneNode(true);
  document.body.append(errorTemplate)
  document.querySelector('.error').addEventListener('click', ({ target }) => {
    if (target.classList.contains('error__button') || (target.classList.contains('error'))) {
      closeErrorTemlateWindow();
      removeEscapeControl();
    }
  });
  setEscapeControl(closeErrorTemlateWindow)
};

const openSuccessPopup = () => {
  const successTemplate = success.cloneNode(true);
  document.body.append(successTemplate)
  document.querySelector('.success').addEventListener('click', ({ target }) => {
    if (target.classList.contains('success__button') || (target.classList.contains('success'))) {
      closeSuccessTemlateWindow();
      removeEscapeControl();
    }
  }
  );
  setEscapeControl(closeSuccessTemlateWindow)
};

form.addEventListener('submit', (evt) => {
  evt.preventDefault();
  if (isValid()) {
    blockButtonSubmit();
    sendData(new FormData(form))
      .then(() => {
        closeModalWindow();
        removeEscapeControl()
        openSuccessPopup();
      })
      .catch((error) => {
        openErrorPopup();
      })
      .finally(() => {
        unblockButtonSubmit();
      });
  }
});



uploadElement.addEventListener('change', showModalWindow);

closeButton.addEventListener('click', () => {
  closeModalWindow()
  removeEscapeControl()
});

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

