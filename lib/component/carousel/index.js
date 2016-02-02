'use strict'
require('vigour-scratch')
require('./style.less')

var Element = require('../../element')
var Icon = require('../icon')

module.exports = new Element({
  inject: [
    require('vigour-element/lib/event/drag'),
    require('vigour-element/lib/event/up')
  ],
  css: 'ui-carousel',
  // arrows: {
  //   css: {
  //     position: 'center-y'
  //   },
  //   Child: {
  //     icon: new Icon({
  //       css: {
  //         color: 'secondary',
  //         inverse: true,
  //         opacity: 'high',
  //         size: 'h2'
  //       }
  //     })
  //   },
  //   left: {
  //     icon: 'left'
  //   },
  //   right: {
  //     icon: 'right'
  //   }
  // },
  items: {
    properties: {
      __currentindex: true,
      __prevfocused: true,
      __fromdrag: true,
      __focused: true,
      __margin: true,
      __index: true
    },
    on: {
      property: {
        prepCarousel
      }
    },
    __currentindex: 1,
    css: 'animate',
    x: 0
  },
  properties: {
    __start: true,
    __childwidth: true,
    __correction: true
  },
  define: {
    moveLeft () {
      let items = this.items
      items.__focused.focusLeft()
    },
    moveRight () {
      let items = this.items
      items.__focused.focusRight()
    }
  },
  on: {
    down: {
      carousel (e, event) {
        var items = this.items
        items.__fromdrag = true
        items._csscache = null
        items.css.set({remove: 'animate'})
        items.__prevfocused = items.__focused
        this.__ex = e.x
        this.__start = ~~(e.x - items.x.val)
        this.__childwidth = items.firstChild().getNode().offsetWidth
        this.__correction = ~~(items.__margin * this.getNode().offsetWidth)
      }
    },
    drag: {
      carousel (e) {
        var x = e.x - this.__start
        var items = this.items
        // if (e.x - this.__ex > 100) {
        //   this.__ex = e.x
        //   x = x - this.__childwidth
        //   this.__start = e.x - x
        //   items.__focused.focusLeft()
        // } else if (e.x - this.__ex < -100) {
        //   this.__ex = e.x
        //   x = x + this.__childwidth
        //   this.__start = e.x - x
        //   items.__focused.focusRight()
        // }
        if (this.__correction <= x) {
          x = x - this.__childwidth
          this.__start = e.x - x
          items.__focused.focusLeft()
        } else if ((this.__correction + x) <= 0) {
          x = x + this.__childwidth
          this.__start = e.x - x
          items.__focused.focusRight()
        }
        items.x.set(x)
        e.preventDefault()
      }
    },
    dragend: {
      carousel () {
        var items = this.items
        items.__fromdrag = false
        items._csscache = null
        items.css.set('animate')
        items.x.set(0)
      }
    }
  }
}).Constructor

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
              if (data) {
                let item = this.parent
                let items = item.parent
                let myindex = item.order.val
                let currentindex = items.__currentindex
                let delta = myindex - currentindex
                let childwidth = item.getNode().offsetWidth
                let obj = {}
                let cnt = 1
                let after
                let prevchild
                let child
                let next
                // make an ordered object
                items.each(function (prop, key) {
                  let index = prop.order.val
                  obj[index] = prop
                }, isElement)

                // for move every child after, the child itself and previous child
                for (let i in obj) {
                  child = obj[i]
                  if (after) {
                    child.order.set(cnt++)
                    obj[i] = null
                    if (!next) {
                      child.css.set({add: 'next', remove: 'previous'})
                      next = true
                    }
                  } else if (child === item) {
                    if (prevchild) {
                      prevchild.css.set({add: 'previous', remove: 'next'})
                      prevchild.order.set(0)
                      obj[i - 1] = null
                    }
                    child.css.set({remove: 'next'})
                    child.css.set({remove: 'previous'})
                    child.order.set(cnt++)
                    obj[i] = null
                    after = true
                  } else {
                    prevchild = child
                  }
                }

                if (!prevchild) {
                  child.css.set({add: 'previous', remove: 'next'})
                  child.order.set(0)
                }

                for (let i in obj) {
                  let child = obj[i]
                  if (child) {
                    child.order.set(cnt++)
                  } else {
                    break
                  }
                }
                if (!items.__fromdrag) {
                  items = items.set({
                    css: {
                      remove: 'animate'
                    },
                    x: childwidth * delta
                  }) || items


                  window.requestAnimationFrame(function () {
                    window.requestAnimationFrame(function () {
                      items.__csscache = null
                      items.css.set({add: 'animate'})
                      items.x.set(0)
                    })
                  })
                }
                items.__currentindex = 1
                items.__focused = item
              }
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
    this.__fromdrag = true
    first.setKey('focused', true)
    this.__fromdrag = false
    last.setKey('order', 0)

    this.__focused = first

    let width = node.offsetWidth
    let childwidth = last.getNode().offsetWidth

    let perc = (childwidth / width * 3 - 1) * 50
    node.style.marginLeft = -perc + '%'
    this.__margin = perc / 100

    this.css.set('animate')

    if (!this.mql) {
      this.mql = window.matchMedia('all and (max-width:  767px )')
      let store = this.storeContext()
      var handleResize = () => {
        this.applyContext(store)
        prepCarousel.apply(this, arguments)
      }
      // add resize listener
      this.mql.addListener(handleResize)
    }

  } else {
    let store = this.storeContext()
    global.requestAnimationFrame(() => {
      this.applyContext(store)
      prepCarousel.apply(this, arguments)
    })
  }
}


