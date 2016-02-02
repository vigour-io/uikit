'use strict'

// dependencies
var Element = require('vigour-element')
var ui = require('../../../../lib')

// style
require('./style.less')

// injects
Element.prototype.inject(
  require('vigour-element/lib/property/css')
)

module.exports = new Element({
  type: 'section',
  title: new ui.H5('Progress bars:'),

  progressbar: {
    title: new ui.P('Default:'),
    progressbar: new ui.Progressbar({
      state: 80
    })
  },

  colors: {
    title: new ui.P('Colors:'),

    item0: new ui.Progressbar({
      css: {
        scheme: 'secondary'
      },
      state: Math.random() * 100
    }),

    item1: new ui.Progressbar({
      css: {
        scheme: 'tertiary'
      },
      state: Math.random() * 100
    }),

    item2: new ui.Progressbar({
      css: {
        scheme: 'quaternary'
      },
      state: Math.random() * 100
    }),

    item3: new ui.Progressbar({
      css: {
        scheme: 'quinary'
      },
      state: Math.random() * 100
    }),

    item4: new ui.Progressbar({
      css: {
        scheme: 'blackwhite'
      },
      state: Math.random() * 100
    })
  }
})
