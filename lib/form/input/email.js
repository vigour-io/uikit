'use strict'

// components
var Input = require('.')

const regex = /^([\w-]+){1,}@([\w-?]+){1,}((\.[a-z]+)+)?(\.([a-z]+){2,})+$/g

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
