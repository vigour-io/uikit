'use strict'

// dependencies
var Notification = require('../index')

// components
var NotificationButton = require('../notification-button')
var Icon = require('../../icon')
var Text = require('../../../text')

/**
 * Warning Notification
 */
module.exports = new Notification({
  ui: {
    type: 'warning'
  },

  icon: new Icon('warning'),

  caption: {
    title: new Text.H6('Please verify your account.'),

    subtitle: new Text.H8({
      text: "We've sent you an email.",
      css: {
        addClass: 'ui-additional'
      }
    })
  },

  button: new NotificationButton()
}).Constructor
