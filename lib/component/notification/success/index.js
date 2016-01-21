'use strict'

// dependencies
var Notification = require('../index')

// components
var NotificationButton = require('../button')
var Icon = require('../../icon')
var Text = require('../../../text')

// properties
NotificationButton.prototype.inject(
  require('vigour-element/lib/property/css'),
  require('../../../property')
)

/**
 * Success Notification
 */
module.exports = new Notification({
  css: {
    type: 'success'
  },

  icon: new Icon('correct'),

  caption: {
    title: new Text.H7('Welcome back!')
  },

  button: new NotificationButton()
}).Constructor
