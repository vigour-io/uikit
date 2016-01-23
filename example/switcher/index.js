'use strict'
require('./style.less')

var app = require('vigour-element/lib/app')
var Switcher = require('../../lib/switcher')
var Observable = require('vigour-js/lib/observable')
var Element = require('vigour-element')

var carousel = new Switcher({
  // ChildConstructor: new Element({
  //   $:true,
  //   text: {
  //     $: 'title'
  //   }
  // }),
  properties: {
    0: new Element({
      $:true,
      text: {
        $: 'title'
      }
    }),
    1: new Element({
      $:true,
      text: {
        $: 'title'
      }
    }),
    2: new Element({
      $:true,
      text: {
        $: 'title'
      }
    }),
    3: new Element({
      $:true,
      text: {
        $: 'title'
      }
    })
  }
})

global.app = app.set({
  carousel: carousel
})

// setInterval(function () {
//   let key = Math.random()
//   app.carousel.setKey(key, new Element({
//     text: key
//   }))
// }, 500)
setInterval(function () {
  let key = Math.random()
  var obs = new Observable({
    // key: Math.random(),
    nested: {
      title: key
    }
  })
  // app.carousel.setKey('next', obs.nested)
  app.carousel.setKey(Math.random(), {
    text: 'flups'
  })
}, 1000)
