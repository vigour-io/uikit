require('./style.less')

var Element = require('vigour-element')
var ui = require('~/lib')

module.exports = new Element({
  title: new ui.H5('Inputs:'),
  node: 'section',

  sizesCaption: new ui.P('Input sizes:'),
  'ui-large': new ui.Input(),
  'ui-big': new ui.Input(),
  'ui-medium': new ui.Input(),
  'ui-small': new ui.Input(),

  colorCaption: new ui.P('Input colors:'),
  'ui-primary': new ui.Input(),
  'ui-secondary': new ui.Input(),
  'ui-tertiary': new ui.Input(),
  'ui-grayscale-light': new ui.Input(),
  'ui-grayscale-dark': new ui.Input(),
  'ui-blackwhite': new ui.Input()
})
