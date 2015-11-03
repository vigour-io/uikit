var Element = require('element')

require('vigour-scratch/lib/config/icons.less')
require('./style.less')

/**
 * Icon component, which works with Less to inject `font` icon.
 * @function Icon
 * @param {string} iconName - Name of icon in less file
 * @param {string} [family=vui] - Font family
 * @memberOf Component
 *
 * @example
 * var Icon = require('vui/lib/components/icon')
 * var a = new Icon('sun')
 *
 * @example ```less
 * // less
 * font-face {
 *   font-family: "vui"
 *   src: url('icons/icomoon.eot?ypcv2b')
 *   // ...
 * }
 * .icon {
 *   font-family: "vui"
 *
 *   &.cloud:before {
 *     content: "\e600"
 *   }
 * }
 * ```
 */

module.exports = new Element({
  inject: require('element/lib/property/css'),
  node: 'i',
  on: {
    data: function ( event ) {
      this.setKey('css', {
        val: 'icon ' + this.val
      })
    }
  }
}).Constructor