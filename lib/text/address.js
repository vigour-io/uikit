'use strict'

// dependencies
var TextElement = require('./element')

/**
 * HTML <address> tag for defining variables
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/address}
 * @memberOf UIKit
 */
module.exports = new TextElement({
  node: 'address',
  css: {
    name: 'address',
    atomic: 'atom'
  }
}).Constructor
