import express from 'express'
import data from './data.js'

const app = express()

app.get('/api/products', (req, res) => {
  res.send(data.products)
})

app.use((err, req, res, next) => {
  res.status(500).send({ message: err.message })
})

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Serve at http://localhost:${port}`)
})