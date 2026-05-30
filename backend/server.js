const express = require('express')
const cors = require('cors')
require('dotenv').config()

const connectDB = require('./config/db')
const userRoutes = require('./routes/userRoutes')
const authRoutes =
require('./routes/authRoutes')

const productRoutes =
require('./routes/productRoutes')

const app = express()

connectDB()

app.use(express.json())
app.use(cors())

app.use('/api/auth', authRoutes)
app.use('/api/users', userRoutes)
app.use('/api/products', productRoutes)

app.get('/', (req, res) => {

  res.send('ShopEZ API Running')

})

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {

  console.log(`Server running on ${PORT}`)

})