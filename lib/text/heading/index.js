'use strict'

// dependencies
var TextElement = require('../element')

// styles
require('./style.less')

/**
 * Headers
 * @memberOf UIKit
 */

// h1
exports.H1 = new TextElement({
  node: 'h1',
  ui: {
    name: 'heading',
    size: 'h1',
    atomic: 'atom'
  }
}).Constructor

// h2
exports.H2 = new TextElement({
  node: 'h2',
  ui: {
    name: 'heading',
    size: 'h2',
    atomic: 'atom'
  }
}).Constructor

// h3
exports.H3 = new TextElement({
  node: 'h3',
  ui: {
    name: 'heading',
    size: 'h3',
    atomic: 'atom'
  }
}).Constructor

// h4
exports.H4 = new TextElement({
  node: 'h4',
  ui: {
    name: 'heading',
    size: 'h4',
    atomic: 'atom'
  }
}).Constructor

// h5
exports.H5 = new TextElement({
  node: 'h5',
  ui: {
    name: 'heading',
    size: 'h5',
    atomic: 'atom'
  }
}).Constructor

// h6
exports.H6 = new TextElement({
  node: 'h6',
  ui: {
    name: 'heading',
    size: 'h6',
    atomic: 'atom'
  }
}).Constructor

// h7
exports.H7 = new TextElement({
  ui: {
    name: 'heading',
    size: 'h7',
    atomic: 'atom'
  }
}).Constructor

// h8
exports.H8 = new TextElement({
  ui: {
    name: 'heading',
    size: 'h8',
    atomic: 'atom'
  }
}).Constructor

// h9
exports.H9 = new TextElement({
  ui: {
    name: 'heading',
    size: 'h9',
    atomic: 'atom'
  }
}).Constructor

// h10
exports.H10 = new TextElement({
  ui: {
    name: 'heading',
    size: 'h10',
    atomic: 'atom'
  }
}).Constructor