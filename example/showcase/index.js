'use strict'
var Element = require('vigour-element')
var Observable = require('vigour-js/lib/observable')

Observable.prototype.inject(require('vigour-js/lib/operator/add'))
Observable.prototype.inject(require('vigour-js/lib/operator/subscribe'))
Observable.prototype.inject(require('vigour-js/lib/operator/transform'))



require('./style.less')

var data = new Observable({
  listitems: {
    items: [{
      title: 'one thing',
      subtitle: 'subsubsubsubs11'
    }, {
      title: 'two thing',
      subtitle: 'subsubsubsubs22'
    }, {
      title: 'three thing',
      subtitle: 'subsubsubsubs33'
    }, {
      title: 'four thing',
      subtitle: 'subsubsubsubs44'
    }, {
      title: 'five thing',
      subtitle: 'subsubsubsubs55'
    }]
  },
  listitems2: {
    items: [
      'one thing2222222222',
      'two thing2222222222',
      'three thing2222222222',
      'four thing2222222222',
      'five thing2222222222'
    ]
  },
  defaultText: 'The'
})

window.data = data

var app = new Element({
  val: data,
  node: document.body
})

// setInterval(function () {
//   data.listitems.items.each(function(prop){
//     prop.remove()
//     return true
//   })
//   data.listitems2.items.set({
//     [Math.random()]: Math.random()
//   })
// }, 2000)

var Input = require('~/lib').Input

app.set({
  header: require('./components/header'),
  container: {
    css: 'main',
    ChildConstructor: new Element({
      titlefield: new Input({
        $: 'title'
      }),
      subtitlefield: new Input({
        $:'subtitle'
      })
    }).Constructor,
    $: 'listitems.items'
  },
  things:{
    ChildConstructor:new Element({
      text:{
        $:'title.upward.listitems.items.0.title'
      }
    }).Constructor,
    $:'listitems.items'
  }
})


window.app = app

// console.log('=====>', app.container._cache[0])
// data.listitems.items[1].title.val = 'smurk'

// app.container._cache[0].set({
//   $subscribe:data.listitems.items[0].title
//   })
