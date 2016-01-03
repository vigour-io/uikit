var Element = require('vigour-element')
var ui = require('../../../../lib')
var Headers = require('./headers')

module.exports = new Element({
  family: {
    title: 'Sans Serif',
    list: new ui.List('a')
  },
  headings: new Headers({}),
  weight: {
    node: 'section',
    slim: {
      caption: {
        text: 'slim'
      },
      example: {
        css: 'ui-h2 ui-slim',
        text: 'The'
      }
    },
    light: {
      caption: {
        text: 'light'
      },
      example: {
        css: 'ui-h2 ui-light',
        text: 'The'
      }
    },
    regular: {
      caption: {
        text: 'regular'
      },
      example: {
        css: 'ui-h2 ui-regular',
        text: 'The'
      }
    },
    semibold: {
      caption: {
        text: 'semibold'
      },
      example: {
        css: 'ui-h2 ui-semibold',
        text: 'The'
      }
    },
    bold: {
      caption: {
        text: 'bold'
      },
      example: {
        css: 'ui-h2 ui-bold',
        text: 'The'
      }
    },
    extrabold: {
      caption: {
        text: 'extrabold'
      },
      example: {
        css: 'ui-h2 ui-extrabold',
        text: 'The'
      }
    }
  },
  styles: {
    node: 'section',
    italic: {
      caption: {
        text: 'Italic'
      },
      example: {
        css: 'ui-h2 ui-italic',
        text: 'The'
      }
    },
    underline: {
      caption: {
        text: 'Underline'
      },
      example: {
        css: 'ui-h2 ui-underline',
        text: 'The'
      }
    },
    lineThrough: {
      caption: {
        text: 'Line through'
      },
      example: {
        css: 'ui-h2 ui-line-through',
        text: 'The'
      }
    }
  }
})
