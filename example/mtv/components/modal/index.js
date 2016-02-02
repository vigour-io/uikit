'use strict'

require('./style.less')

var Element = require('vigour-element')
var ui = require('../../../../lib')

module.exports = global.modal = new Element({
  type: 'section',
  title: new ui.H5('Modal layout:'),

  topbar: {
    title: new ui.P('Top bar:'),
    aside: {
      type: 'aside',
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
          type: 'span',
          text: 'Hello World'
        }
      },
      bottombar: new ui.Bottombar({
        text: 'MTV Play - 1.2.81'
      })
    })
  }
})
