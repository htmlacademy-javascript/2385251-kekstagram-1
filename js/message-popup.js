import { setEscapeControl, removeEscapeControl } from './escape-control.js';

const success = document.querySelector('#success').content.querySelector('.success');
const errorSend = document.querySelector('#error').content.querySelector('.error');

const closeSuccessTemlateWindow = () => {
  document.querySelector('.success').remove();
};

const closeErrorTemlateWindow = () => {
  document.querySelector('.error').remove();
};

export const openErrorPopup = () => {
  const errorTemplate = errorSend.cloneNode(true);
  document.body.append(errorTemplate);
  document.querySelector('.error').addEventListener('click', ({ target }) => {
    if (target.classList.contains('error__button') || (target.classList.contains('error'))) {
      closeErrorTemlateWindow();
      removeEscapeControl();
    }
  });
  setEscapeControl(closeErrorTemlateWindow);
};

export const openSuccessPopup = () => {
  const successTemplate = success.cloneNode(true);
  document.body.append(successTemplate);
  document.querySelector('.success').addEventListener('click', ({ target }) => {
    if (target.classList.contains('success__button') || (target.classList.contains('success'))) {
      closeSuccessTemlateWindow();
      removeEscapeControl();
    }
  });
  setEscapeControl(closeSuccessTemlateWindow);
};
