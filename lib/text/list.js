'use strict'
var Element = require('vigour-element')

Element.prototype.inject(
  require('vigour-element/lib/property/text'),
  require('vigour-element/lib/property/css')
)

/**
 * List
 * @memberOf UIKit
 */

// ul
module.exports = new Element({
  node: 'ul',
  ChildConstructor: new Element({
    node: 'li',
    text: { $: 'parent' }
  })
}).Constructor