'use strict'

// dependencies
var TextElement = require('./element')

/**
 * HTML <time> tag for defining time sets
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/time}
 * @memberOf UIKit
 */
module.exports = new TextElement({
  node: 'time',
  css: {
    name: 'time',
    atomic: 'atom'
  }
}).Constructor
