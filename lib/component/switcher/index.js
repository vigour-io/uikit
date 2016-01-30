'use strict'
require('./style.less')

var Element = require('vigour-element/lib/app').ChildConstructor
var Base = require('vigour-js/lib/base')
var Observable = require('vigour-js/lib/observable')
var prefix = require('vigour-ua').prefix
var Property = require('vigour-element/lib/property')
var addNewProperty = Element.prototype.addNewProperty
var getPropertyValue = Element.prototype.getPropertyValue
var cnt = 0

module.exports = new Element({
  css: 'ui-page-switcher',
  properties: {
    __prevdata: true,
    __direction: true,
    ready: {
      val: true
    },
    config: new Base({
      properties: {
        direction: true,
        factor: {
          val: 1
        },
        axis: {
          val: 'x'
        }
      }
    }),
    history: Base,
    previous: new Observable({
      val: false,
      on: {
        data (d, event) {
          if (!this.val) {
            this.parent.history.clear()
          }
        }
      }
    }),
    current: new Observable(false),
    next: new Property({
      render (node, event, switcher) {
        var data = this.val
        if (data && !(data instanceof Element)) {
          if (typeof data === 'string' && data.indexOf('smurky') === 0) {
            return
          }
          let key = switcher.makeKey(data)
          if (!switcher[key]) {
            switcher.set({[key]: data})
          } else {
            // switcher.setTransition(key, event, switcher.getDirection(data))
          }
        }
      }
    })
  },
  history: {},
  config: {},
  define: {
    getPropertyValue (val, event, parent, key, escape) {
      if (val) {
        let config = this.config
        if (val instanceof Element) {
          let axis = config.axis
          let delta = axis === 'x'
            ? this.getNode().clientWidth
            : this.getNode().clientHeight

          val.setKey(axis, delta * this.getDirection(val.val), event)
        } else if (!this.properties[key]) {
          let axis = config.axis
          let delta = axis === 'x'
            ? this.getNode().clientWidth
            : this.getNode().clientHeight

          if (val instanceof Observable) {
            val = { val: val }
          }
          val[axis] = delta * this.getDirection(val)
        }
      }
      return getPropertyValue.call(this, val, event, parent, key, escape)
    },
    addNewProperty (key, val, property, event, escape) {
      var ret = addNewProperty.apply(this, arguments)
      this.setTransition(key, event, this.__direction)
      return ret
    },
    setTransition (key, event, direction) {
      var elem = this[key]
      if (elem instanceof Element) {
        let switcherNode = this.getNode()
        if (switcherNode) {
          let axis = this.config.axis
          let delta = axis === 'x'
            ? switcherNode.clientWidth
            : switcherNode.clientHeight

          this.each((child, key) => {
            if (child !== elem) {
              let set = {}
              set[axis] = -delta * direction
              child = child.set(set, event) || child
              let node = child.getNode()
              let store = child.storeContext()
              let remove = function () {
                child.applyContext(store)
                let sw = child.parent
                if (sw) {
                  if (sw.current.val !== child.key) {
                    child.remove()
                  }
                  sw.ready = true
                }
              }
              node.addEventListener(`${prefix}TransitionEnd`, remove)
              node.addEventListener('transitionend', remove)
              this.ready = false
            }
          }, isElement)

          // var store = elem.storeContext()
          // window.requestAnimationFrame(function () {
          //   elem.applyContext(store)
          elem.setKey(axis, 0, event)
          // })

          this.set({
            previous: this.current && this.current.val,
            current: key
          })
        }
      }
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
        return key
      }
    },
    getDirection (val) {
      var configDirection = this.config.direction
      if (configDirection) {
        return (this.__direction = configDirection)
      }
      let data = val.origin || val.val && val.val.origin
      let direction
      if (data) {
        if (data.index) {
          let previous = this.__prevdata
          if (previous && previous.index) {
            let prev = previous.index.val
            let curr = data.index.val
            if (prev > curr) {
              direction = -1
            }
          }
        } else if (data.number) {
          let previous = this.__prevdata
          if (previous && previous.number) {
            let prev = previous.number.val
            let curr = data.number.val
            if (prev > curr) {
              direction = -1
            }
          }
        }
      }
      this.__prevdata = data
      return (this.__direction = direction || 1)
    }
  }
}).Constructor

function isElement (prop) {
  return prop instanceof Element
}
