'use strict'
require('./style.less')

var Element = require('vigour-element')
var Base = require('vigour-js/lib/base')
var Observable = require('vigour-js/lib/observable')
var prefix = require('vigour-ua').prefix
var Property = require('vigour-element/lib/property')
var addNewProperty = Element.prototype.addNewProperty
var getPropertyValue = Element.prototype.getPropertyValue
var cnt = 0

module.exports = new Element({
  css: 'ui-switcher',
  properties: {
    __direction: true,
    config: new Base({
      properties: {
        opacity: true,
        keep: true,
        factor: {
          val: 1
        },
        axis: {
          val: 'x'
        }
      }
    }),
    previous: Observable,
    current: Observable,
    next: new Property({
      render (node, event, element) {
        var data = this.val
        var key = element.makeKey(data)
        element.setKey(key, data, event)
      }
    })
  },
  config: {},
  define: {
    getPropertyValue (val, event, parent, key, escape) {
      if (val instanceof Element) {
        val.setKey(this.config.axis, this.getNode().clientWidth * this.getDirection(val.val), event)
      } else if (!this.properties[key]) {
        let delta = this.getNode().clientWidth * this.getDirection(val)
        if (val instanceof Observable) {
          val = { val: val }
        }
        val[this.config.axis] = delta
      }
      return getPropertyValue.call(this, val, event, parent, key, escape)
    },
    addNewProperty (key, val, property, event, escape) {
      var ret = addNewProperty.apply(this, arguments)
      var elem = this[key]
      if (elem instanceof Element) {
        let switcherNode = this.getNode()
        if (switcherNode) {
          // animate old elements
          let width = switcherNode.clientWidth
          let direction = this.__direction
          let axis = this.config.axis
          this.each(function (child, key) {
            if (child !== elem) {
              child.setKey(axis, -width * direction, event)
              let store = child.storeContext()
              let node = child.getNode()
              let remove = function () {
                child.applyContext(store)
                child.remove()
              }
              node.addEventListener(`${prefix}TransitionEnd`, remove)
              node.addEventListener('transitionend', remove)
            }
          }, function (prop) {
            return prop instanceof Element
          })
          elem.setKey(axis, 0, event)
          this.set({
            previous: this.current && this.current.val,
            current: key
          })
        }
      }
      return ret
    },
    makeKey (data) {
      if (typeof data === 'string') {
        return data
      }
      let key = data.key || cnt++
      if (this.properties[key]) {
        return key
      } else {
        key = data.path.join('-')
        return this[key] ? key + '#' + cnt++ : key
      }
    },
    getDirection (val) {
      let direction = -1
      return (this.__direction = direction)
    }
  }
}).Constructor

// function isBack (previous, current, next) {
//   if (next === previous) {
//     return true
//   } else if (typeof current === 'object' && typeof next === 'object') {
//     let currNumber = current.number
//     if (currNumber) {
//       let nextNumber = next.number
//       if (nextNumber) {
//         return currNumber.val > nextNumber.val
//       }
//     }
//     return next.index < current.index ||
//       current.path.join('.').indexOf(next.path.join('.')) === 0
//   }
// }
