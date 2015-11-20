var Element = require('vigour-element')
var ui = require('~/lib')

module.exports = new Element({
  title: new ui.H5('Inputs:'),
  node: 'section',

  sizesCaption: new ui.P('Input sizes:'),
  large: new ui.Input('Large'),
  big: new ui.Input('Big'),
  medium: new ui.Input('Medium'),
  small: new ui.Input('Small'),

  colorCaption: new ui.P('Input colors:'),
  'ui-primary': new ui.Input('Primary'),
  'ui-secondary': new ui.Input('Secondary'),
  'ui-tertiary': new ui.Input('Tertiary'),
  'ui-grayscale-light': new ui.Input('Grayscale Light'),
  'ui-grayscale-dark': new ui.Input('Grayscale Dark'),
  'ui-blackwhite': new ui.Input('Black n White')
})
