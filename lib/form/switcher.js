'use strict'
var Element = require('vigour-element')
var Observable = require('vigour-js/lib/observable')

/**
 * Select element
 * @memberOf UIKit
 */

module.exports = new Element({
  css: 'ui-switcher ui-atom',
  checkbox: {
    node: 'input',
    properties: {
      state: new Observable({
        on: {
          data: {
            ui (data, event) {
              if (this.val === true) {
                // this.node.value = true
              } else {
                // this.node.value = false
              }
            }
          }
        }
      })
    },
    attributes: {
      type: 'checkbox'
    },
    on: {
      change: {
        ui() {
          if (this.state) {
            this.state.origin.val = this.node.value
          } else {
            this.set({ state: this.node.value })
          }
          // this.set({ state: })
        }
      }
    }
  },
  circle: {
    node: 'span'
  }
}).Constructor
