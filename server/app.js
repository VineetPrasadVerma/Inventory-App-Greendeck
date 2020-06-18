require('dotenv').config()

const express = require('express')
const cors = require('cors')
const connectDB = require('./config/connection')
const filterRoutes = require('./routes/filterRoutes')
// const insertData = require('./seedDB')

// connectDB().then((res) => insertData())
connectDB()

const app = express()

app.use(cors())
app.use(express.json())
app.use('/', filterRoutes)

app.listen(process.env.PORT, () => console.log(`Inventory Server has started on PORT ${process.env.PORT}`))
