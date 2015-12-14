'use strict'

// dependencies
var Element = require('vigour-element')
var ui = require('uikit/lib')

// style
require('./style.less')

// injects
Element.prototype.inject(
  require('vigour-element/lib/property/css')
)

module.exports = new Element({
  title: new ui.H5('Progress bars:'),
  node: 'section',

  progressbar: {
    title: new ui.P('Default:'),
    progressbar: new ui.Progressbar({
      state: 80
    })
  },

  colors: {
    title: new ui.P('Colors:'),

    0: new ui.Progressbar({
      ui: {
        scheme: 'secondary'
      },
      state: Math.random() * 100
    }),

    1: new ui.Progressbar({
      ui: {
        scheme: 'tertiary'
      },
      state: Math.random() * 100
    }),

    2: new ui.Progressbar({
      ui: {
        scheme: 'quaternary'
      },
      state: Math.random() * 100
    }),

    3: new ui.Progressbar({
      ui: {
        scheme: 'quinary'
      },
      state: Math.random() * 100
    }),

    4: new ui.Progressbar({
      ui: {
        scheme: 'blackwhite'
      },
      state: Math.random() * 100
    })
  }
})
