import {
  COUNT_COMMENTS,
  COUNT_MAX_AVATAR,
  COUNT_MIN_AVATAR,
  MAX_LIKES,
  MIN_LIKES,
  DESCRIPTION,
  NAMES,
  MESSAGE

} from './constants.js';

import { getRandomInteger, getUniqueRange } from './util.js';

let localCountPhotos;
let getUniqueId;
let getUniqueUrl;
let getUniqueIdComment;

const createComment = () => ({
  id: getUniqueIdComment(),
  avatar: `img/avatar-${getRandomInteger(COUNT_MIN_AVATAR, COUNT_MAX_AVATAR)}.svg`,
  message: MESSAGE[getRandomInteger(0, MESSAGE.length - 1)],
  name: NAMES[getRandomInteger(0, NAMES.length - 1)]
});

const createComments = (n) => {
  const comments = Array.from({ length: n }, createComment);
  return comments;
};

const createPhoto = () => ({
  id: getUniqueId(),
  url: `photos/${getUniqueUrl()}.jpg`,
  description: DESCRIPTION[getRandomInteger(0, DESCRIPTION.length - 1)],
  likes: getRandomInteger(MIN_LIKES, MAX_LIKES),
  comments: createComments(getRandomInteger(0, COUNT_COMMENTS))
});

export const createPhotos = (n) => {
  localCountPhotos = n;
  getUniqueId = getUniqueRange(0, localCountPhotos - 1);
  getUniqueUrl = getUniqueRange(1, localCountPhotos);
  getUniqueIdComment = getUniqueRange(0, COUNT_COMMENTS);
  const photos = Array.from({ length: n }, createPhoto);
  return photos;
};
