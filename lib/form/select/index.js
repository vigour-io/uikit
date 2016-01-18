'use strict'

// dependencies
var Element = require('vigour-element')
var Observable = require('vigour-js/lib/observable')
var Prop = require('vigour-element/lib/property')

// styles
require('vigour-scratch')
require('./style.less')

// components
var Icon = require('../../component/icon')

// properties
Element.prototype.inject(
  require('vigour-element/lib/property/text'),
  require('vigour-element/lib/property/css'),
  require('vigour-element/lib/property/attributes'),
  require('../../property')
)

/**
 * Select element
 * @memberOf UIKit
 */
module.exports = new Element({
  node: 'label',
  ui: {
    name: 'select',
    scheme: 'graylight',
    size: 'medium',
    state: 'clean',
    atomic: 'atom',
    childOf: 'form-element',
    interactive: false
  },
  css: { addClass: 'ui-dirty' },
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
    }
    // on: {
    //   change: {
    //     dirty () {
    //       this.parent.setKey('css', {
    //         addClass: 'ui-dirty'
    //       })
    //     }
    //   }
    // }
  },

  icon: new Icon('down ui-additional')
}).Constructor
