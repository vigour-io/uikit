var Element = require('vigour-element')

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
 * var Icon = require('vigour-uikit/lib/icon')
 * var a = new Icon('sun')
 *
 * @example ```less
 * // less
 * .icon.sun:before {
 *   content: "\e600"
 * }
 * ```
 */

module.exports = new Element({
  inject: require('vigour-element/lib/property/css'),
  node: 'i',
  on: {
    data: function ( event ) {
      this.setKey('css', {
        val: 'icon ' + this.val
      })
    }
  }
}).Constructor
