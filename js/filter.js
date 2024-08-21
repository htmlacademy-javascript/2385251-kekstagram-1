import { renderPhotos } from './rendering.js';
import { debounce } from './util.js';
import { PICTURES_COUNT, RERENDER_DELAY, Filter } from './constants.js';

const filter = document.querySelector('.img-filters');
const filterForm = filter.querySelector('.img-filters__form');
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

filterForm.addEventListener('click', debounce(({ target }) => {
  currentFilter = target.id;
  const data = getFilterPictures();
  renderPhotos(data);
}, RERENDER_DELAY));

export const init = (loadPictures) => {
  filter.classList.remove('img-filters--inactive');
  pictures = [...loadPictures];
};

filterForm.addEventListener('click', ({ target }) => {
  if (target.classList.contains('img-filters__button')) {
    document.querySelector('.img-filters__button--active').classList.remove('img-filters__button--active');
    target.classList.add('img-filters__button--active');
  }
});

