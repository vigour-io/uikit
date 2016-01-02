'use strict'
var Element = require('vigour-element')
var ui = require('../../../../lib')

const BASE_FONT_SIZE = 10
const HEADER_TEXT = 'The quick brown fox jumps over the lazy dog.'

var headings = []
var sizes = [3.2, 2.4, 2, 1.8, 1.6, 1.4, 1.3, 1.2, 1.1, 1]

for (let i = 0; i < 10; i++) {
  headings[i] = new Element({
    caption: {
      node: 'span',
      text: `h${i + 1} - ${ parseInt(sizes[i] * BASE_FONT_SIZE, 10) }px`
    },
    header: new ui[`H${i + 1}`](HEADER_TEXT)
  })
}

module.exports = new Element(headings).Constructor
