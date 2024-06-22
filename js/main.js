import { createPhotos } from './data-generator.js';
import { COUNT_PHOTOS } from './constants.js';
import { renderPhotos } from './rendering.js';
import './popup.js';

renderPhotos(createPhotos(COUNT_PHOTOS));
