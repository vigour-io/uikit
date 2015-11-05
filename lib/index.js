'use strict'

require('vigour-scratch/index.less')

var Element = require('vigour-element')
var Observable = require('vigour-js/lib/observable')

Element.prototype.inject(
  require('vigour-element/lib/property/text'),
  require('vigour-element/lib/property/transform'),
  require('vigour-element/lib/property/css'),
  require('vigour-element/lib/property/attributes'),
  require('vigour-element/lib/events/render')
)

// exports.Header = {}

// for (let i = 1; i <= 6; i += 1) {
//   exports.Header[i] = new Element({
//     node: 'h' + i,
//     css: 'ui-header'
//   }).Constructor
// }

// exports.Topbar = new Element({
//   css: 'topbar'
// }).Constructor


// exports.Dl = new Element({
//   node: 'dl',
//   css: 'ui-dl',
//   term: {
//     node: 'dt'
//   },
//   def: {
//     node: 'dd',
//     text: 'boom!'
//   }
// }).Constructor

// function setLabel () {
//   if (!this.label.text) {
//     this.label.set({
//       text: this.key
//     })
//   }
// }

// exports.Badge = new Element({
//   css: 'ui-badge',
//   on: {
//     parent: {
//       label: setLabel
//     }
//   },
//   label: {},
//   message: {}
// }).Constructor

// exports.InputBadge = new Element({
//   css: 'ui-badge input',
//   on: {
//     parent: {
//       label: setLabel
//     }
//   },
//   label: {},
//   message: {
//     css: 'message animation',
//     node: 'textarea',
//     attributes: {
//       wrap: 'off'
//     },
//     text: {
//       on: {
//         data: {
//           resize (data) {
//             // use property on observable timer (store on obs remove on remove)
//             var node = this.parent.node
//             node.style.width = '0px'
//             var sw = node.scrollWidth
//             node.style.width = (sw) + 'px'
//             if (data && sw < 10) {
//               setTimeout(() => {
//                 this._on.data.fn.resize.call(this)
//               }, 100)
//             }
//           }
//         }
//       }
//     },
//     on: {
//       keyup () {
//         this.text.origin.val = this.node.value
//       }
//     }
//   }
// }).Constructor

// exports.Stat = new Element({
//   properties: {
//     status: new Observable({
//       on: {
//         data () {
//           this.parent.oval.inner.set({
//             css: 'inner ' + this.val
//           })
//         }
//       }
//     })
//   },
//   css: 'ui-stat',
//   counter: {},
//   title: {
//     text: 'Counter'
//   },
//   oval: {
//     inner: {}
//   }
// }).Constructor

// // exports.List = new Element({
// //   properties: {
// //     status: new Observable({
// //       on: {
// //         data () {
// //           this.parent.oval.inner.set({
// //             css: 'inner ' + this.val
// //           })
// //         }
// //       }
// //     })
// //   },
// //   css: 'ui-stat',
// //   counter: {},
// //   title: {
// //     text: 'Counter'
// //   },
// //   oval: {
// //     inner: {}
// //   }
// // }).Constructor

// // this.title.text.val = this.key