const similarListElement = document.querySelector('.pictures');
const picturesElementTemplate = document.querySelector('#picture').content.querySelector('.picture');


export const renderPhotos = (similarPhotos) => {
  const fragment = document.createDocumentFragment();
  similarPhotos.forEach((item) => {
    const pictureElement = picturesElementTemplate.cloneNode(true);
    pictureElement.querySelector('.picture__img').src = item.url;
    pictureElement.querySelector('.picture__likes').textContent = item.likes;
    pictureElement.querySelector('.picture__comments').textContent = item.comments.length;
    fragment.append(pictureElement);
  });
  similarListElement.append(fragment);
};
