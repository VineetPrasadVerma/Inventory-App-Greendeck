const Product = require('../models/productsSchema')

const filter = async (req, res) => {
  try {
    const filters = req.body.filters
    const { key, value, value1, operator } = filters[0]
    // console.log(value, value1)
    if (key === 'created_at') {
      const params = {}

      params.$where = 'function () {' +
          // 'return ((this.created_at.date > ' + value + ') && (this.created_at.date < ' + value1 + '))' +
          'return ((this.created_at.date.slice(0,10) > "' + value + '") && (this.created_at.date.slice(0,10) < "' + value1 + '"))' +
      '}'
      const products = await Product.find(params)
      console.log(products)
      return res.status(200).json(products)
    }

    if (key === 'stock_available') {
      const params = {}

      params.$where = 'function () {' +
          'return this.stock.available === ' + value +
      '}'

      const products = await Product.find(params)
      console.log(products)
      return res.status(200).json(products)
    }

    if (key === 'brand') {
      const params = {}

      params.$where = 'function () {' +
          'return this.brand.name.includes("' + value + '")' +
      '}'
      const products = await Product.find(params)
      console.log(products)
      return res.status(200).json(products)
    }

    const params = {}

    params.$where = 'function () {' +
        'const offerPrice = this.price.offer_price.value;' +
        'const regularPrice = this.price.regular_price.value;' +
        'const discountPercentage = ((regularPrice - offerPrice) / regularPrice) * 100;' +
        'return  (discountPercentage ' + operator + value + ')' +
    '}'

    const products = await Product.find(params)

    // console.log(products)
    // const filterdProducts = []
    // products.forEach(product => {
    //   const offerPrice = product.price.offer_price.value
    //   const regularPrice = product.price.regular_price.value
    //   const discountPercentage = ((regularPrice - offerPrice) / regularPrice) * 100
    //   console.log(discountPercentage)
    //   if (operator === '<') {
    //     if (discountPercentage < value) filterdProducts.push(product)
    //   } else if (operator === '>') {
    //     if (discountPercentage > value) filterdProducts.push(product)
    //   } else if (operator === '') {
    //     if (discountPercentage === value) filterdProducts.push(product)
    //   }
    // })

    // console.log(filterdProducts)
    return res.status(200).json(products)
  } catch (e) {
    console.log(e)
    return res.status(500).json({ message: 'Can\'t filter products' })
  }
}

module.exports = { filter }
