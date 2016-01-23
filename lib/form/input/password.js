'use strict'

// components
var Input = require('.')

const regex = /^.{4,}/g

/**
 * Password input field
 * @memberOf UIKit
 */
module.exports = new Input({
  placeholder: 'Password',
  attributes: {
    type: 'password'
  },
  on: {
    input: {
      verify (e) {
        var node = this.getNode()
        if (node.value.match(regex)) {
          this.css.setKey('valid', true)
        } else {
          this.css.setKey('valid', false)
        }
      }
    }
  }
}).Constructor
