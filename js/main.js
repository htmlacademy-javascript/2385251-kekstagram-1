import { renderPhotos } from './rendering.js';
import './form.js';
import './effects.js';
import { getData } from './api.js';
import { errorLoadingNotice } from './util.js';
import { init as initFilters } from './filter.js';

const RERENDER_DELAY = 500;

getData()
  .then((data) => {
    initFilters(data);
    renderPhotos(data);
  })
  .catch((error) => {
    errorLoadingNotice(error);
  });

