'use strict'

// styles
require('./style.less')

// dependencies
var Element = require('../../element')

/**
 * Row
 */
module.exports = new Element({
  css: {
    name: 'row',
    atomic: 'organism'
  }
}).Constructor

module.exports.Toggle = require('./toggle')
module.exports.Label = require('./label')
module.exports.List = require('./list')
