import { EFFECTS } from "./constants";

const DEFAULT_EFFECT = EFFECTS[0];
let chosenEffect = DEFAULT_EFFECT;



const isDefault = () => chosenEffect === DEFAULT_EFFECT;

const sliderElement = document.querySelector('.effect-level__slider');
const effectElement = document.querySelector('.effects');
const imageElement = document.querySelector('.img-upload__preview img');
const effectLevel = document.querySelector('effect-level__value');


const onEffectsCgange = (evt) => {
  if (!evt.taget.classList.contains('effects__radio')) {
    return
  }
  chosenEffect = EFFECTS.find((effect) => effect.name === evt.target.value);
  imageElement.className = `effects__preview--${chosenEffect.name}`;
  updateSlider();
}

noUiSlider.create(sliderElement, {
  range: {

  },
  start: 80,
  step: 1,
  connect: 'lower',
});
