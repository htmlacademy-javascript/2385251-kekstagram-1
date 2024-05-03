// const calculateNumber = (n) => {
//   let total = 0;
//   for (let i = 1; i < n ; i++) {
//     if (i % 3 === 0 || i % 5 === 0){
//       total += i;
//     }
//   }
//   return total;
// };
// console.log (calculateNumber(1000));


// const isPalindrom = (str) => {
//   let invers = '';
//   for (let i = str.length - 1; i >= 0; i--) {
//     invers = invers + str[i];
//   }
//   return invers === str;
// };
// console.log(isPalindrom('шалаш'))


const isLongString = (str, long) => long >= str.length;
console.log(isLongString('devevevrehrhrthrhrhrrrrrrrrrrr', 10));

// const isNumber = (n) => Number(n) === n;

// const getNumbers = (str) => {
//   if (isNumber(str)) {
//     return str;
//   }
//   let result = '';
//   for (let i = 0; i < str.length; i++) {
//     if (!isNaN(parseInt(str[i], 10))) {
//       result = result + str[i];
//     }
//   }
//   return parseInt(result, 10);
// }

// console.log(getNumbers(45454))


