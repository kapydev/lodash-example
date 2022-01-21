const fp = require('lodash/fp')

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