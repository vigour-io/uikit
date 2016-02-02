'use strict'

// dependencies
var Element = require('vigour-element')
var Property = require('vigour-element/lib/property')

// style
require('vigour-scratch')
require('./style.less')

/**
 * Progress Bar component
 * @memberOf UIKit
 */
module.exports = new Element({
  // css defaults
  css: {
    name: 'progressbar',
    scheme: 'primary',
    inverse: true,
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
