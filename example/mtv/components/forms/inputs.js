require('./style.less')

var Element = require('vigour-element')
var ui = require('~/lib')

var Observable = require('vigour-js/lib/observable')

Element.prototype.inject(
  require('vigour-js/lib/operator/subscribe')
)

var obs = window.obs = new Observable('Observable')

module.exports = new Element({
  title: new ui.H5('Inputs:'),
  node: 'section',

  sizesCaption: new ui.P('Input sizes:'),
  'ui-large': new ui.Input({
    text: obs
  }),
  'ui-big': new ui.Input({
    text: obs
  }),
  'ui-medium': new ui.Input({
    text: obs
  }),
  'ui-small': new ui.Input({
    text: obs
  }),

  colorCaption: new ui.P('Input colors:'),
  'ui-primary': new ui.Input(),
  'ui-secondary': new ui.Input(),
  'ui-tertiary': new ui.Input(),
  br: new ui.Br(),
  'ui-grayscale-light': new ui.Input(),
  'ui-grayscale-dark': new ui.Input(),
  'ui-blackwhite': new ui.Input()
})
