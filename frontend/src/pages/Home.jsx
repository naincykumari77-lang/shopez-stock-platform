import React, {
  useEffect,
  useState
} from 'react'

import axios from 'axios'

import Navbar from '../components/Navbar'

import ProductCard from '../components/ProductCard'

const Home = () => {
const [products, setProducts] =
  useState([])

useEffect(() => {

  fetchProducts()

}, [])

const fetchProducts = async () => {

  const { data } = await axios.get(

    'http://localhost:5000/api/products'

  )

  setProducts(data)

}

  return (

    <div>

      <Navbar />

      {/* SALE BAR */}
<div className='bg-dark text-white text-center p-2 fw-bold'>

🔥 MEGA SALE LIVE NOW | UP TO 70% OFF | FREE DELIVERY AVAILABLE 🔥

</div>
<div className='container mt-4'>

  <h2 className='fw-bold mb-4'>

    🔥 Sale Products

  </h2>

  <div className='row'>

    {

      products.slice(0, 4).map((product) => (

        <div
          className='col-md-3 mb-4'
          key={product._id}
        >

          <ProductCard
            product={product}
          />

        </div>

      ))

    }

  </div>

</div>
      {/* PRODUCTS */}

      <div className='container mt-5'>

        <h2 className='mb-4'>

          Featured Products

        </h2>

        <div className='row'>

          {products.map((product) => (

            <div
              className='col-md-3 mb-4'
              key={product._id}
            >

              <ProductCard
                product={product}
              />

            </div>

          ))}

        </div>

      </div>

    </div>

  )
}

export default Home