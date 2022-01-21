const fp = require("lodash/fp");

const doubler = (x) => x*2 //Iteratee

const numbers = [1,2,3,4] //Data

const doubled = fp.map(doubler, numbers)

const _ = require('lodash')

const numbers = [1,2,3,4] //Data

const doubler = (x) => x*2 //Iteratee

const doubled = _.map(numbers,doubler)
