'use strict'
var Element = require('vigour-element')

/**
 * List
 * @memberOf UIKit
 */

// ul
module.exports = new Element({
  node: 'ul',
  ChildConstructor: new Element({
  	inject: [
  	  require('vigour-element/lib/property/text'),
  		require('vigour-element/lib/property/css')
  	],
    node: 'li',
    text: { 
    	inject:require('vigour-js/lib/operator/subscribe'),
    	$: 'parent'
    }
  }).Constructor
}).Constructor
