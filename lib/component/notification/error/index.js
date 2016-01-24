'use strict'

// components
var Notification = require('..')

/**
 * Error Notification
 */
module.exports = new Notification({
  css: {
    type: 'error'
  },

  icon: 'wrong-o',

  caption: {
    title: 'Invalid entry, please revise.'
  }
}).Constructor
