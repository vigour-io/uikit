'use strict'
exports.inject = require('vigour-js/lib/operator/transform')
exports.$transform = function (val) {
  return val > 999 ? ~~(val / 100) / 10 + 'k' : val
}
