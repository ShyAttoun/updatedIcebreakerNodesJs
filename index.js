const express = require('express')
const app = express()
const morgan = require('morgan')
const mysql = require('mysql')
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({extended: false}))
app.use(express.static('./public'))
app.use(morgan('short'))

const router1 = require ('./routes/images.js')
app.use(router1)

const router2 = require ('./routes/food.js')
app.use(router2)

const router3 = require ('./routes/associations.js')
app.use(router3)

app.get("/", (req, res) => {
  console.log("Responding to root route")
  res.send("Hello from ROOOOOT")
})

const PORT = process.env.PORT || 3003
// localhost:PORT
app.listen(PORT, () => {
  console.log("Server is up and listening on: " + PORT)
})

