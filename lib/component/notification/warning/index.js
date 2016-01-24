'use strict'

// dependencies
var Notification = require('../')

// components
var NotificationButton = require('../button')
var Text = require('../../../text')

/**
 * Warning Notification
 */
module.exports = new Notification({
  css: {
    type: 'warning'
  },
  icon: 'warning-o',
  caption: {
    title: new Text.H6('Please verify your account.')
  },
  button: new NotificationButton()
}).Constructor
