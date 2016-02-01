'use strict'
require('vigour-scratch')
require('./style.less')

var Element = require('../../element')
var Observable = require('vigour-js/lib/observable')

module.exports = new Element({
  inject: [
    require('vigour-element/lib/event/drag'),
    require('vigour-element/lib/event/up')
  ],
  css: 'ui-carousel',
  items: {
    properties: {
      __focused: true,
      __margin: true,
      __index: true
    },
    on: {
      property: {
        prepCarousel
      }
    },
    css: '',
    x: 0
  },
  properties: {
    __current: true,
    __start: true,
    __childwidth: true,
    __correction: true
  },
  __current: 0,
  on: {
    down: {
      prepMove
    },
    drag: {
      carousel (e) {
        var x = e.x - this.__start
        var items = this.items
        if (this.__correction <= x) {
          x = x - this.__childwidth
          this.__start = e.x - x
          let firstindex
          let lastchild
          let lastindex
          let firstchild
          items.each(function (prop, key) {
            let index = prop.order.val
            if (lastindex === void 0 || index > lastindex) {
              lastindex = index
              lastchild = prop
            }
            if (firstindex === void 0 || index < firstindex) {
              firstindex = index
              firstchild = prop
            }
          }, isElement)
          lastchild.order.set(firstindex - 1)
          items.__current = firstindex + 1
          items.__focused.focused.set(false)
          items.__focused = firstchild
          firstchild.focused.set(true)

        } else if ((this.__correction + x) <= 0) {

          x = x + this.__childwidth
          this.__start = e.x - x
          let firstindex
          let thirdindex
          let firstchild
          let lastindex
          items.each(function (prop, key) {
            let index = prop.order.val
            if (lastindex === void 0 || index > lastindex) {
              lastindex = index
            }
            if (firstindex === void 0 || index < firstindex) {
              firstindex = index
              firstchild = prop
            }
          }, isElement)

          let thirdchild = items.each(function (prop, key) {
            let index = prop.order.val
            if (index === firstindex + 2) {
              thirdindex = index
              return prop
            }
          }, isElement)

          firstchild.order.set(this.__current = lastindex + 1)

          items.__current = thirdindex
          items.__focused.focused.set(false)
          items.__focused = thirdchild

          thirdchild.focused.set(true)
        }
        items.x.set(x)
        e.preventDefault()
      }
    },
    dragend: {
      carousel () {
        var items = this.items
        items._csscache = null
        items.set({
          css: {
            add: 'animate'
          },
          // x: x > treshold ? delta : x < -treshold ? -delta : 0
          x: 0
        })
      }
    }
  }
}).Constructor

function prepMove (e, event) {
  var items = this.items
  items._csscache = null
  items.css.set({remove: 'animate'})
  this.__start = ~~(e.x - items.x.val)
  this.__childwidth = items.firstChild().getNode().offsetWidth
  this.__correction = ~~(items.__margin * this.getNode().offsetWidth)
}

function isElement (prop) {
  return prop instanceof Element
}

function prepCarousel (data, event) {
  let node = this.getNode()
  if (node) {
    let cnt = 0
    let last
    let first

    this.each(function (prop, key) {
      if (!first) {
        first = prop
      }
      prop.setKey('order', ++cnt)
      prop.setKey('focused', {
        val: false,
        on: {
          value: {
            carousel (data) {
              
            }
          }
        }
      })
      last = prop
    }, isElement)

    // if (cnt === 1 || cnt === 2) {
    //   this.setKey('add1', new first.Constructor(), event)
    //   this.setKey('add2', new last.Constructor(), event)
    // }

    first.setKey('focused', true)
    last.setKey('order', 0)

    this.__focused = first

    let width = node.offsetWidth
    let childwidth = last.getNode().offsetWidth

    let perc = (childwidth / width * 3 - 1) * 50
    node.style.marginLeft = -perc + '%'
    this.__margin = perc / 100

    this.css.set('animate')
  } else {
    global.requestAnimationFrame(() => {
      prepCarousel.apply(this, arguments)
    })
  }
}
