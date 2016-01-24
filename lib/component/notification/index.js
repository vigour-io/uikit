'use strict'

// styles
require('vigour-scratch')
require('./style.less')

// dependencies
var Row = require('../').Row
var Icon = require('../').Icon
var CloseButton = require('./button')
var Text = require('../../text')

/**
 * Notification
 */
module.exports = new Row({
  css: {
    name: 'notification',
    atomic: 'organism'
  },
  icon: new Icon({
    css: {
      size: 'h2'
    },
    order: 1
  }),
  caption: {
    order: 2,
    title: new Text.H6()
  },
  button: new CloseButton({
    order: 3
  })
}).Constructor

module.exports.CloseButton = CloseButton
