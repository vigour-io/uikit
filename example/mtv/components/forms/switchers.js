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
    'ui-primary': new ui.Switcher(),
    'ui-secondary': new ui.Switcher(),
    'ui-tertiary': new ui.Switcher(),
    'ui-quaternary': new ui.Switcher(),
    'ui-quinary': new ui.Switcher(),
    'ui-grayscale-dark': new ui.Switcher(),
    'ui-grayscale-light': new ui.Switcher(),
    'ui-blackwhite': new ui.Switcher()
  }
})
