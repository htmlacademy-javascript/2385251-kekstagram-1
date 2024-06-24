import { isEscapeKey } from './util.js';
import { getData } from './rendering.js';
import { DESCRIPTION } from './constants.js';

const body = document.querySelector('body');
const userModalElement = document.querySelector('.big-picture');
const userModalOpenElement = document.querySelector('.pictures');
const userModalCloseElement = document.querySelector('.big-picture__cancel');
const imageElement = userModalElement.querySelector('.big-picture__img img');
const likesElement = userModalElement.querySelector('.likes-count');
const commentsElement = userModalElement.querySelector('.comments-count');
const descriptionElement = userModalElement.querySelector('.social__caption');
// const listCommentsElement = userModalElement.querySelector('.social__comments');

const escapeHandler = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    userModalElement.classList.add('hidden');
  }
};

const renderPopup = (data) => {
  imageElement.src = data.url;
  likesElement.textContent = data.likes;
  commentsElement.textContent = data.comments.length;
  descriptionElement.append.textContent = data.description;
  // listCommentsElement.textContent = item.comments;
};

const openPopup = (id) => {
  const dataPicture = getData(id);
  renderPopup(dataPicture);
  userModalElement.classList.remove('hidden');
  document.addEventListener('keydown', escapeHandler);
};

userModalOpenElement.addEventListener('click', (evt) => {
  const card = evt.target.closest('.picture');
  body.classList.add('.modal-open');
  if (card) {
    openPopup(card.dataset.id);
  }
});

userModalCloseElement.addEventListener('click', () => {
  userModalElement.classList.add('hidden');
  body.classList.remove('.modal-open');
  document.removeEventListener('keydown', escapeHandler);
});


