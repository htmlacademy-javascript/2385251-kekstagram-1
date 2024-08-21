export const isEscapeKey = (evt) => evt.key === 'Escape';

export const errorLoadingNotice = (message) => {
  const notice = document.createElement('div');
  notice.style.position = 'absolute';
  notice.style.zIndex = '10';
  notice.style.left = '0';
  notice.style.top = '0';
  notice.style.right = '0';
  notice.style.padding = '10px';
  notice.style.fontSize = '20px';
  notice.style.textAlign = 'center';
  notice.style.color = 'white';
  notice.style.backgroundColor = 'red';
  notice.textContent = message;
  document.body.append(notice);

  setTimeout(() => {
    notice.remove();
  }, 5000);
};

export const debounce = (callback, timeoutDelay) => {
  let timeoutId;
  return (...rest) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => callback.apply(this, rest), timeoutDelay);
  };
};
