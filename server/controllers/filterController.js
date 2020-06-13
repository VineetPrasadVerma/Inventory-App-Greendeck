const Product = require('../models/productsSchema')

const filter = async (req, res) => {
  try {
    const filters = req.body.filters
    const { key, value, value1, operator } = filters[0]
    // console.log(value, operator)
    if (key === 'created_at') {
      const products = await Product.find({ 'created_at.date': { $gte: value, $lte: value1 } })
      console.log(products)
      return res.status(200).json(products)
    }

    if (key === 'stock_available') {
      const products = await Product.find({ 'stock.available': value })
      console.log(products)
      return res.status(200).json(products)
    }

    if (key === 'brand') {
      const products = await Product.find({ 'brand.name': new RegExp(value, 'i') })
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
