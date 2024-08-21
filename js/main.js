import { renderPhotos } from './rendering.js';
import './form.js';
import { getData } from './api.js';
import { errorLoadingNotice } from './util.js';
import { init as initFilters } from './filter.js';

getData()
  .then((data) => {
    initFilters(data);
    renderPhotos(data);
  })
  .catch((error) => {
    errorLoadingNotice(error);
  });

