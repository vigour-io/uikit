'use strict'

// dependencies
var Element = require('vigour-element')

// components
var Notification = require('../')
var NotificationButton = require('../button')
var Text = require('../../../text')

// properties
Element.prototype.inject(
  require('vigour-element/lib/property/css')
)

/**
 * Error Notification
 */
module.exports = new Notification({
  css: {
    type: 'error'
  },

  icon: 'wrong-o',

  caption: {
    title: new Text.H7('Invalid entry, please revise.')
  },

  button: new NotificationButton()
}).Constructor
