const Product = require('../models/productsSchema')

// Get Products from DB
const getProducts = async (req, res) => {
  try {
    // const products = await Product.find({})
    const products = [{ id: { oid: '5da822166504fb65da005a59' }, name: 'Prada  Feather-embellished silk-twill robe  ', sku: '1000954', url: 'https://www.net-a-porter.com/gb/en/product/1000954/prada/feather-embellished-silk-twill-robe', brand: { name: 'prada', sub_brand: '' }, media: { standard: [{ order: 1, url: 'http://cache.net-a-porter.com/images/products/1000954/1000954_in_pp.jpg' }, { order: 2, url: 'http://cache.net-a-porter.com/images/products/1000954/1000954_ou_pp.jpg' }, { order: 3, url: 'http://cache.net-a-porter.com/images/products/1000954/1000954_fr_pp.jpg' }, { order: 4, url: 'http://cache.net-a-porter.com/images/products/1000954/1000954_bk_pp.jpg' }, { order: 5, url: 'http://cache.net-a-porter.com/images/products/1000954/1000954_cu_pp.jpg' }, { order: 6, url: 'http://cache.net-a-porter.com/images/products/1000954/1000954_e1_pp.jpg' }, { order: 7, url: 'http://cache.net-a-porter.com/images/products/1000954/1000954_ou_pp.jpg' }], thumbnail: [{ order: 1, url: 'https://cache.net-a-porter.com/images/products/1000954/1000954_in_xs.jpg' }] }, meta: { breadcrumbs: { 1: 'Clothing ', 2: ' Jackets ', 3: ' Statement' }, bert_original_classification: { l1: 'clothing', l2: 'nightwear', l3: '', l4: '' }, reference: '' }, websiteid: { oid: '5da6d40110309200045874e6' }, price: { offer_price: { currency: 'GBP', value: 1160.0 }, regular_price: { currency: 'GBP', value: 1160.0 }, basket_price: { value: 1160.0, currency: 'GBP' } }, description_text: 'Gray and black silk-twill, black feathers Slips on  100% silk; trim: 100% feathers (Turkey, Ostrich) Dry clean  Feathers: South Africa  Made in Italy', spider: 'netaporter_gb_pv', stock: { available: false }, classification: { l1: 'clothing', l2: 'nightwear', l3: '', l4: '' }, created_at: { date: '2019-10-21T00:00:00.000Z' }, updated_at: { date: '2020-01-18T06:04:52.517Z' }, similar_products: { meta: { total_results: 1, min_price: { regular: 1160.0, offer: 1160.0, basket: 1165.0 }, max_price: { regular: 1160.0, offer: 1160.0, basket: 1165.0 }, avg_price: { regular: 1160.0, offer: 1160.0, basket: 1165.0 }, avg_discount: 0.0 }, website_results: { '5da94f4e6d97010001f81d72': { meta: { total_results: 0, min_price: { regular: 0.0, offer: 0.0, basket: 0.0 }, max_price: { regular: 0.0, offer: 0.0, basket: 0.0 }, avg_price: { regular: 0.0, offer: 0.0, basket: 0.0 }, avg_discount: 0.0 }, knn_items: [] }, '5da94f270ffeca000172b12e': { meta: { total_results: 0, min_price: { regular: 0.0, offer: 0.0, basket: 0.0 }, max_price: { regular: 0.0, offer: 0.0, basket: 0.0 }, avg_price: { regular: 0.0, offer: 0.0, basket: 0.0 }, avg_discount: 0.0 }, knn_items: [] }, '5d0cc7b68a66a100014acdb0': { meta: { total_results: 1, min_price: { regular: 1160.0, offer: 1160.0, basket: 1165.0 }, max_price: { regular: 1160.0, offer: 1160.0, basket: 1165.0 }, avg_price: { regular: 1160.0, offer: 1160.0, basket: 1165.0 }, avg_discount: 0.0 }, knn_items: [{ _index: 'combined_products_vectorized_ranknet_3ir_nlp', _type: '_doc', id: '5d49e4b8a3ecbbd90d650f49', _score: 1, _source: { name: 'embellished cuff robe coat', url: 'https://www.farfetch.com/uk/shopping/women/prada-embellished-cuff-robe-coat-item-12602478.aspx?storeid=11240', brand: { name: 'prada', sub_brand: '' }, media: { standard: [{ order: 1, url: 'https://cdn-images.farfetch-contents.com/12/60/24/78/12602478_12198059_600.jpg' }, { order: 2, url: 'https://cdn-images.farfetch-contents.com/12/60/24/78/12602478_12198061_600.jpg' }, { order: 3, url: 'https://cdn-images.farfetch-contents.com/12/60/24/78/12602478_12198062_600.jpg' }, { order: 4, url: 'https://cdn-images.farfetch-contents.com/12/60/24/78/12602478_12198064_600.jpg' }, { order: 5, url: 'https://cdn-images.farfetch-contents.com/12/60/24/78/12602478_12198066_600.jpg' }], thumbnail: [{ order: 1, url: 'https://cdn-images.farfetch-contents.com/12/60/24/78/12602478_12198059_80.jpg' }, { order: 2, url: 'https://cdn-images.farfetch-contents.com/12/60/24/78/12602478_12198061_80.jpg' }, { order: 3, url: 'https://cdn-images.farfetch-contents.com/12/60/24/78/12602478_12198062_80.jpg' }, { order: 4, url: 'https://cdn-images.farfetch-contents.com/12/60/24/78/12602478_12198064_80.jpg' }, { order: 5, url: 'https://cdn-images.farfetch-contents.com/12/60/24/78/12602478_12198066_80.jpg' }], large: [{ order: 1, url: 'https://cdn-images.farfetch-contents.com/12/60/24/78/12602478_12198059_480.jpg' }, { order: 2, url: 'https://cdn-images.farfetch-contents.com/12/60/24/78/12602478_12198061_480.jpg' }, { order: 3, url: 'https://cdn-images.farfetch-contents.com/12/60/24/78/12602478_12198062_480.jpg' }, { order: 4, url: 'https://cdn-images.farfetch-contents.com/12/60/24/78/12602478_12198064_480.jpg' }, { order: 5, url: 'https://cdn-images.farfetch-contents.com/12/60/24/78/12602478_12198066_480.jpg' }] }, meta: { breadcrumbs: { 1: 'home', 2: 'Women', 3: 'Prada', 4: 'Clothing', 5: 'Single Breasted Coats', 6: 'embellished cuff robe coat' }, gender: 'Woman', bert_original_classification: { l1: 'clothing', l2: 'bottomwear', l3: '', l4: '' } }, stock: { available: false }, sku: 12602478, description_text: "Prada's foray into feathers returns for the new season. Embellished with black ostrich feathers at the cuffs, this silver robe coat made from silk, features a notched collar and side pockets. An ideal statement piece for spring.", websiteid: '5d0cc7b68a66a100014acdb0', price: { offer_price: { currency: 'GBP', value: 1160.0 }, regular_price: { currency: 'GBP', value: 1160.0 }, basket_price: { value: 1165.0, currency: 'GBP' } }, sizes: ['M'], spider: 'farfetch_gb_pv', classification: { l1: 'clothing', l2: 'bottomwear', l3: '', l4: '' }, created_at: { date: '2019-08-06T20:36:08.013Z' }, updated_at: { date: '2019-11-20T23:03:38.194Z' }, lv_url: 'https://www.farfetch.com/uk/shopping/women/clothing-1/items.aspx?page=519\u0026view=180', positioning: { page: 519, rank: 13 } } }] }, '5da94ef80ffeca000172b12c': { meta: { total_results: 0, min_price: { regular: 0.0, offer: 0.0, basket: 0.0 }, max_price: { regular: 0.0, offer: 0.0, basket: 0.0 }, avg_price: { regular: 0.0, offer: 0.0, basket: 0.0 }, avg_discount: 0.0 }, knn_items: [] }, '5da94e940ffeca000172b12a': { meta: { total_results: 0, min_price: { regular: 0.0, offer: 0.0, basket: 0.0 }, max_price: { regular: 0.0, offer: 0.0, basket: 0.0 }, avg_price: { regular: 0.0, offer: 0.0, basket: 0.0 }, avg_discount: 0.0 }, knn_items: [] } } }, positioning: { page: 236, rank: 20 }, lv_url: '', price_changes: [{ date: { date: '2019-10-21T00:00:00.000Z' }, previous_offer_price: 1160.0, current_offer_price: 1160.0, previous_regular_price: 1160.0, current_regular_price: 1160.0 }], price_positioning: 0, price_positioning_text: 'expensive' }]
    console.log('Inside')
    return res.status(200).json(products)
  } catch (ex) {
    console.log(ex)
    return res.status(500).json({ message: "Can't get products" })
  }
}

// Filter Products based on filters applied
const filterProducts = async (req, res) => {
  try {
    const filters = req.body.filters
    const params = {}

    // dynamic where clause
    let whereClause = ' function () { return ( '

    for (let index = 0; index < filters.length; index++) {
      if (index !== 0) {
        whereClause += '&&'
      }
      const { key, value, operator } = filters[index]
      // console.log(key)
      if (key === 'discount') {
        // Discount Percentage formula
        const discountPercentage =
          '((((( this.price.regular_price.value - this.price.offer_price.value) / this.price.regular_price.value ) * 100)'

        if (operator === 'between') {
          const [number, otherNumber] = value
          whereClause +=
            discountPercentage +
            '>' +
            number +
            ')) && ' +
            discountPercentage +
            '<' +
            otherNumber +
            '))'
        } else {
          whereClause +=
            discountPercentage +
            operator +
            value +
            '))'
        }
      } else if (key === 'brand') {
        whereClause +=
          '(this.brand.name.toLowerCase().includes("' +
          value.toLowerCase() +
          '"))'
      } else if (key === 'stock_available') {
        whereClause += '(this.stock.available === ' + value + ')'
      } else if (key === 'created_at') {
        const [startDate, endDate] = value

        whereClause +=
          '((this.created_at.date.slice(0,10) > "' +
          startDate +
          '") && (this.created_at.date.slice(0,10) < "' +
          endDate +
          '"))'
      }
    }

    whereClause += ')}'

    params.$where = whereClause

    // Query to DB
    const filteredproducts = await Product.find(params)

    return res.status(200).json(filteredproducts)
  } catch (ex) {
    console.log(ex)
    return res.status(500).json({ message: "Can't filter products" })
  }
}

module.exports = { getProducts, filterProducts }
