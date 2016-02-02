'use strict'
require('./style.less')

var app = require('vigour-element/lib/app')
var Switcher = require('../../lib/component/switcher')
var Observable = require('vigour-js/lib/observable')
var Element = require('vigour-element')

var carousel = new Switcher({
  $: true,
  ChildConstructor: new Element({
    $: true,
    text: {
      $: 'title'
    }
  }),
  next: {
    $: 'current'
  }
})

var data = new Observable({
  current: {
    // title:'smurr'
  }
})

global.app = app.set({
  holder: {
    $: true,
    carousel: carousel,
    val: data
  }
})

setInterval(function () {
  data.current.val = new Observable({
    key: Math.random(),
    title: Math.random()
  })
}, 500)

// setInterval(function () {
//   let key = Math.random()
//   var obs = new Observable({
//     // key: Math.random(),
//     nested: {
//       title: key
//     }
//   })
//   // app.carousel.setKey('next', obs.nested)
//   app.carousel.setKey(Math.random(), {
//     text: 'flups'
//   })
// }, 1000)
