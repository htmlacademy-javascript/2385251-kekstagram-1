const users = [
  {
    name: 'Yulia',
    age: 20,
    isActive: true
  },
  {
    name: 'Pasha',
    age: 50,
    isActive: false
  },
  {
    name: 'Ivan',
    age: 25,
    isActive: true
  },
  {
    name: 'Maria',
    age: 40,
    isActive: false
  }
];

// ['Yulia', 'Pasha', 'Ivan', 'Maria']

function getNames(arr) {
  const result = [];
  for (let j = 0; j < arr.length; j++) {
    result.push(arr[j].name)
  }
  return result;
}

// console.log(getNames(users));

function getNamesByForEach(arr) {
  const result = [];

  arr.forEach(function (item) {
    result.push(item.name)
  });

  return result;

}

// console.log(getNamesByForEach(users));

// function getNamesByMap(arr){
//   return arr.map(function(element){
//     return element.name
//   })
// }

const getNamesByMap = (arr) => arr.map((element) => element.name);

// console.log(getNamesByMap(users));

function getActiveNames(arr) {
  const result = [];
  for (i = 0; i < arr.length; i++) {
    if (arr[i].isActive) {
      result.push(arr[i].name)
    }
  }
  return result;
}

// console.log(getActiveNames(users))

// function getActiveNamesByFilterAndMap(arr) {
//   return arr.filter(function (item) {
//     return item.isActive
//   }).map(function (el) {
//     return el.name
//   })
// }

const getActiveNamesByFilterAndMap = (arr) => arr
  .filter((item) => item.isActive)
  .map((element) => element.name);

// console.log(getActiveNamesByFilterAndMap(users))


// const getSortedNames = (arr) => arr.sort((a, b) => b.age - a.age).map((item) => item.name)
// console.log(getSortedNames(users))


