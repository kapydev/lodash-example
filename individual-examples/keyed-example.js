const _ = require("lodash");

const peopleArray = [
  { id: 1, name: "Thomas", age: 24 },
  { id: 2, name: "Nancy", age: 24 },
  { id: 3, name: "Robert", age: 19 },
  { id: 4, name: "Charles", age: 34 },
  { id: 5, name: "Penelope", age: 45 },
  { id: 6, name: "Russet", age: 12 },
];

const keyedArr = _.keyBy(peopleArray, "name");

console.log(keyedArr.Thomas);