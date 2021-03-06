import express from 'express'
import data from './data.js'

const app = express()

app.get('/api/products', (req, res) => {
  res.send(data.products)
})

app.get('/api/products/:id', (req, res) => {
  const product = data.products.find(item => item._id === req.params.id)
  if(product) {
    res.send(product)
  } else {
    res.status(404).send({message: "Product not Found"})
  }
  
})

app.use((err, req, res, next) => {
  res.status(500).send({ message: err.message })
})

const port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log(`Serve at http://localhost:${port}`)
})