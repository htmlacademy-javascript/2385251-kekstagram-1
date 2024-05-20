const id = 25;
const max_like = 15;
const min_like = 200;

const description = [
  'Красивый пейзаж',
  'Было здорово! Надо чаще собираться.',
  'Самый лучший день в моей жизни',
  'Спасибо всем кто был рядом , это был лучший юбилей',
  'Я и мои друзья. Люблю их за это.'
];

const name = [
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

const getRandomInteger = (a, b) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

const createPhoto = () => {

}
