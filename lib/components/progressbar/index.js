'use strict'
var Element = require('vigour-element')
var Observable = require('vigour-js/lib/observable')

Element.prototype.inject(
  require('vigour-element/lib/property/text'),
  require('vigour-element/lib/property/transform'),
  require('vigour-element/lib/property/css'),
  require('vigour-element/lib/property/size'),
  require('vigour-element/lib/property/attributes')
)

/**
 * Progress Bar component
 * @memberOf UIKit
 */

module.exports = new Element({
  css: 'ui-progressbar ui-molecule',
  progress: {
    css: 'ui-additional'
  },
  properties: {
    state: new Observable({
      on: {
        data () {
          this.parent.progress.node.style.width = `${this.val}%`
        }
      }
    }).Constructor
  }
}).Constructor
