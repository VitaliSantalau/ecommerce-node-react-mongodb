import React from 'react'
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
          <img src={product.image} alt={product.name}/>
        </div>
        <div className="col-1"></div>
        <div className="col-1"></div>
      </div>
    </div>
  )
}
