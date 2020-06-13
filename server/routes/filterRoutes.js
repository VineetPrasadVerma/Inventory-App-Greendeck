const express = require('express')
const router = express.Router()
const { filter } = require('../controllers/filterController')

// POST ROUTE
router.post('/filter', filter)

module.exports = router
