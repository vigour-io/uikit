require('./style.less')

var Element = require('vigour-element')
var ui = require('~/lib')

module.exports = new Element({
  title: new ui.H5('Switcher:'),
  node: 'section',

  switcher: new ui.Switcher(),

  sizes: {
    title: new ui.P('Switcher sizes:'),
    'ui-large': new ui.Switcher({
      css: {
        addClass: 'ui-large'
      }
    }),
    'ui-big': new ui.Switcher({
      css: {
        addClass: 'ui-big'
      }
    }),
    'ui-medium': new ui.Switcher(),
    'ui-small': new ui.Switcher({
      css: {
        addClass: 'ui-small'
      }
    })
  },

  colors: {
    title: new ui.P('Switcher colors:'),
    'ui-primary': new ui.Switcher({
      state: true
    }),
    'ui-secondary': new ui.Switcher({
      state: true
    }),
    'ui-tertiary': new ui.Switcher({
      state: true
    }),
    'ui-quaternary': new ui.Switcher({
      state: true
    }),
    'ui-quinary': new ui.Switcher({
      state: true
    }),
    'ui-grayscale-dark': new ui.Switcher({
      state: true
    }),
    'ui-grayscale-light': new ui.Switcher({
      state: true
    }),
    'ui-blackwhite': new ui.Switcher({
      state: true
    })
  }
})
