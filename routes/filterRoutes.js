const express = require('express')
const router = express.Router()
const { getProducts, filterProducts } = require('../controllers/filterProduct')

// GET ROUTE
router.get('/', getProducts)

// POST ROUTE
router.post('/filter', filterProducts)

module.exports = router
