'use strict'

// dependencies
var Property = require('vigour-element/lib/property')

// shared
var SharedProperty = new Property({
  prefix: 'ui',
  on: {
    new () {
      this.set({
        old: this.val
      })
    },
    data (data, event) {
      if (!this.parent) return

      var element = this.parent.parent

      var val = this.val
      var oldVal = this.old.val

      var prefix = this.prefix.val

      element.set({
        css: {
          removeClass: `${prefix}-${oldVal}`,
          addClass: `${prefix}-${val}`
        }
      })

      oldVal = val
    }
  }
}).Constructor

// addition for color property
var ColorProperty = new SharedProperty({
  prefix: 'ui-color'
}).Constructor

// addition for background property
var BackgroundProperty = new SharedProperty({
  prefix: 'ui-background'
}).Constructor

// addition for position property
var PositionProperty = new SharedProperty({
  prefix: 'ui-position'
}).Constructor

// addition for hover property
var HoverProperty = new SharedProperty({
  prefix: 'ui-interactive ui-hover'
}).Constructor

exports.properties = {
  /**
   * Use specific properties for UI classes.
   * Please use it without 'ui-' prefix.
   * It applies as `ui-{propertyname}` by default.
   */
  ui: new Property({
    properties: {
      /**
       * Name of component
       * @example
       * ui: {
       *   name: 'select'
       * }
       */
      name: SharedProperty,

      /**
       * Color classes. It applies as `ui-color-{colorname}`
       * @example
       * ui: {
       *   color: 'primary'
       * }
       */
      color: ColorProperty,

      /**
       * Background classes. It applies as `ui-background-{colorname}`
       * @example
       * ui: {
       *   scheme: 'primary'
       * }
       */
      background: BackgroundProperty,

      /**
       * Color specific classes
       * @example
       * ui: {
       *   scheme: 'primary'
       * }
       */
      scheme: SharedProperty,

      /**
       * Size specific classes
       * @example
       * ui: {
       *   size: 'large'
       * }
       */
      size: SharedProperty,

      /**
       * Position specific classes
       * @example
       * ui: {
       *   position: 'vertically-center'
       * }
       */
      position: PositionProperty,

      /**
       * Specific type
       * @example
       * ui: {
       *   type: 'iconic'
       * }
       */
      type: SharedProperty,

      /**
       * State specific classes
       * @example
       * ui: {
       *   state: 'dirty'
       * }
       */
      state: SharedProperty,

      /**
       * State specific classes
       * @example
       * ui: {
       *   atomic: 'molecule'
       * }
       */
      atomic: SharedProperty,

      /**
       * Text alignment
       * @example
       * ui: {
       *   atomic: 'molecule'
       * }
       */
      align: SharedProperty,

      /**
       * Set if it belongs to specific group of components
       * @example
       * ui: {
       *   childOf: 'form-element'
       * }
       */
      childOf: SharedProperty,

      /**
       * Set hover and focus effects by adding interactivity
       * @example
       * ui: {
       *   interactive: true
       * }
       */
      interactive: new Property({
        on: {
          data () {
            var element = this.parent.parent
            var val = this.val

            if (val) {
              element.set({
                css: {
                  addClass: 'ui-interactive'
                }
              })
            } else {
              element.set({
                css: {
                  removeClass: 'ui-interactive'
                }
              })
            }
          }
        }
      }),

      /**
       * Hover effects
       * @example
       * ui: {
       *   hover: 'zoom-in'
       * }
       */
      hover: HoverProperty
    }
  })
}
