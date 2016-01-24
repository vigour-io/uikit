'use strict'
require('vigour-scratch')
require('./style.less')

var Element = require('../../element')

module.exports = new Element({
  inject: [
    require('vigour-element/lib/event/drag'),
    require('vigour-element/lib/event/up')
  ],
  css: 'ui-carousel',
  properties: {
    __start: true,
    __current: true,
    __currentwidth: true,
    __length: true
  },
  on: {
    down: {
      carousel (e, event) {
        var items = this.items
        
        items.css.set('', event)

        var carouselrect = this.getNode().getBoundingClientRect()
        var itemsrect = items.getNode().getBoundingClientRect()
        var itemsx = items.x.val
        var itemsleft = itemsrect.left - itemsx
        var correction = itemsleft - carouselrect.left
        var obj = {}

        var length = 0

        items.each((prop) => {
          var rect = prop.getNode().getBoundingClientRect()
          this.__currentwidth = rect.width
          obj[~~rect.left] = prop
          length++
        }, isElement)

        this.__length = length

        var cnt = 0
        var start = 0
        for (var i in obj) {
          if (++cnt === length) {
            obj[i].setKey('order', -1, event)
            items.x.set(start = -this.__currentwidth)
          } else {
            obj[i].setKey('order', cnt, event)
          }
        }

        this.__start = e.x - start - correction
        items._csscache = null
      }
    },
    drag: {
      carousel (e) {
        e.preventDefault()
        this.items.x.set(e.x - this.__start)
      }
    },
    dragend: {
      carousel () {
        var items = this.items
        var x = items.x.val
        var delta = this.__currentwidth
        var treshold = 50 //delta / 2
        items._csscache = null
        if (x > treshold) {
          items.x.set(delta)
        } else if (x < -treshold) {
          items.x.set(-delta)
        } else {
          items.x.set(0)
        }
        items.css.set('animate')
      }
    }
  },
  items: {
    css: 'animate',
    // css: 'animate',
    x: 0
  }
}).Constructor

function isElement(prop) {
  return prop instanceof Element
}
