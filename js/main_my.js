/*
id, число — идентификатор опубликованной фотографии. Это число от 1 до 25. Идентификаторы не должны повторяться.

url, строка — адрес картинки вида photos/{{i}}.jpg, где {{i}} — это число от 1 до 25. Адреса картинок не должны повторяться.

description, строка — описание фотографии. Описание придумайте самостоятельно.

likes, число — количество лайков, поставленных фотографии. Случайное число от 15 до 200.

comments, массив объектов — список комментариев, оставленных другими пользователями к этой фотографии. Количество комментариев к каждой фотографии вы определяете на своё усмотрение. Все комментарии генерируются случайным образом. Пример описания объекта с комментарием:

[
  {
    id: 12,
    url: 'photos/23.jpg',
    description: 'Было здорово! Надо чаще собираться.',
    likes: 10,
    comments: [
      {
          id: 135,
          avatar: 'img/avatar-6.svg',
          message: 'В целом всё неплохо. Но не всё.',
          name: 'Артём',
      },
      {
          id: 134,
          avatar: 'img/avatar-6.svg',
          message: 'В целом всё неплохо. Но не всё.',
          name: 'Артём',
      },
            {
          id: 132,
          avatar: 'img/avatar-7.svg',
          message: 'В целом всё неплохо. Но не всё.',
          name: 'Артём',
      },
    ]
  },
  {},
  {}
]
*/

const COUNT_PHOTOS = 25;
const MIN_LIKES = 15;
const MAX_LIKES = 200;
const COUNT_AVATAR = 6;
const COUNT_COMMENTS = 5;

const DESCRIPTION = [
  'Красивый пейзаж',
  'Было здорово! Надо чаще собираться.',
  'Самый лучший день в моей жизни',
  'Спасибо всем кто был рядом , это был лучший юбилей',
  'Я и мои друзья. Люблю их за это.'
];

const NAMES = [
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

const MESSAGE = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.'
];

const getRandomInteger = (a, b) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};


const createPhoto = () => ({
  id: getUniqueId,
  url: `photos/${getUniqueUrl()}.jpg`,
  description: DESCRIPTION[getRandomInteger(0, DESCRIPTION.length - 1)],
  likes: getRandomInteger(MIN_LIKES, MAX_LIKES),
  comments: createComments(COUNT_COMMENTS)
});

const createPhotos = (n) => {
  const photos = Array.from({ length: n }, createPhoto);
  return photos;
};

const createComment = () => ({
  id: getUniqueIdComment,
  avatar: `img/avatar-${getUniqueAvatar()}.svg`,
  message: MESSAGE[getRandomInteger(0, MESSAGE.length - 1)],
  name: NAMES[getRandomInteger(0, NAMES.length - 1)]
});

const createComments = () => {
  const comments = Array.from({ length: COUNT_COMMENTS }, createComment);
  return comments;
};

const getUniqueRange = (min, max) => {
  const previousValues = [];

  return function () {
    let currentValue = getRandomInteger(min, max);
    if (previousValues.length >= (max - min + 1)) {
      console.error('Перебраны все числа из диапазона от ' + min + ' до ' + max);
      return null;
    }
    while (previousValues.includes(currentValue)) {
      currentValue = getRandomInteger(min, max);
    }
    previousValues.push(currentValue);
    return currentValue;
  };
};

const getUniqueId = getUniqueRange(0, COUNT_PHOTOS - 1);
const getUniqueUrl = getUniqueRange(1, COUNT_PHOTOS);
const getUniqueIdComment = getUniqueRange(0, COUNT_COMMENTS);
const getUniqueAvatar = getUniqueRange(1, COUNT_AVATAR);

// console.log(createPhotos(COUNT_PHOTOS));
// console.log(createComments(COUNT_PHOTOS));
