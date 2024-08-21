import { EFFECTS } from './constants.js';

const sliderElement = document.querySelector('.effect-level__slider');
const imageElement = document.querySelector('.img-upload__preview img');
const effectLevel = document.querySelector('.effect-level__value');
const effectsListElement = document.querySelector('.effects__list');
const sliderContainerElement = document.querySelector('.effect-level');

const DEFAULT_EFFECT = EFFECTS[0];
let chosenEffect = DEFAULT_EFFECT;

const isDefault = () => chosenEffect.name === DEFAULT_EFFECT.name;

noUiSlider.create(sliderElement, {
  range: {
    min: 0,
    max: 100,
  },
  start: 80,
  step: 1,
  connect: 'lower',
  format: {
    to: (value) => Number(value),
    from: (value) => Number(value),
  }
});

const updateSlider = (effect) => {
  sliderElement.noUiSlider.updateOptions({
    range: {
      min: effect.min,
      max: effect.max,
    },
    step: effect.step,
    start: effect.max
  });
};

const showSlider = () => {
  sliderContainerElement.classList.remove('hidden');
};

const resetEffects = () => {
  imageElement.className = '';
  imageElement.style.filter = '';
  chosenEffect = DEFAULT_EFFECT;
  sliderContainerElement.classList.add('hidden');
};

const onEffectsChange = (evt) => {
  chosenEffect = EFFECTS.find((effect) => effect.name === evt.target.value);
  if (isDefault()) {
    resetEffects();
  } else {
    showSlider();
    imageElement.className = `effects__preview--${chosenEffect.name}`;
    updateSlider(chosenEffect);
  }
};

effectsListElement.addEventListener('change', onEffectsChange);

const getImageEffect = (value) => `${chosenEffect.style}(${value}${chosenEffect.unite})`;

sliderElement.noUiSlider.on('update', () => {
  effectLevel.value = sliderElement.noUiSlider.get();
  if (!isDefault()) {
    imageElement.style.filter = getImageEffect(effectLevel.value);
  }
});

resetEffects();

export { resetEffects };
