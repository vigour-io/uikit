'use strict'

// dependencies
var Element = require('vigour-element')

/**
 * List
 * @memberOf UIKit
 */
module.exports = new Element({
  node: 'ul',
  ui: {
    name: 'list',
    atomic: 'molecule'
  },

  ChildConstructor: new Element({
    node: 'li',
    text: { $: 'parent' }
  })
}).Constructor
