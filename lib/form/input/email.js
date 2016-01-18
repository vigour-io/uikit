'use strict'

// components
var Input = require('./index')

/**
 * Input element
 * @memberOf UIKit
 */
module.exports = new Input({
  placeholder: 'E-mail',
  attributes: {
    type: 'email'
  },
  on: {
    keydown: {
      verify (e) {
        // console.log('this is an email verification!', this.node.value, e.keyCode)
      }
    }
  }
}).Constructor
