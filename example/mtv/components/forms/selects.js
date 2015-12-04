require('./style.less')

var Element = require('vigour-element')
var ui = require('uikit/lib')

module.exports = new Element({
  title: new ui.H5('Selects:'),
  node: 'section',

  colorCaption: new ui.P('Select colors:'),
  'ui-primary': new ui.Select({
    options: {
      one: {
        text: 'One'
      },
      two: {
        text: 'Two'
      }
    }
  }),
  'ui-secondary': new ui.Select(),
  'ui-tertiary': new ui.Select(),
  'ui-blackwhite': new ui.Select()
})
