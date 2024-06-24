import './popup.js';
const similarListElement = document.querySelector('.pictures');
const picturesElementTemplate = document.querySelector('#picture').content.querySelector('.picture');

const localPhotos = [];

export const renderPhotos = (similarPhotos) => {
  localPhotos.length = 0;
  localPhotos.push(...similarPhotos.slice());
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

export const getData = (id) => localPhotos.find((photo) => photo.id === Number(id));
