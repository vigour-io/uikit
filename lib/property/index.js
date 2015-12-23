'use strict'

// dependencies
var Property = require('vigour-element/lib/property')

// shared
var SharedProperty = new Property({
  prefix: 'ui',
  old: {},
  on: {
    value (data, event) {
      let parent = this.parent
      let val = this.val
      if (parent) {
        let oldVal = this.old.val
        let prefix = this.prefix.val
        let element = parent.parent

        element.set({
          css: {
            removeClass: `${prefix}-${oldVal}`,
            addClass: `${prefix}-${val}`
          }
        })
      }
      this.old.set(val, event)
    }
  }
}).Constructor

// addition for scheme property
var SchemeProperty = new SharedProperty({
  prefix: 'ui-scheme'
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

// addition for position property
var FontProperty = new SharedProperty({
  prefix: 'ui-font'
}).Constructor

// addition for hover property
var HoverProperty = new SharedProperty({
  prefix: 'ui-interactive ui-hover'
}).Constructor

// addition for hover property
var AnimationProperty = new SharedProperty({
  prefix: 'ui-animate ui'
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
      scheme: SchemeProperty,

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
       * Specific font
       * @example
       * ui: {
       *   font: 'bold'
       * }
       */
      font: FontProperty,

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
          value (data) {
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
       * Disable class for element and remove interactivity
       * @example
       * ui: {
       *   disable: true
       * }
       */
      disabled: new Property({
        on: {
          value () {
            var element = this.parent.parent
            var val = this.val
            if (val) {
              element.set({
                css: {
                  addClass: 'ui-disabled',
                  removeClass: 'ui-interactive'
                }
              })
            } else {
              if (element.ui && element.ui.interactive) {
                element.set({
                  css: {
                    addClass: 'ui-interactive',
                    removeClass: 'ui-disabled'
                  }
                })

                return
              }

              element.set({
                css: {
                  removeClass: 'ui-disabled'
                }
              })
            }
          }
        }
      }),

      /**
       * Inverse colorset
       * @example
       * ui: {
       *   inverse: true
       * }
       */
      inverse: new Property({
        on: {
          value () {
            var element = this.parent.parent
            var val = this.val

            if (val) {
              element.set({
                css: {
                  addClass: 'ui-inverse'
                }
              })
            } else {
              element.set({
                css: {
                  removeClass: 'ui-inverse'
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
      hover: HoverProperty,

      /**
       * Animation effects
       * @example
       * ui: {
       *   animate: 'fade-in-down'
       * }
       */
      animate: AnimationProperty
    }
  })
}
