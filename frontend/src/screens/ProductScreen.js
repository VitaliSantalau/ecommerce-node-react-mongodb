import React from 'react'
import Rating from '../components/Rating'
import data from '../data'


export default function ProductScreen(props) {
  const product = data.products.find(item => item._id === props.match.params.id)
  
  if(!product) {
    return <div>Product Not Found</div>
  }

  return (
    <div>
      <div className="row">
        <div className="col-2">
          <img className="large" src={product.image} alt={product.name}/>
        </div>
        <div className="col-1">
          <ul>
            <li><h1>{ product.name }</h1></li>
            <li><Rating rating={product.rating} numReviews={product.numReviews} /></li>
            <li>Price : ${product.price}</li>
            <li><p>DEscription : {product.description}</p></li>
          </ul>
        </div>
        <div className="col-1">
          <div className="card card-body">
            <ul>
              <li>
                <div className="row">
                  <div>Price: </div>
                  <div className="price">${product.price}</div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
