import { isEscapeKey } from './util.js';

const userModalElement = document.querySelector('.big-picture');
const userModalOpenElement = document.querySelector('.pictures');
const userModalCloseElement = document.querySelector('.big-picture__cancel');

userModalOpenElement.addEventListener('click', () => {
  userModalElement.classList.remove('hidden');
  document.addEventListener('keydown', (evt) => {
    if (isEscapeKey(evt)) {
      evt.preventDefault();
      userModalElement.classList.add('hidden');
    }
  });

});


userModalCloseElement.addEventListener('click', () => {
  userModalElement.classList.add('hidden');
});


userModalCloseElement.addEventListener('keydown', (evt) => {
  if (isEnterKey(evt)) {
    userModalElement.classList.add('hidden');
  }
});
