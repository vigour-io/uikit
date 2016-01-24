'use strict'
require('vigour-scratch')
require('./style.less')

var Element = require('../../element')
var addNewProperty = Element.prototype.addNewProperty
var Observable = require('vigour-js/lib/observable')

module.exports = new Element({
  inject: [
    require('vigour-element/lib/event/drag'),
    require('vigour-element/lib/event/up')
  ],
  css: 'ui-carousel',
  properties: {
    __start: true,
    __current: true,
    __currentwidth: true
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
        var carouselwidth = carouselrect.width
        var farright = carouselwidth
        var leftobj = {}
        var rightobj = {}
        var leftlength = 0
        var rightlength = 0
        var farleft = 0

        this.__start = e.x - correction
        items._csscache = null

        items.each((prop) => {
          var rect = prop.getNode().getBoundingClientRect()
          var left = rect.left - itemsleft
          if (left < 0) {
            if (left < farleft) {
              farleft = left
            }
            leftobj[~~left + 100000] = {
              prop: prop,
              rect: rect
            }
            leftlength++
          } else {
            var right = rect.right - itemsleft
            if (right > carouselwidth) {
              if (right > farright) {
                farright = right
              }
              rightobj[~~left] = {
                prop: prop,
                rect: rect
              }
              rightlength++
            } else {
              this.__currentwidth = rect.width
            }
          }
          prop.setKey('x', left, event)
        }, isElement)

        var delta = ~~((leftlength - rightlength) / 2)
        var item
        if (delta > 0) {
          // add some to the right
          for (var i in leftobj) {
            if (delta--) {
              item = leftobj[i]
              item.prop.setKey('x', farright)
              farright += item.rect.width
            } else {
              break
            }
          }
        } else if (delta < 0) {
          var keys = Object.keys(rightobj)
          for (var k = rightlength - 1; k >= 0; k--) {
            if (delta++) {
              item = rightobj[keys[k]]
              farleft -= item.rect.width
              item.prop.setKey('x', farleft)
            } else {
              break
            }
          }
        }

        items.x.set(correction)
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
    css: 'animate untouched',
    x: 0
  }
}).Constructor

function isElement(prop) {
  return prop instanceof Element
}
