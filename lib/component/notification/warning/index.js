'use strict'

// dependencies
var Notification = require('..')

/**
 * Warning Notification
 */
module.exports = new Notification({
  css: {
    type: 'warning'
  },

  icon: 'warning-o',

  caption: {
    title: 'Please verify your account.'
  }
}).Constructor
