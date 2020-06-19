const Product = require('../models/productsSchema')

// Get Products from DB
const getProducts = async (req, res) => {
  try {
    const products = await Product.find()
    return res.status(200).json(products.slice(0, 10))
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
