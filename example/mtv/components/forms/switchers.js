require('./style.less')

var Element = require('vigour-element')
var ui = require('uikit/lib')

Element.prototype.inject(
  require('vigour-element/lib/property/text'),
  require('vigour-element/lib/property/transform'),
  require('vigour-element/lib/property/css'),
  require('vigour-element/lib/property/attributes')
)

var Observable = require('vigour-js/lib/observable')
var binded = new Observable(true)

module.exports = new Element({
  node: 'section',

  title: new ui.H5('Switcher:'),

  switcher: new ui.Switcher({
    state: binded
  }),

  sizes: {
    title: new ui.P('Switcher sizes:'),

    item0: new ui.Switcher({
      ui: {
        size: 'large'
      }
    }),
    item1: new ui.Switcher({
      ui: {
        size: 'big'
      }
    }),
    item2: new ui.Switcher({
      ui: {
        size: 'medium'
      }
    }),
    item3: new ui.Switcher({
      ui: {
        size: 'small'
      }
    })
  },

  colors: {
    title: new ui.P('Switcher colors:'),

    item0: new ui.Switcher({
      state: binded,
      ui: {
        scheme: 'primary',
        inverse: true
      }
    }),

    item1: new ui.Switcher({
      state: binded,
      ui: {
        scheme: 'secondary',
        inverse: true
      }
    }),

    item2: new ui.Switcher({
      state: binded,
      ui: {
        scheme: 'tertiary',
        inverse: true
      }
    }),

    item3: new ui.Switcher({
      state: binded,
      ui: {
        scheme: 'quaternary',
        inverse: true
      }
    }),

    item4: new ui.Switcher({
      state: binded,
      ui: {
        scheme: 'quinary',
        inverse: true
      }
    }),

    item5: new ui.Switcher({
      state: binded,
      ui: {
        scheme: 'graydark',
        inverse: true
      }
    }),

    item6: new ui.Switcher({
      state: binded,
      ui: {
        scheme: 'graylight',
        inverse: true
      }
    })
  }
})
