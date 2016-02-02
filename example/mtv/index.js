'use strict'
console.time('create mtv set')
require('./forms')
require('./components')
require('./typography')

module.exports = require('./app')
console.timeEnd('end mtv set')
