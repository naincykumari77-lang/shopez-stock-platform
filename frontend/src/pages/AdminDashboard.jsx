import React, {
  useEffect,
  useState
} from 'react'

import Navbar from '../components/Navbar'

import ManageOrders from './Admin/ManageOrders'

import axios from 'axios'

const AdminDashboard = () => {

  const [products, setProducts] =
    useState([])

  const [users, setUsers] =
    useState([])

  const [orders, setOrders] =
    useState([])

  const [formData, setFormData] =
    useState({

      name: '',
      price: '',
      image: '',
      description: '',
      category: ''

    })

  useEffect(() => {

    fetchProducts()

    fetchUsers()

    fetchOrders()

  }, [])

  const fetchProducts = async () => {

    try {

      const { data } = await axios.get(

        'http://localhost:5000/api/products'

      )

      setProducts(data)

    }

    catch (error) {

      console.log(error)

    }

  }

  const fetchUsers = async () => {

  try {

    const { data } = await axios.get(

      'http://localhost:5000/api/auth/users'

    )

    setUsers(data)

  }

  catch (error) {

    console.log(error)

  }

}

  const fetchOrders = async () => {

    try {

      const ordersData =
        JSON.parse(
          localStorage.getItem('orders')
        ) || []

      setOrders(ordersData)

    }

    catch (error) {

      console.log(error)

    }

  }

  const handleChange = (e) => {

    setFormData({

      ...formData,

      [e.target.name]:
        e.target.value

    })

  }

  const addProduct = async (e) => {

    e.preventDefault()

    try {

      await axios.post(

        'http://localhost:5000/api/products',

        formData

      )

      alert('Product Added')

      setFormData({

        name: '',
        price: '',
        image: '',
        description: '',
        category: ''

      })

      fetchProducts()

    }

    catch (error) {

      console.log(error)

    }

  }

  const deleteProduct = async (id) => {

    try {

      await axios.delete(

        `http://localhost:5000/api/products/${id}`

      )

      fetchProducts()

    }

    catch (error) {

      console.log(error)

    }

  }

  return (

    <div
      style={{
        minHeight: '100vh',
        background: '#1f2937',
        color: 'white'
      }}
    >

      <Navbar />

      <div className='container py-5'>

        <h1 className='mb-5 fw-bold'>

          Admin Dashboard

        </h1>

        {/* TOP CARDS */}

        <div className='row g-4 mb-5'>

          <div className='col-md-3'>

            <div className='card bg-dark text-white p-4 text-center shadow'>

              <h5>Total Users</h5>

              <h2>{users.length}</h2>

            </div>

          </div>

          <div className='col-md-3'>

            <div className='card bg-dark text-white p-4 text-center shadow'>

              <h5>All Products</h5>

              <h2>{products.length}</h2>

            </div>

          </div>

          <div className='col-md-3'>

            <div className='card bg-dark text-white p-4 text-center shadow'>

              <h5>All Orders</h5>

              <h2>{

    orders.filter(

      (order) => order.status !== 'Cancelled'

    ).length

  }</h2>

            </div>

          </div>

          <div className='col-md-3'>

            <div className='card bg-dark text-white p-4 text-center shadow'>

              <h5>New Product</h5>

              <h2>+</h2>

            </div>

          </div>

        </div>


{/* MANAGE ORDERS */}

<hr className="my-5" />

<div className="card bg-dark text-white p-4 shadow">

  <h2 className="mb-4">
    
  </h2>

  <ManageOrders />

</div>





        {/* ADD PRODUCT */}

        <div className='card bg-dark text-white p-4 mb-5 shadow'>

          <h3 className='mb-4'>

            Add Product

          </h3>

          <form onSubmit={addProduct}>

            <div className='row'>

              <div className='col-md-6 mb-3'>

                <input
                  type='text'
                  name='name'
                  placeholder='Product Name'
                  className='form-control'
                  value={formData.name}
                  onChange={handleChange}
                  required
                />

              </div>

              <div className='col-md-6 mb-3'>

                <input
                  type='number'
                  name='price'
                  placeholder='Price'
                  className='form-control'
                  value={formData.price}
                  onChange={handleChange}
                  required
                />

              </div>

              <div className='col-md-6 mb-3'>

                <input
                  type='text'
                  name='image'
                  placeholder='Image URL'
                  className='form-control'
                  value={formData.image}
                  onChange={handleChange}
                  required
                />

              </div>

              <div className='col-md-6 mb-3'>

                <input
                  type='text'
                  name='category'
                  placeholder='Category'
                  className='form-control'
                  value={formData.category}
                  onChange={handleChange}
                  required
                />

              </div>

              <div className='col-12 mb-3'>

                <textarea
                  name='description'
                  placeholder='Description'
                  className='form-control'
                  rows='4'
                  value={formData.description}
                  onChange={handleChange}
                  required
                />

              </div>

            </div>

            <button
              className='btn btn-warning fw-bold'
            >

              Add Product

            </button>

          </form>

        </div>

        {/* PRODUCT LIST */}

        <div>

          <h2 className='mb-4'>

            Manage Products

          </h2>

          <div className='row'>

            {

              products.map((product) => (

                <div
                  className='col-md-4 mb-4'
                  key={product._id}
                >

                  <div className='card bg-dark text-white p-3 shadow'>

                    <img
                      src={product.image}
                      alt={product.name}
                      style={{
                        height: '220px',
                        objectFit: 'cover'
                      }}
                    />

                    <h4 className='mt-3'>

                      {product.name}

                    </h4>

                    <h5>

                      ₹ {product.price}

                    </h5>

                    <button
                      className='btn btn-danger mt-3'
                      onClick={() =>
                        deleteProduct(
                          product._id
                        )
                      }
                    >

                      Delete Product

                    </button>

                  </div>

                </div>

              ))

            }

          </div>

        </div>

      </div>

    </div>

  )
}

export default AdminDashboard