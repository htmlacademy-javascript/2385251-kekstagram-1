import { getData } from './api.js';

const PICTURES_COUNT = 10;

const Filter = {
  DEFAULT: 'filter-defailt',
  RANDOM: 'filter-random',
  DISCUSSED: 'filter-discussed',
};

const filter = document.querySelector('.img-filters');
let currentFilter = Filter.DEFAULT;
let pictures = [];

const sortRandom = () => Math.random() - 0.5;
const sortComments = (commentsA, commentsB) => {
  commentsA.comments.length - commentsB.comments.length;
};

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

const renderFilter = (loadPictures, cb) => {
  filter.classList.remove('img-filters--inactive');
  pictures = [...loadPictures]
}
