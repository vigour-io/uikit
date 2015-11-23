'use strict'
var Input = require('./input')

/**
 * Input element
 * @memberOf UIKit
 */

module.exports = new Input({
  attributes: {
    placeholder: 'E-mail',
    type: 'email'
  },
  on: {
    keydown: {
      verify (e) {
        console.log('this is an email verification!', this.node.value, e.keyCode)
      }
    }
  }
}).Constructor
