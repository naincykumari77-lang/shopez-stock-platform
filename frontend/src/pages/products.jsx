import React, {
  useEffect,
  useState
} from 'react'

import Navbar from '../components/Navbar'

import ProductCard from '../components/ProductCard'

import axios from 'axios'

const Products = () => {

  const [products, setProducts] =
    useState([])

  const [filteredProducts,
    setFilteredProducts] =
    useState([])

  const [selectedCategory,
    setSelectedCategory] =
    useState('All')

  useEffect(() => {

    fetchProducts()

  }, [])

  const fetchProducts = async () => {

    try {

      const { data } = await axios.get(

        'http://localhost:5000/api/products'

      )

      setProducts(data)

      setFilteredProducts(data)

    }

    catch (error) {

      console.log(error)

    }

  }

  const filterProducts =
    (category) => {

      setSelectedCategory(category)

      if (category === 'All') {

        setFilteredProducts(products)

      }

      else {

        const filtered =
          products.filter(

            (product) =>

              product.category
                .toLowerCase()

                ===

              category
                .toLowerCase()

          )

        setFilteredProducts(filtered)

      }

    }

  return (

    <div
      style={{
        background: '#f4f4f4',
        minHeight: '100vh'
      }}
    >

      <Navbar />

      <div className='container-fluid mt-4'>

        <div className='row'>

          {/* SIDEBAR */}

          <div className='col-md-3'>

            <div
              className='bg-white p-4 shadow rounded'
            >

              <h3 className='mb-4'>

                Filters

              </h3>

              <button
                className={`btn w-100 mb-3 ${
                  selectedCategory === 'All'
                    ? 'btn-dark'
                    : 'btn-outline-dark'
                }`}
                onClick={() =>
                  filterProducts('All')
                }
              >

                All Products

              </button>

              <button
                className={`btn w-100 mb-3 ${
                  selectedCategory ===
                  'Mobiles'
                    ? 'btn-primary'
                    : 'btn-outline-primary'
                }`}
                onClick={() =>
                  filterProducts('Mobiles')
                }
              >

                Mobiles

              </button>

              <button
                className={`btn w-100 mb-3 ${
                  selectedCategory ===
                  'Electronics'
                    ? 'btn-success'
                    : 'btn-outline-success'
                }`}
                onClick={() =>
                  filterProducts(
                    'Electronics'
                  )
                }
              >

                Electronics

              </button>

              <button
                className={`btn w-100 mb-3 ${
                  selectedCategory ===
                  'Accessories'
                    ? 'btn-warning'
                    : 'btn-outline-warning'
                }`}
                onClick={() =>
                  filterProducts(
                    'Accessories'
                  )
                }
              >

                Accessories

              </button>

              <button
                className={`btn w-100 mb-3 ${
                  selectedCategory ===
                  'Groceries'
                    ? 'btn-danger'
                    : 'btn-outline-danger'
                }`}
                onClick={() =>
                  filterProducts(
                    'Groceries'
                  )
                }
              >

                Groceries

              </button>

            </div>

          </div>

          {/* PRODUCTS */}

          <div className='col-md-9'>

            <div className='d-flex justify-content-between align-items-center mb-4'>

              <h2>

                {selectedCategory}
                {' '}
                Products

              </h2>

              <h5>

                Total :
                {' '}
                {
                  filteredProducts.length
                }

              </h5>

            </div>

            <div className='row'>

              {

                filteredProducts.map(
                  (product) => (

                    <div
                      className='col-md-4 mb-4'
                      key={product._id}
                    >

                      <ProductCard
                        product={product}
                      />

                    </div>

                  )

                )

              }

            </div>

          </div>

        </div>

      </div>

    </div>

  )

}

export default Products