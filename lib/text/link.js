'use strict'
var Element = require('vigour-element')

Element.prototype.inject(
  require('vigour-element/lib/property/text'),
  require('vigour-element/lib/property/css')
)

/**
 * Links
 * @memberOf UIKit
 */

module.exports = new Element({
  inject: require('vigour-element/lib/property/css'),
  css: 'ui-link ui-atom',
  node: 'a',
  on: {
    data: function (event) {
      this.set({
        attributes: {
          href: this.href.val
        }
      })
    }
  }
}).Constructor
