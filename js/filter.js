import { renderPhotos } from "./rendering.js";

const PICTURES_COUNT = 10;

const Filter = {
  DEFAULT: 'filter-default',
  RANDOM: 'filter-random',
  DISCUSSED: 'filter-discussed',
};

const filter = document.querySelector('.img-filters');
const filterForm = filter.querySelector('.img-filters__form');
const filterButtonRandom = filter.querySelector('#filter-random');
const filterButtonDiscussed = filter.querySelector('#filter-discussed');
const filterButtonDefault = filter.querySelector('#filter-default');
let currentFilter = Filter.DEFAULT;
let pictures = [];

const sortRandom = () => Math.random() - 0.5;
const sortComments = (commentsB, commentsA) => commentsA.comments.length - commentsB.comments.length;

const getFilterPictures = () => {
  switch (currentFilter) {
    case Filter.RANDOM:
      return [...pictures].sort(sortRandom).slice(0, PICTURES_COUNT);
    case Filter.DISCUSSED:
      return [...pictures].sort(sortComments);
    default:
      return [...pictures];
  }
};

filterForm.addEventListener('click', ({ target }) => {
  currentFilter = target.id;
  const data = getFilterPictures();
  renderPhotos(data);
});

export const init = (loadPictures) => {
  filter.classList.remove('img-filters--inactive');
  pictures = [...loadPictures];
};

// const buttonRandomClick = () => {
filterButtonRandom.addEventListener('click', () => {
  filterButtonRandom.classList.add('img-filters__button--active');
  filterButtonDiscussed.classList.remove('img-filters__button--active');
  filterButtonDefault.classList.remove('img-filters__button--active');

});
// }
// const buttonDiscussedClick = () => {
filterButtonDiscussed.addEventListener('click', () => {
  filterButtonDiscussed.classList.add('img-filters__button--active');
  filterButtonRandom.classList.remove('img-filters__button--active');
  filterButtonDefault.classList.remove('img-filters__button--active');
});
// }
// const buttonDefaultClick = () => {
filterButtonDefault.addEventListener('click', () => {
  filterButtonDefault.classList.add('img-filters__button--active');
  filterButtonDiscussed.classList.remove('img-filters__button--active');
  filterButtonRandom.classList.remove('img-filters__button--active');
});
// };

