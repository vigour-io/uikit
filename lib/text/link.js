'use strict'

// dependencies
var Element = require('vigour-element')
var Observable = require('vigour-js/lib/observable')

// properties
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
  properties: {
    href: new Observable({
      on: {
        data () {
          this.parent.set({
            attributes: {
              val: this.val
            }
          })
        }
      }
    })
  },
  on: {
    data: function (event) {
      this.set({
        attributes: {
          href: this.href
        }
      })
    }
  }
}).Constructor
