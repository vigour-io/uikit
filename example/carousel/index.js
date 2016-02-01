'use strict'
require('./style.less')

var app = global.app = require('vigour-element/lib/app')
var Carousel = require('../../lib/component/carousel')
// var Observable = require('vigour-js/lib/observable')
var Hub = require('vigour-hub')
var Element = require('vigour-element')

var hub = require('vigour-play/lib/app/hub')
hub.set({
  adapter: {
    // websocket: 'wss://mtv-fire.vigour.io',
    // websocket: 'ws://jim.local:3031',
    // websocket: 'wss://mtv-fire.vigour.io',
    // websocket: 'ws://marcus.local',
    websocket: 'ws://youzi.local:3031',
    // websocket: 'ws://nika.local:80',
    on: {
      error (err) {
        console.log('hub - error', err)
      },
      connect () {
        console.log('connecs!')
      }
    }
  }
})

var carousel = new Carousel({
  $: true,
  items: {
    ChildConstructor: new Element({
      $: 'title',
      text: {
        $: true
      }
    }),
    $collection: true
  }
})

app.set({
  holder: {
    $: true,
    carousel: new Carousel({
      $: true,
      items: {
        ChildConstructor: new Element({
          $: 'title',
          text: {
            $: true
          }
        }),
        $collection: true
      }
    })
  }
})

setTimeout(function () {
  app.holder.val = hub.get('discover.carousel', {})
})

// setInterval(function () {
//   data.current.val = new Observable({
//     key: Math.random(),
//     title: Math.random()
//   })
// }, 500)
