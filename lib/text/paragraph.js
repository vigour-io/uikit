'use strict'

// dependencies
var TextElement = require('./element')

/**
 * Paragraphs
 * @memberOf UIKit
 */
module.exports = new TextElement({
  node: 'p',
  css: {
    name: 'paragraph',
    atomic: 'atom'
  }
}).Constructor
