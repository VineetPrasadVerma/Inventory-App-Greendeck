const Product = require('../models/productsSchema')

const filter = async (req, res) => {
  try {
    const filters = req.body.filters

    const params = {}
    let whereClause = ' function () { return ( '

    for (let index = 0; index < filters.length; index++) {
      if (index !== 0) {
        whereClause += '&&'
      }
      const { key, value, operator } = filters[index]
      // console.log(key)
      if (key === 'discount') {
        whereClause += '((((( this.price.regular_price.value - this.price.offer_price.value) / this.price.regular_price.value ) * 100)' + operator + value + '))'
      } else if (key === 'brand') {
        whereClause += '(this.brand.name.toLowerCase().includes("' + value.toLowerCase() + '"))'
      } else if (key === 'stock_available') {
        whereClause += '(this.stock.available === ' + value + ')'
      } else if (key === 'created_at') {
        const [startDate, endDate] = value
        whereClause += '((this.created_at.date.slice(0,10) > "' + startDate + '") && (this.created_at.date.slice(0,10) < "' + endDate + '"))'
      }
    }

    whereClause += ')}'

    params.$where = whereClause

    const products = await Product.find(params)
    return res.status(200).json(products)
  } catch (e) {
    console.log(e)
    return res.status(500).json({ message: 'Can\'t filter products' })
  }
}

module.exports = { filter }
