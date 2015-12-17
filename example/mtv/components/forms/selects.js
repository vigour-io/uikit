require('./style.less')

var Element = require('vigour-element')
var ui = require('uikit/lib')

module.exports = new Element({
  node: 'section',

  title: new ui.H5('Selects:'),

  selects: {
    title: new ui.P('Select colors:'),

    item0: new ui.Select({
      options: {
        one: {
          text: 'One'
        },
        two: {
          text: 'Two'
        }
      }
    }),

    item1: new ui.Select({
      ui: {
        scheme: 'primary',
        inverse: true
      }
    }),

    item2: new ui.Select({
      ui: {
        scheme: 'graylight',
        inverse: true
      }
    }),

    item3: new ui.Select({
      ui: {
        scheme: 'secondary',
        inverse: true
      }
    })
  }
})
