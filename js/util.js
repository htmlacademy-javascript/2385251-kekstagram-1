export const getRandomInteger = (a, b) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

export const getUniqueRange = (min, max) => {
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

const debounce = (callback, timeoutDelay) => {
  let timeoutId;
  return (...rest) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => callback.apply(this, rest), timeoutDelay);
  };
};
