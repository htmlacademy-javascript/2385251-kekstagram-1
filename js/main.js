import { createPhotos } from './data-generator.js';
import { COUNT_PHOTOS } from './constants.js';
import { renderPhotos } from './rendering.js';
import './form.js';
import './effects.js';
import { getData } from './api.js';

// fetch('https://28.javascript.htmlacademy.pro/kekstagram/data')
//   .then((response) => response.json())
//   .then((photos) => {
//     console.log(photos);
//   });

// try {
//   const data = await getData();
//   renderPhotos(data);
// } catch (err) {

// }

// renderPhotos(createPhotos(COUNT_PHOTOS));
