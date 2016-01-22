'use strict'

// dependencies
var Element = require('../../element')
var Prop = require('vigour-element/lib/property')

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
  node: 'label',
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
    node: 'select',
    ChildConstructor: new Element({
      node: 'option',
      properties: {
        selected: new Prop({
          render (node, event, element) {
            if (this.parseValue() === true) {
              node.setAttribute('selected', 'selected')
            } else {
              node.removeAttribute('selected')
            }
          }
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
          this.parent.css.state.val = 'dirty'
        }
      }
    }
  },
  icon: new Icon('down ui-additional')
}).Constructor
