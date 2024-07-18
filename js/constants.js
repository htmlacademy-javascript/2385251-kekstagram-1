export const COUNT_MIN_AVATAR = 1;
export const COUNT_PHOTOS = 25;
export const MIN_LIKES = 15;
export const MAX_LIKES = 200;
export const COUNT_MAX_AVATAR = 6;
export const COUNT_COMMENTS = 20;
export const MAX_COMMENT_LENGTH = 140;
export const HASHTAG_FORMULA = /^#[a-zа-яё0-9]{1,19}$/i;
export const MAX_HASHTAGS = 5;
export const SCALE_STEP = 25;
export const MIN_SCALE = 25;
export const MAX_SCALE = 100;
export const DEFAULT_SCALE = 100;

export const DESCRIPTION = [
  'Красивый пейзаж',
  'Было здорово! Надо чаще собираться.',
  'Самый лучший день в моей жизни',
  'Спасибо всем кто был рядом , это был лучший юбилей',
  'Я и мои друзья. Люблю их за это.'
];

export const NAMES = [
  'Елена',
  'Вика',
  'Генадий',
  'Артем',
  'Денис',
  'Таня',
  'Алена',
  'Настя',
  'Игорь',
  'Константин',
];

export const MESSAGE = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.'
];

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


