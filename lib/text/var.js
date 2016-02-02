'use strict'

// dependencies
var TextElement = require('./element')

/**
 * HTML <var> tag for defining variables
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/var}
 * @memberOf UIKit
 */
module.exports = new TextElement({
  type: 'var',
  css: {
    name: 'var',
    atomic: 'atom'
  }
}).Constructor
