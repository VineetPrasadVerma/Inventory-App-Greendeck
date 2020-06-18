const ndjson = require('ndjson')
const fs = require('fs')
const Product = require('./models/productsSchema')

// insert data to DB
const insertData = async () => {
  fs.createReadStream('data.txt')
    .pipe(ndjson.parse())
    .on('data', async function (obj) {
      // obj is a javascript object
    //   console.log(obj)
      try {
        await Product.create(obj)
      } catch (ex) {
        console.log(ex)
      }
      // console.log(obj)
    })
}
module.exports = insertData
