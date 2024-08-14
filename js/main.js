// import { createPhotos } from './data-generator.js';
import { COUNT_PHOTOS } from './constants.js';
import { renderPhotos } from './rendering.js';
import './form.js';
import './effects.js';
import { getData } from './api.js';
import { errorLoadingNotice } from './util.js'

getData()
  .then((data) => {
    renderPhotos(data);
  })
  .catch((error) => {
    errorLoadingNotice(error);
  });

