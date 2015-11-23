'use strict'

require('./style.less')

var Observable = require('vigour-js/lib/observable')
var Element = require('vigour-element')
var ui = require('~/lib')

const BASE_FONT_SIZE = 10
const HEADER_TEXT = 'The quick brown fox jumps over the lazy dog.'

var headings = []
var sizes = [3.2, 2.4, 2, 1.8, 1.6, 1.4, 1.3, 1.2, 1.1, 1]

for (let i = 0; i < 10; i++) {
  headings[i] = new Element({
    caption: {
      node: 'span',
      text: `h${i + 1} - ${ parseInt(sizes[i] * BASE_FONT_SIZE, 10) }px`
    },
    header: new ui[`H${i + 1}`](HEADER_TEXT)
  })
}

var Headers = new Element(headings).Constructor

Element.prototype.inject(
  require('vigour-element/lib/property/text'),
  require('vigour-element/lib/property/transform'),
  require('vigour-element/lib/property/css'),
  require('vigour-element/lib/property/attributes')
)

module.exports = exports = new Element({
  title: new ui.H3('Typography:'),
  node: 'section',

  sansSerif: {
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
  },

  hr: new ui.Hr({
    css: {
      addClass: 'double'
    }
  }),

  serif: {
    family: {
      title: 'Serif',
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
  },

  hr2: new ui.Hr({
    css: {
      addClass: 'double'
    }
  }),

  monospace: {
    family: {
      title: 'Monospace',
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
  }
})
