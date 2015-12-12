'use strict'

// dependencies
var Notification = require('../index')

// components
var NotificationButton = require('../notification-button')
var Icon = require('../../icon')
var Text = require('../../../text')

/**
 * Success Notification
 */
module.exports = new Notification({
  css: {
    addClass: 'ui-success'
  },
  icon: new Icon('correct'),
  caption: {
    title: new Text.H7('Welcome back!')
  },
  button: new NotificationButton()
}).Constructor
