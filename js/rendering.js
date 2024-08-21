import { openPopup } from './popup.js';
const similarListElement = document.querySelector('.pictures');
const picturesElementTemplate = document.querySelector('#picture').content.querySelector('.picture');
const picturesContainerElement = document.querySelector('.pictures');

const localPhotos = [];

const clear = () => {
  document.querySelectorAll('.picture').forEach((item) => {
    item.remove();
  });
};

export const renderPhotos = (similarPhotos) => {
  localPhotos.length = 0;
  localPhotos.push(...similarPhotos.slice());
  clear();
  const fragment = document.createDocumentFragment();
  similarPhotos.forEach((item) => {
    const pictureElement = picturesElementTemplate.cloneNode(true);
    pictureElement.querySelector('.picture__img').src = item.url;
    pictureElement.querySelector('.picture__likes').textContent = item.likes;
    pictureElement.querySelector('.picture__comments').textContent = item.comments.length;
    pictureElement.dataset.id = item.id;
    fragment.append(pictureElement);
  });
  similarListElement.append(fragment);
};

picturesContainerElement.addEventListener('click', (evt) => {
  const card = evt.target.closest('.picture');
  if (card) {
    const photoData = localPhotos.find((photo) => photo.id === Number(card.dataset.id));
    openPopup(photoData);
  }
});

