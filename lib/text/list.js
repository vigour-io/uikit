'use strict'

// dependencies
var Element = require('vigour-element')

/**
 * List
 * @memberOf UIKit
 */
module.exports = new Element({
  type: 'ul',
  css: {
    name: 'list',
    atomic: 'molecule'
  },

  ChildConstructor: new Element({
    type: 'li',
    // TODO what is this supposed to do?
    text: { $: 'parent' }
  })
}).Constructor
