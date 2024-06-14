import { createPhotos } from './data-generator.js';
import { COUNT_PHOTOS } from './constants.js';
import { renderPhotos } from './rendering.js';

renderPhotos(createPhotos(COUNT_PHOTOS));
