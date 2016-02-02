'use strict'

// dependencies
var TextElement = require('./element')

/**
 * HTML <mark> tag for defining variables
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/mark}
 * @memberOf UIKit
 */
module.exports = new TextElement({
  type: 'mark',
  css: {
    name: 'mark',
    atomic: 'atom'
  }
}).Constructor
