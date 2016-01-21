'use strict'

// dependencies
var TextElement = require('./element')

/**
 * HTML <abbr> tag for defining variables
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/abbr}
 * @memberOf UIKit
 */
module.exports = new TextElement({
  node: 'abbr',
  css: {
    name: 'abbr',
    atomic: 'atom'
  }
}).Constructor
