'use strict'

// dependencies
var Notification = require('../index')

// components
var NotificationButton = require('../button')
var Icon = require('../../icon')
var Text = require('../../../text')

/**
 * Warning Notification
 */
module.exports = new Notification({
  ui: {
    type: 'warning'
  },
  icon: new Icon('warning-o'),
  caption: {
    title: new Text.H6('Please verify your account.')
  },
  button: new NotificationButton()
}).Constructor
