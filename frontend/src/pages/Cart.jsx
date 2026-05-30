import React, {
  useState,
  useEffect
} from 'react'

import Navbar from '../components/Navbar'
import { useNavigate } from 'react-router-dom'

const Cart = () => {

  const navigate = useNavigate()

  const [cartItems, setCartItems] =
    useState([])

  useEffect(() => {

    const user = JSON.parse(
      localStorage.getItem('user')
    )

    if (!user) {

      navigate('/login')
      return

    }

    const userCart =
      JSON.parse(
        localStorage.getItem(
          `cart_${user._id}`
        )
      ) || []

    setCartItems(userCart)

  }, [navigate])

  const removeFromCart = (id) => {

    const user = JSON.parse(
      localStorage.getItem('user')
    )

    const updatedCart =
      cartItems.filter(
        (item) => item._id !== id
      )

    setCartItems(updatedCart)

    localStorage.setItem(
      `cart_${user._id}`,
      JSON.stringify(updatedCart)
    )

  }

  const placeOrder = () => {

    const user = JSON.parse(
      localStorage.getItem('user')
    )

    if (!user) {

      alert('Please Login First')
      navigate('/login')
      return

    }

    const oldOrders =
      JSON.parse(
        localStorage.getItem(
          `orders_${user._id}`
        )
      ) || []

    const newOrders =
      cartItems.map((item) => ({
        ...item,
        status: 'Placed',
        orderDate:
          new Date().toLocaleString()
      }))

    const updatedOrders = [
      ...oldOrders,
      ...newOrders
    ]

    localStorage.setItem(
      `orders_${user._id}`,
      JSON.stringify(updatedOrders)
    )

    localStorage.removeItem(
      `cart_${user._id}`
    )

    setCartItems([])

    alert('Order Placed Successfully')

    navigate('/orders')

  }

  const totalPrice =
    cartItems.reduce(
      (acc, item) =>
        acc + Number(item.price),
      0
    )

  return (

    <div>

      <Navbar />

      <div className='container mt-5'>

        <h2 className='mb-4'>
          My Cart
        </h2>

        {cartItems.length === 0 ? (

          <div className='text-center mt-5'>

            <h4>
              Cart is Empty
            </h4>

          </div>

        ) : (

          <>

            <div className='row'>

              {cartItems.map((item) => (

                <div
                  className='col-md-4 mb-4'
                  key={item._id}
                >

                  <div className='card p-3 shadow h-100'>

                    <img
                      src={item.image}
                      alt={item.name}
                      className='img-fluid rounded'
                      style={{
                        height: '220px',
                        objectFit: 'cover'
                      }}
                    />

                    <h4 className='mt-3'>
                      {item.name}
                    </h4>

                    <h5 className='text-success'>
                      ₹ {item.price}
                    </h5>

                    <button
                      className='btn btn-danger mt-3'
                      onClick={() =>
                        removeFromCart(item._id)
                      }
                    >
                      Remove
                    </button>

                  </div>

                </div>

              ))}

            </div>

            <div className='mt-4 text-center'>

              <h3>
                Total : ₹ {totalPrice}
              </h3>

              <button
                className='btn btn-success btn-lg mt-3'
                onClick={placeOrder}
              >
                Place Order
              </button>

            </div>

          </>

        )}

      </div>

    </div>

  )

}

export default Cart