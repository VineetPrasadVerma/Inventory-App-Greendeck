const express = require('express')
const router = express.Router()
const { filterProducts } = require('../controllers/filterProductController')

// POST ROUTE
router.post('/filter', filterProducts)

module.exports = router
