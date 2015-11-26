'use strict'

require('./style.less')

var Element = require('vigour-element')
var ui = require('uikit/lib')

Element.prototype.inject(
  require('vigour-element/lib/property/text'),
  require('vigour-element/lib/property/transform'),
  require('vigour-element/lib/property/css'),
  require('vigour-element/lib/property/attributes'),
  require('vigour-element/lib/events/css/animationEnd')
)

module.exports = new Element({
  title: new ui.H5('Modal layout:'),
  node: 'section',

  topbar: {
    title: new ui.P('Top bar:'),
    aside: {
      node: 'aside',
      css: 'ui-secondary',
      topbar: new ui.Topbar({
        left: new ui.Icon('left'),
        title: {
          text: 'Register'
        },
        right: new ui.Icon('close')
      })
    }
  },

  modal: {
    title: new ui.P('Modal:'),
    modal: new ui.Modal({
      topbar: new ui.Topbar({
        left: new ui.Icon('left'),
        title: {
          text: 'Register'
        },
        right: new ui.Icon('close')
      }),
      content: {
        hello: {
          node: 'span',
          text: 'hello there'
        }
      },
      bottombar: new ui.Bottombar({
        text: 'MTV Play - 1.2.81'
      })
    })
  }
})
