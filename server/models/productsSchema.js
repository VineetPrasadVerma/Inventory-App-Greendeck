const mongoose = require('mongoose')

const productsSchema = new mongoose.Schema({
  id: {
    type: Object
  },
  name: {
    type: String
  },
  sku: {
    type: String
  },
  url: {
    type: String
  },
  brand: {
    name: {
      type: String,
      default: ''
    },
    sub_brand: {
      type: String,
      default: ''
    }
  },

  media: {
    type: Object
  },
  meta: {
    type: Object
  },
  price: {
    offer_price: {
      currency: {
        type: String,
        default: ''
      },
      value: {
        type: Number,
        default: 0
      }
    },
    regular_price: {
      currency: {
        type: String,
        default: ''
      },
      value: {
        type: Number,
        default: 0
      }
    },
    basket_price: {
      currency: {
        type: String,
        default: ''
      },
      value: {
        type: Number,
        default: 0
      }
    }
  },

  website_id: {
    type: Object
  },

  description_text: {
    type: String
  },
  spider: {
    type: String
  },
  stock: {
    available: {
      type: Boolean,
      default: false
    }
  },
  classification: {
    type: Object
  },
  created_at: {
    date: {
      type: String,
      default: ''
    }
  },
  updated_at: {
    type: Object
  },
  similar_products: {
    type: Object
  },
  positioning: {
    type: Object
  },
  lv_url: {
    type: String
  },
  price_Changes: {
    type: Array
  },
  price_positioning: {
    type: Number
  },
  price_positioning_text: {
    type: String
  }

})

module.exports = mongoose.model('Product', productsSchema)
