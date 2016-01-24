'use strict'

// components
var Notification = require('..')

/**
 * Success Notification
 */
module.exports = new Notification({
  css: {
    type: 'success'
  },

  icon: 'correct',

  caption: {
    title: 'Welcome back!'
  }
}).Constructor
