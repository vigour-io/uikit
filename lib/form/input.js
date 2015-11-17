'use strict'
var Element = require('vigour-element')

/**
 * Input element
 * @memberOf UIKit
 */

module.exports = new Element({
  node: 'input',
  css: 'ui-input',
  attributes: {
    placeholder: 'Text'
  }
}).Constructor
