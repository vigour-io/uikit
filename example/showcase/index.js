'use strict'
var Element = require('vigour-element')
var Observable = require('vigour-js/lib/observable')

Observable.prototype.inject(require('vigour-js/lib/operator/add'))
Observable.prototype.inject(require('vigour-js/lib/operator/subscribe'))
Observable.prototype.inject(require('vigour-js/lib/operator/transform'))

Element.prototype.inject(require('vigour-element/lib/property/style'))

require('./style.less')

var data = new Observable({
  list: [{
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
})


var videoData = new Observable({
  list: [{
    title: 'video 1',
    subtitle: 'subsubsubsubs11'
  }, {
    title: 'video 2',
    subtitle: 'subsubsubsubs22'
  }, {
    title: 'video 3',
    subtitle: 'subsubsubsubs33'
  }, {
    title: 'video 4',
    subtitle: 'subsubsubsubs44'
  }, {
    title: 'video 5',
    subtitle: 'subsubsubsubs55'
  }]
})

window.data = data

var app = new Element({
  node: document.body
})

// setInterval(function () {
//   data.list.each(function(prop){
//     prop.remove()
//     return true
//   })
//   data.list2.set({
//     [Math.random()]: Math.random()
//   })
// }, 2000)

var Input = require('~/lib').Input

var Block = new Element({
  titlefield: new Input({
    $: 'title'
  }),
  subtitlefield: new Input({
    $: 'subtitle'
  })
}).Constructor

var List = new Element({
  ChildConstructor: Block,
  $: 'list'
}).Constructor

app.set({
  // val: data,
  header: require('./components/header'),
  container:new List(data),
  things:new List(data),
  specialVideoSection:new List(videoData)
})


window.app = app

// console.log('=====>', app.container._cache[0])
// data.list[1].title.val = 'smurk'

// app.container._cache[0].set({
//   $subscribe:data.list[0].title
//   })
