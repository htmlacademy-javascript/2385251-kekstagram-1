import { setEscapeControl, removeEscapeControl } from './escape-control.js';
import { NEW_LOAD_COMMENTS } from './constants.js';
import './loading-photo.js';

const body = document.querySelector('body');
const userModalElement = document.querySelector('.big-picture');
const userModalCloseElement = document.querySelector('.big-picture__cancel');
const imageElement = userModalElement.querySelector('.big-picture__img img');
const likesElement = userModalElement.querySelector('.likes-count');
const commentsElement = userModalElement.querySelector('.social__comment-count');
const descriptionElement = userModalElement.querySelector('.social__caption');
const commentTemplate = userModalElement.querySelector('.social__comment');
const listCommentsElement = userModalElement.querySelector('.social__comments');
const commentsLoader = userModalElement.querySelector('.comments-loader');

let commentsShown = 0;
const loadedComments = [];

const renderComments = (comments) => {
  listCommentsElement.innerHTML = '';
  const fragment = document.createDocumentFragment();
  comments.forEach((comment) => {
    const newComment = commentTemplate.cloneNode(true);
    newComment.querySelector('.social__picture').src = comment.avatar;
    newComment.querySelector('.social__picture').alt = comment.name;
    newComment.querySelector('.social__text').textContent = comment.message;
    fragment.append(newComment);
  });
  listCommentsElement.append(fragment);
};

const renderCommentsLoader = () => {
  if (commentsShown >= loadedComments.length) {
    commentsLoader.classList.add('hidden');
  } else {
    commentsLoader.classList.remove('hidden');
  }
};

const renderStatistic = () => {
  commentsElement.innerHTML = `${commentsShown} из <span class="comments-count">${loadedComments.length}</span> комментариев`;
};

const loadComments = () => {
  commentsShown = commentsShown + NEW_LOAD_COMMENTS >= loadedComments.length ? loadedComments.length : commentsShown + NEW_LOAD_COMMENTS;
  renderCommentsLoader();
  renderComments(loadedComments.slice(0, commentsShown));
  renderStatistic();
};

commentsLoader.addEventListener('click', loadComments);

const renderPopup = (data) => {
  imageElement.src = data.url;
  likesElement.textContent = data.likes;
  commentsElement.textContent = data.comments.length;
  descriptionElement.textContent = data.description;
  loadedComments.length = 0;
  loadedComments.push(...data.comments.slice());
  loadComments();
};

const closePopup = () => {
  userModalElement.classList.add('hidden');
  body.classList.remove('modal-open');
};

export const openPopup = (dataPicture) => {
  commentsShown = 0;
  body.classList.add('modal-open');
  renderPopup(dataPicture);
  userModalElement.classList.remove('hidden');
  setEscapeControl(closePopup);
};

userModalCloseElement.addEventListener('click', () => {
  closePopup();
  removeEscapeControl();
});
