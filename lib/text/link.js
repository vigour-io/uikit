'use strict'

// dependencies
var Element = require('vigour-element')
var Observable = require('vigour-js/lib/observable')

// properties
Element.prototype.inject(
  require('vigour-element/lib/property/text'),
  require('vigour-element/lib/property/css'),
  require('../property')
)

/**
 * Links
 * @memberOf UIKit
 */
module.exports = new Element({
  css: 'ui-link ui-atom',
  node: 'a',

  properties: {
    href: new Observable({
      on: {
        data () {
          this.parent.set({
            attributes: {
              href: this.val
            }
          })
        }
      }
    }),
    target: new Observable({
      on: {
        data () {
          this.parent.set({
            attributes: {
              target: this.val
            }
          })
        }
      }
    })
  }
}).Constructor
