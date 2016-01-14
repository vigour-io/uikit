'use strict'

// components
var Input = require('./index')

/**
 * Password input field
 * @memberOf UIKit
 */
module.exports = new Input({
  placeholder: 'Password',
  attributes: {
    type: 'password'
  }
}).Constructor
