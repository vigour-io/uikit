'use strict'
require('./style.less')

var app = global.app = require('vigour-element/lib/app')
var Carousel = require('../../lib/component/carousel')
// var Observable = require('vigour-js/lib/observable')
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

// var carousel = new Carousel({
//   $: true,
//   items: {
//     ChildConstructor: new Element({
//       $: 'number',
//       text: {
//         $: true
//       }
//     }),
//     $collection: true
//   }
// })

var carousel = new Carousel({
  $: true,
  items: {
    ChildConstructor: new Element({
      text () {
        return this.parent.key
      }
    }),
    one: {},
    two: {},
    three: {},
    four: {}
  }
})

app.set({
  holder: {
    $: true,
    carousel: carousel
  },
  left: {
    node: 'button',
    text: 'left',
    on: {
      click () {
        this.parent.holder.carousel.moveLeft()
      }
    }
  },
  right: {
    node: 'button',
    text: 'right',
    on: {
      click () {
        this.parent.holder.carousel.moveRight()
      }
    }
  },
})

setTimeout(function () {
  // app.holder.val = hub.get('shows.195.seasons', {})
})

// setInterval(function () {
//   data.current.val = new Observable({
//     key: Math.random(),
//     title: Math.random()
//   })
// }, 500)
