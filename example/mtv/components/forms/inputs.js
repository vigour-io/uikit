require('./style.less')

var Element = require('vigour-element')
var ui = require('../../../../lib')

var Observable = require('vigour-js/lib/observable')
var binded = new Observable('Observable')

module.exports = new Element({
  type: 'section',

  title: new ui.H5('Inputs:'),

  sizes: {
    title: new ui.P('Input sizes:'),

    item0: new ui.Input({
      value: binded,
      css: {
        size: 'large'
      }
    }),

    item1: new ui.Input({
      value: binded,
      css: {
        size: 'big'
      }
    }),

    item2: new ui.Input({
      value: binded,
      css: {
        size: 'medium'
      }
    }),

    item3: new ui.Input({
      value: binded,
      css: {
        size: 'small'
      }
    })
  },

  colors: {
    title: new ui.P('Input colors:'),

    item0: new ui.Input({
      css: {
        scheme: 'primary',
        inverse: true
      }
    }),
    item1: new ui.Input({
      css: {
        scheme: 'secondary',
        inverse: true
      }
    }),
    item2: new ui.Input({
      css: {
        scheme: 'tertiary',
        inverse: true
      }
    }),
    item3: new ui.Input({
      css: {
        scheme: 'quaternary',
        inverse: true
      }
    }),
    item4: new ui.Input({
      css: {
        scheme: 'quinary',
        inverse: true
      }
    }),
    item5: new ui.Input({
      css: {
        scheme: 'blackwhite',
        inverse: true
      }
    })
  }
})
