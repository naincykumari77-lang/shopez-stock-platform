import React from 'react'
import { Link } from 'react-router-dom'

const ProductCard = ({ product }) => {
  return (
    <div className='card p-3 shadow'>
      <img
        src={product.image}
        alt='product'
        className='card-img-top'
        height='250'
      />

      <div className='card-body'>
        <h5>{product.name}</h5>
        <p>₹ {product.price}</p>

        <Link to={`/product/${product._id}`} className='btn btn-primary'>
          View Details
        </Link>
      </div>
    </div>
  )
}

export default ProductCard