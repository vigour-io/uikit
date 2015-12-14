'use strict'

// dependencies
var Element = require('vigour-element')
var Observable = require('vigour-js/lib/observable')

// style
require('vigour-scratch')
require('./style.less')

// properties
Element.prototype.inject(
  require('vigour-element/lib/property/text'),
  require('vigour-element/lib/property/css'),
  require('vigour-element/lib/property/attributes'),
  require('../../property')
)

/**
 * Input element
 * @memberOf UIKit
 */
module.exports = new Element({
  node: 'input',
  text: '',

  attributes: {
    placeholder: 'Text'
  },

  // css defaults
  ui: {
    name: 'input',
    scheme: 'grayscale-light-inverse',
    size: 'medium',
    state: 'clean',
    atomic: 'atom',
    childOf: 'form-element',
    interactive: false
  },

  properties: {
    placeholder: new Observable({
      on: {
        data: {
          ui () {
            this.parent.set({
              attributes: {
                placeholder: this.val
              }
            })
          }
        }
      }
    }).Constructor
  },

  on: {
    change: {
      ui () {
        this.setKey('ui', {
          state: 'dirty'
        })
      }
    },

    input: {
      text () {
        this.text.origin.val = this.node.value
      }
    }
  }
}).Constructor
