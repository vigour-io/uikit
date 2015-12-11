require('./style.less')

var Element = require('vigour-element')
var ui = require('uikit/lib')

module.exports = new Element({
  title: new ui.H5('Selects:'),
  node: 'section',

  colorCaption: new ui.P('Select colors:'),
  0: new ui.Select({
    options: {
      one: {
        text: 'One'
      },
      two: {
        text: 'Two'
      }
    }
  }),

  1: new ui.Select({
    ui: {
      color: 'primary'
    }
  }),

  2: new ui.Select({
    ui: {
      color: 'grayscale-light'
    }
  }),

  3: new ui.Select({
    ui: {
      color: 'secondary'
    }
  })
})
