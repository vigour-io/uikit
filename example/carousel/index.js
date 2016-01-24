'use strict'
require('./style.less')

var app = global.app = require('vigour-element/lib/app')
var Switcher = require('../../lib/component/carousel')
var Observable = require('vigour-js/lib/observable')
var Element = require('vigour-element')

var carousel = new Switcher({
  items: {
    // properties: {
    //   2: new Element({
    //     text: 'special'
    //   })
    // },
    ChildConstructor: new Element({
      $: true,
      text: {
        $: 'title'
      }
    }),
    $collection: true
  }
})

var data = new Observable({
  1: {
    title: 'one'
  },
  2: {
    title: 'two'
  },
  3: {
    title: 'three'
  },
  4: {
    title: 'four'
  },
  5: {
    title: 'five'
  }
})

global.app = app.set({
  holder: {
    $: true,
    carousel: carousel,
    val: data,
    left: {
      node: 'button',
      text: 'left',
      on: {
        click () {
          //left
        }
      }
    },
    right: {
      node: 'button',
      text: 'right',
      on: {
        click () {
          //right
        }
      }
    }
  }
})

// setInterval(function () {
//   data.current.val = new Observable({
//     key: Math.random(),
//     title: Math.random()
//   })
// }, 500)
