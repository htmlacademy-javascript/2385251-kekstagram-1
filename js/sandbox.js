let symbols = ['А', 'Б', 'В', 'Г', 'Д', 'Е', 'Ё', 'Ж', 'З', 'И', 'Й', 'К', 'Л', 'М', 'Н', 'О', 'П', 'Р', 'С', 'Т', 'У', 'Ф', 'Х', 'Ц', 'Ч', 'Ш', 'Щ', 'Ъ', 'Ы', 'Ь', 'Э', 'Ю', 'Я', 'а', 'б', 'в', 'г', 'д', 'е', 'ё', 'ж', 'з', 'и', 'й', 'к', 'л', 'м', 'н', 'о', 'п', 'р', 'с', 'т', 'у', 'ф', 'х', 'ц', 'ч', 'ш', 'щ', 'ъ', 'ы', 'ь', 'э', 'ю', 'я', ' ', '.', ',', '—', '!'];

// Закодированное сообщение
let encodedSymbols = [18, 38, 46, 62, 66, 50, 33, 41, 66, 49, 48, 38, 58, 62, 68, 66, 48, 37, 42, 47, 66, 50, 33, 41, 66, 49, 48, 51, 49, 42, 67];

// Раскодированное сообщение
let decodedMessage = '';
for (let i = 0; i <= symbols.length - 1; i++) {
  if (encodedSymbols[i] = symbols[i]) {
    decodedMessage += symbols[i];
  };
};
// console.log(decodedmessage);


function squareSum(numbers) {
  let result = 0;
  for (let i = 0; i < numbers.length; i++) {
    result += (numbers[i]) * (numbers[i]);
  }
  return result;
}

// console.log(squareSum([1, 2, 2]));


const isPalindrom = (str) => {
  a = str.split('').reverse().join('');
  return str === a;

};

// console.log(isPalindrom('шалаш'))


// let numbers = [2, 4, 7, 4, 7, 2];
// let number = 7;

// let lastIndex = -1;
// let i = numbers.length - 1
// while (i >= 0 && lastIndex === -1) {
//   console.log(numbers[i])
//   if (numbers[i] === number) {
//     lastIndex = i
//   };
//   i--
// };

// console.log(lastIndex);


// const getSquare = (numbers) => numbers.reduce((acc, item) => acc + item * item, 0);

function getSquare(numbers) {
  return numbers.reduce(function (acc, item) {
    return acc + item * item;
  }, 0)
};

// console.log(getSquare([1, 2, 3]));

const doFibanachi = (number) => {
  let a = 1;
  let b = 2;
  let sum = 0;
  for (let i = 3; i <= number; i++) {
    let c = a + b;
    a = b;
    b = c;
    if (b % 2 === 0) {
      sum += b;
    }
  }
  console.log(sum);
  return b;
};
// console.log(doFibanachi(10));
