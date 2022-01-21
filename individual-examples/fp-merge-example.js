const fp = require("lodash/fp");

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

const updatedPerson = fp.merge(person1)(person2);
console.log(updatedPerson)