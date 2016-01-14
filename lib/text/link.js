'use strict'

// dependencies
var Element = require('../element')
var Observable = require('vigour-js/lib/observable')

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
