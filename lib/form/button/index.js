'use strict'

// dependencies
var Element = require('vigour-element')

// style
module.exports.inject = require('./style.less')

// injects
Element.prototype.inject(
  require('vigour-element/lib/property/text'),
  require('vigour-element/lib/property/css'),
  require('vigour-element/lib/property/attributes')
)

/**
 * Button element
 * @memberOf UIKit
 */

module.exports = new Element({
  node: 'button',
  css: 'ui-button ui-interactive ui-atom ui-primary ui-form-element',
  text: 'Button',
  on: {
    click: {
      ui () {
        this.setKey('css', {
          addClass: 'ui-dirty'
        })
      }
    }
  }
}).Constructor
