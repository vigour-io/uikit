'use strict'

// dependencies
var Element = require('vigour-element')

// styles
require('vigour-scratch')
require('./style.less')

// components
var Label = require('../../../form/label')

// properties
Element.prototype.inject(
  require('vigour-element/lib/property/css')
)

/**
 * Label Row
 */
module.exports = new Element({
  ui: {
    name: 'row',
    atomic: 'organism'
  },
  css: 'with label',

  label: new Label({
    ui: {
      color: ''
    }
  })
}).Constructor
