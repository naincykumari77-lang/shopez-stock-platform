import React from 'react'
import Navbar from '../components/Navbar'

const Checkout = () => {
  return (
    <div>

      <Navbar />

      <div className='container mt-5'>

        <h2>Checkout</h2>

        <form className='mt-4'>

          <input
            type='text'
            placeholder='Address'
            className='form-control mb-3'
          />

          <input
            type='text'
            placeholder='City'
            className='form-control mb-3'
          />

          <button className='btn btn-success'>
            Place Order
          </button>

        </form>

      </div>

    </div>
  )
}

export default Checkout;