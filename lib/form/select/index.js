'use strict'

// dependencies
var Element = require('vigour-element')
var Property = require('vigour-element/lib/property')

// styles
require('vigour-scratch')
require('./style.less')

// components
var Icon = require('../../component/icon')

/**
 * Select element
 * @memberOf UIKit
 */
module.exports = new Element({
  type: 'label',
  css: {
    name: 'select',
    scheme: 'graylight',
    size: 'medium',
    state: 'clean',
    atomic: 'atom',
    childOf: 'form-element',
    interactive: false
  },
  options: {
    type: 'select',
    Child: new Element({
      type: 'option',
      properties: {
        selected: new Property({
          // render (node, event, element) {
            // if (this.parseValue() === true) {
            //   node.setAttribute('selected', 'selected')
            // } else {
            //   node.removeAttribute('selected')
            // }
          // }
        })
      }
    }),
    placeholder: {
      attributes: {
        disabled: 'disabled',
        value: ''
      }
    },
    on: {
      change: {
        ui () {
          // this.parent.css.state.val = 'dirty'
        }
      }
    }
  },
  icon: new Icon('down ui-additional')
}).Constructor
