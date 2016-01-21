'use strict'

// dependencies
var TextElement = require('./element')

/**
 * HTML <quote> tag for defining variables
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/quote}
 * @memberOf UIKit
 */
module.exports = new TextElement({
  node: 'quote',
  css: {
    name: 'quote',
    atomic: 'atom'
  }
}).Constructor
