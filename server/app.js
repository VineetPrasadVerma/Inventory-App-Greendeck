require('dotenv').config()

const express = require('express')
const connectDB = require('./config/connection')
// const insertData = require('./seedDB')

// connectDB().then((res) => insertData())
connectDB()

const app = express()

app.listen(process.env.PORT, () => console.log(`Inventory Server has started on PORT ${process.env.PORT}`))
