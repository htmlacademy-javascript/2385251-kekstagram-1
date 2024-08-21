export const COUNT_PHOTOS = 25;
export const MAX_COMMENT_LENGTH = 140;
export const HASHTAG_FORMULA = /^#[a-zа-яё0-9]{1,19}$/i;
export const MAX_HASHTAGS = 5;
export const SCALE_STEP = 25;
export const MIN_SCALE = 25;
export const MAX_SCALE = 100;
export const DEFAULT_SCALE = 100;

export const EFFECTS = [
  {
    name: 'none',
    style: 'none',
    min: 0,
    max: 1,
    step: 0.1,
    unite: '',
  },
  {
    name: 'chrome',
    style: 'grayscale',
    min: 0,
    max: 1,
    step: 0.1,
    unite: '',
  },
  {
    name: 'sepia',
    style: 'sepia',
    min: 0,
    max: 1,
    step: 0.1,
    unite: '',
  },
  {
    name: 'marvin',
    style: 'invert',
    min: 0,
    max: 100,
    step: 1,
    unite: '%',
  },
  {
    name: 'phobos',
    style: 'blur',
    min: 0,
    max: 3,
    step: 0.1,
    unite: 'px',
  },
  {
    name: 'heat',
    style: 'brightness',
    min: 1,
    max: 3,
    step: 0.1,
    unite: '',
  }
];

export const PICTURES_COUNT = 10;

export const RERENDER_DELAY = 500;

export const SubmitButtonText = {
  IDLE: 'Опубликовать',
  SENDING: 'Публикую...'
};

export const NEW_LOAD_COMMENTS = 5;

export const BASE_URL = 'https://28.javascript.htmlacademy.pro/kekstagram';

export const Route = {
  GET_DATA: '/data',
  POST_DATA: '/',
};

export const Method = {
  GET: 'GET',
  POST: 'POST',
};

export const ErrorText = {
  GET_DATA: 'Не удалось загрузить данные. Попробуйте обновить страницу',
  SEND_DATA: 'Не удалось отправить форму',
};

export const Filter = {
  DEFAULT: 'filter-default',
  RANDOM: 'filter-random',
  DISCUSSED: 'filter-discussed',
};
