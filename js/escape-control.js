import { isEscapeKey } from "./util.js";

const stack = [];
let listener = null;

const onDocumentEscape = (evt) => {
  if (isEscapeKey(evt)) {
    const index = stack.length - 1;
    stack[index]();
    stack.length = stack.length - 1;
    if (!stack.length) {
      listener = null;
      document.removeEventListener('keydown', onDocumentEscape);
    }
  }
};

export const setEscapeControl = (cb) => {
  stack.push(cb);
  if (!listener) {
    listener = document.addEventListener('keydown', onDocumentEscape)
  }
};

export const removeEscapeControl = (cb) => {
  stack.length = stack.length - 1;
  if (!stack.length) {
    listener = null;
    document.removeEventListener('keydown', onDocumentEscape);
  }
};
