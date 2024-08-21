import { SCALE_STEP, MIN_SCALE, MAX_SCALE, DEFAULT_SCALE } from './constants.js';

const smallerButton = document.querySelector('.scale__control--smaller');
const biggerButton = document.querySelector('.scale__control--bigger');
const countScale = document.querySelector('.scale__control--value');
const previewImage = document.querySelector('.img-upload__preview img');


const scaleImage = (value) => {
  previewImage.style.transform = `scale(${value / 100})`;
  countScale.value = `${value}%`;
};

const enhanceImage = () => {
  const currentValue = parseInt(countScale.value, 10);
  let newValue = currentValue + SCALE_STEP;
  if (newValue > MAX_SCALE) {
    newValue = MAX_SCALE;
  }
  scaleImage(newValue);
};

const reduceImage = () => {
  const currentValue = parseInt(countScale.value, 10);
  let newValue = currentValue - SCALE_STEP;
  if (newValue < MIN_SCALE) {
    newValue = MIN_SCALE;
  }
  scaleImage(newValue);
};

export const resetScale = () => scaleImage(DEFAULT_SCALE);

resetScale();
smallerButton.addEventListener('click', reduceImage);
biggerButton.addEventListener('click', enhanceImage);

