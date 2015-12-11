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
var binded = new Observable('Observable')

module.exports = new Element({
  title: new ui.H5('Inputs:'),
  node: 'section',

  sizesCaption: new ui.P('Input sizes:'),
  'ui-large': new ui.Input({
    text: binded
  }),
  'ui-big': new ui.Input({
    text: binded
  }),
  'ui-medium': new ui.Input({
    text: binded
  }),
  'ui-small': new ui.Input({
    text: binded
  }),

  colorCaption: new ui.P('Input colors:'),
  'ui-primary': new ui.Input(),
  'ui-secondary': new ui.Input(),
  'ui-tertiary': new ui.Input(),
  'ui-grayscale-light': new ui.Input(),
  'ui-grayscale-dark': new ui.Input(),
  'ui-blackwhite': new ui.Input()
})
