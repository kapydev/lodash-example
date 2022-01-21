const _ = require("lodash");

function fibonacci(n) {
  if (n === 0) return 0;
  if (n === 1) return 1;
  return fibonacci(n - 1) + fibonacci(n - 2);
}

fibonacci = _.memoize(fibonacci);

console.log(fibonacci(400))
