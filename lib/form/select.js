'use strict'
var Element = require('vigour-element')

/**
 * Select element
 * @memberOf UIKit
 */

module.exports = new Element({
  node: 'select',
  ChildConstructor:new Element({
    node: 'option'
  })
}).Constructor