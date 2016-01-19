'use strict'

// dependencies
var Element = require('vigour-element')
var Property = require('vigour-element/lib/property')

// style
require('vigour-scratch')
require('./style.less')

// properties
Element.prototype.inject(
  require('vigour-element/lib/property/css'),
  require('vigour-element/lib/property/size'),
  require('../../property')
)

/**
 * Progress Bar component
 * @memberOf UIKit
 */
module.exports = new Element({
  // css defaults
  ui: {
    name: 'progressbar',
    scheme: 'primary',
    inverse: true,
    size: 'small',
    atomic: 'atom'
  },

  progress: {
    css: 'ui-additional'
  },

  properties: {
    state: new Property({
      render (node) {
        // var progress = this.parent.progress
        // progress.set({
        //   w: `${this.parseValue()}%`
        // })
      }
    })
  }
}).Constructor
