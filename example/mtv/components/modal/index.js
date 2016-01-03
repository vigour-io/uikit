'use strict'

require('./style.less')

var Element = require('vigour-element')
var ui = require('../../../../lib')

Element.prototype.inject(
  require('vigour-element/lib/property/text'),
  require('vigour-element/lib/property/transform'),
  require('vigour-element/lib/property/css'),
  require('vigour-element/lib/property/attributes'),
  require('vigour-element/lib/event/css/animationEnd')
)

module.exports = global.modal = new Element({
  node: 'section',
  title: new ui.H5('Modal layout:'),

  topbar: {
    title: new ui.P('Top bar:'),
    aside: {
      node: 'aside',
      css: 'ui-scheme-secondary ui-inverse',
      topbar: new ui.Topbar({
        back: new ui.Icon('left'),
        title: {
          text: 'Register'
        },
        close: new ui.Icon('close')
      })
    }
  },

  modal: {
    title: new ui.P('Modal:'),
    modal: new ui.Modal({
      topbar: new ui.Topbar({
        back: new ui.Icon('left'),
        title: {
          text: 'Register'
        },
        close: new ui.Icon('close')
      }),
      content: {
        hello: {
          node: 'span',
          text: 'Hello World'
        }
      },
      bottombar: new ui.Bottombar({
        text: 'MTV Play - 1.2.81'
      })
    })
  }
})
