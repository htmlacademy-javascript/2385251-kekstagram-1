import { MAX_COMMENT_LENGTH, HASHTAG_FORMULA, MAX_HASHTAGS } from './constants.js';
const form = document.querySelector('.img-upload__form');
export const hashtag = document.querySelector('.text__hashtags');
export const comment = document.querySelector('.text__description');

const pristine = new Pristine(form, {
  classTo: 'img-upload__field-wrapper',
  errorTextParent: 'img-upload__field-wrapper',
  errorTextClass: 'img-upload__field-wrapper',
});

const checkComment = (value) => {
  return value.length <= MAX_COMMENT_LENGTH;
};

const normaliseHashTags = (str) => {
  const regex = /\s+/g;
  const arr = str.replaceAll(regex, ' ').trim().toUpperCase().split(' ');
  return arr;
};

const checkHashtag = (value) => {
  const tags = normaliseHashTags(value);
  return !value.length || tags.every((tag) => HASHTAG_FORMULA.test(tag));
};

const checkCountHashtags = (value) => {
  const tags = normaliseHashTags(value);
  return MAX_HASHTAGS >= tags.length;
};

const checkUniqueHashtags = (value) => {
  const tags = normaliseHashTags(value);
  const uniqueTags = [...new Set(tags)];
  return tags.length === uniqueTags.length;
};

pristine.addValidator(
  comment,
  checkComment,
  `Максимальная длина сообщения не должна превышать ${MAX_COMMENT_LENGTH}`
);

pristine.addValidator(
  hashtag,
  checkHashtag,
  'После решетки должны идти только буквы и числа'
);

pristine.addValidator(
  hashtag,
  checkCountHashtags,
  `Максимальное количество хеш-тегов должно быть ${MAX_HASHTAGS}`
);

pristine.addValidator(
  hashtag,
  checkUniqueHashtags,
  'Хеш-теги не должны повторяться'
);

const resetValidation = () => {
  pristine.reset();
  // form.reset();
};

const isValid = () => pristine.validate();


export { resetValidation, isValid };
