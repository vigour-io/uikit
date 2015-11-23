'use strict'
var Element = require('vigour-element')

Element.prototype.inject(
  require('vigour-element/lib/property/text'),
  require('vigour-element/lib/property/css')
)

/**
 * Label element
 * @memberOf UIKit
 */

module.exports = new Element({
  css: 'ui-form-group ui-molecule'
}).Constructor
