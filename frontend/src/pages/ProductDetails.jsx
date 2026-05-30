import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Navbar from '../components/Navbar'
import axios from 'axios'

const ProductDetails = () => {

  const { id } = useParams()

  const [product, setProduct] =
    useState(null)

  useEffect(() => {

    const fetchProduct = async () => {

      try {

        const { data } =
          await axios.get(
            'http://localhost:5000/api/products'
          )

        const foundProduct =
          data.find(
            (item) => item._id === id
          )

        setProduct(foundProduct)

      }

      catch (error) {

        console.log(error)

      }

    }

    fetchProduct()

  }, [id])

  const addToCart = () => {

    const user = JSON.parse(
      localStorage.getItem('user')
    )

    if (!user) {

      alert('Please Login First')

      return

    }

    const userCart =
      JSON.parse(
        localStorage.getItem(
          `cart_${user._id}`
        )
      ) || []

    const existingProduct =
      userCart.find(
        (item) =>
          item._id === product._id
      )

    if (existingProduct) {

      alert(
        'Product Already Added'
      )

      return

    }

    userCart.push(product)

    localStorage.setItem(

      `cart_${user._id}`,

      JSON.stringify(userCart)

    )

    alert(
      'Product Added To Cart'
    )

  }

  if (!product) {

    return (

      <div>

        <Navbar />

        <div className='container mt-5'>

          <h3>
            Loading...
          </h3>

        </div>

      </div>

    )

  }

  return (

    <div>

      <Navbar />

      <div className='container mt-5'>

        <div className='row'>

          <div className='col-md-6'>

            <img
              src={product.image}
              alt={product.name}
              className='img-fluid rounded shadow'
            />

          </div>

          <div className='col-md-6'>

            <h2>
              {product.name}
            </h2>

            <h3 className='text-success'>
              ₹ {product.price}
            </h3>

            <p>
              {product.description}
            </p>

            <button
              className='btn btn-warning btn-lg'
              onClick={addToCart}
            >
              Add To Cart
            </button>

          </div>

        </div>

      </div>

    </div>

  )

}

export default ProductDetails