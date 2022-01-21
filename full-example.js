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

// console.log(keyedArr);
// console.log(keyedArr.Thomas);

function fibonacci(n) {
  if (n === 0) return 0;
  if (n === 1) return 1;
  return fibonacci(n - 1) + fibonacci(n - 2);
}

fibonacci = _.memoize(fibonacci);

// console.log(fibonacci(40))
// console.log(fibonacci(40))
// console.log(fibonacci(40))
// console.log(fibonacci(40))
// console.log(fibonacci(40))
// console.log(fibonacci(40))
// console.log(fibonacci(40))
// console.log(fibonacci(40))
// console.log(fibonacci(40))
// console.log(fibonacci(40))
// console.log(fibonacci(200))

const person1 = {
  name: "Robert",
  age: 25,
  gender: "Male",
  car: {
    brand: "Mercedes",
  },
};

const person2 = {
  car: {
    brand: "Toyota",
    horsepower: 69,
    topSpeed: 100,
  },
};

const updatedPerson = _.merge(person1, person2);

// console.log(updatedPerson)
// console.log(person1)

const fp = require("lodash/fp");

const person3 = {
  name: "Robert",
  age: 25,
  gender: "Male",
  car: {
    brand: "Mercedes",
  },
};

const person4 = {
  car: {
    brand: "Toyota",
    horsepower: 69,
    topSpeed: 100,
  },
};

// const updatedPerson2 = fp.merge(person3, person4);
const updatedPerson2 = fp.merge(person3)(person4);

console.log(updatedPerson2);
console.log(person3);

// Every option is `true` by default.
const _fp = fp.convert({
  // Specify capping iteratee arguments.
  cap: true,
  // Specify currying.
  curry: false,
  // Specify fixed arity.
  fixed: false,
  // Specify immutable operations.
  immutable: false,
  // Specify rearranging arguments.
  rearg: false,
});

const merge = require("lodash.merge"); //Bad

const merge = require("lodash/merge"); //Good

import { merge } from "lodash"; //Good if Webpack or Rollup
