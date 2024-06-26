import { isEscapeKey } from './util.js';
import { getData } from './rendering.js';
import { DESCRIPTION } from './constants.js';
import { createComments } from './data-generator.js';

const body = document.querySelector('body');
const userModalElement = document.querySelector('.big-picture');
const userModalOpenElement = document.querySelector('.pictures');
const userModalCloseElement = document.querySelector('.big-picture__cancel');
const imageElement = userModalElement.querySelector('.big-picture__img img');
const likesElement = userModalElement.querySelector('.likes-count');
const commentsElement = userModalElement.querySelector('.comments-count');
const descriptionElement = userModalElement.querySelector('.social__caption');
const commentTemplate = userModalElement.querySelector('.social__comment');
const listCommentsElement = userModalElement.querySelector('.social__comments');
const commentsLoader = userModalElement.querySelector('.comments-loader');

let commentsShown = 0;
let commentsElementLoad = [];

const NEW_LOAD_COMMENTS = 5;

const escapeHandler = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    userModalElement.classList.add('hidden');
  }
};

const renderComments = (comments) => {
  const fragment = document.createDocumentFragment();
  comments.forEach((comment) => {
    const newComment = commentTemplate.cloneNode(true);
    newComment.querySelector('.social__picture').src = comment.avatar;
    newComment.querySelector('.social__picture').alt = comment.name;
    newComment.querySelector('.social__text').textContent = comment.message;
    fragment.append(newComment);
  });
  return fragment;
};

const loadComments = () => {
  commentsShown += NEW_LOAD_COMMENTS;

  if (commentsShown >= commentsElementLoad.length) {
    commentsLoader.classList.add('hidden');
    commentsShown = commentsElementLoad.length;
  } else {
    commentsLoader.classList.remove('hidden');
  }

  // const fragment = document.createDocumentFragment();
  // for (let i = 0; i < commentsShown; i++) {
  //   const commentElement = renderComments(commentsElementLoad[i]);
  //   fragment.append(commentElement);
  // }

  // listCommentsElement.innerHTML = '';
  // listCommentsElement.append(fragment);
  commentsElement.innerHTML = `${commentsShown} из <span class="comments-count">${commentsElementLoad.length}</span> комментариев`;
};

commentsLoader.addEventListener('click', loadComments);

const renderPopup = (data) => {
  imageElement.src = data.url;
  likesElement.textContent = data.likes;
  commentsElement.textContent = data.comments.length;
  descriptionElement.textContent = data.description;
  listCommentsElement.innerHTML = '';
  listCommentsElement.append(renderComments(data.comments));
  loadComments();
};

const openPopup = (id) => {
  const dataPicture = getData(id);
  renderPopup(dataPicture);
  userModalElement.classList.remove('hidden');
  document.addEventListener('keydown', escapeHandler);
};

userModalOpenElement.addEventListener('click', (evt) => {
  const card = evt.target.closest('.picture');
  body.classList.add('modal-open');
  if (card) {
    openPopup(card.dataset.id);
  }
});

userModalCloseElement.addEventListener('click', () => {
  userModalElement.classList.add('hidden');
  body.classList.remove('modal-open');
  document.removeEventListener('keydown', escapeHandler);
});


