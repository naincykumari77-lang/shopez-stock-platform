import React, {
  useEffect,
  useState
} from 'react'

import Navbar from '../components/Navbar'

const Orders = () => {

  const [orders, setOrders] =
    useState([])

  useEffect(() => {

  const user = JSON.parse(
    localStorage.getItem('user')
  )

  if (!user) return

  const savedOrders =
    JSON.parse(
      localStorage.getItem(
        `orders_${user._id}`
      )
    ) || []

  setOrders(savedOrders)

}, [])

  const cancelOrder = (index) => {

  const user = JSON.parse(
    localStorage.getItem('user')
  )

  const updatedOrders =
    orders.filter(
      (_, i) => i !== index
    )

  setOrders(updatedOrders)

  localStorage.setItem(
    `orders_${user._id}`,
    JSON.stringify(updatedOrders)
  )

  alert('Order Cancelled')

}
  return (

    <div>

      <Navbar />

      <div className='container mt-5'>

        <div className='d-flex justify-content-between align-items-center mb-4'>

          <h2>My Orders</h2>

          <h4 className='text-primary'>
            Total Orders : {orders.length}
          </h4>

        </div>

        {orders.length === 0 ? (

          <div className='text-center mt-5'>

            <h3>No Orders Yet</h3>

          </div>

        ) : (

          <div className='row'>

            {orders.map((order, index) => (

              <div
                className='col-md-4 mb-4'
                key={index}
              >

                <div className='card shadow h-100 p-3'>

                  <img
                    src={order.image}
                    alt={order.name}
                    className='img-fluid rounded'
                    style={{
                      height: '220px',
                      objectFit: 'cover'
                    }}
                  />

                  <div className='mt-3'>

                    <h4>{order.name}</h4>

                    <h5 className='text-success'>
                      ₹ {order.price}
                    </h5>

                    <p className='text-muted'>
                      {order.description ||
                        'Product Ordered Successfully'}
                    </p>

                    <div className='d-flex gap-2'>

                      <button
                        className='btn btn-primary flex-fill'
                      >
                        Track Order
                      </button>

                      {order.status !==
                        'Cancelled' && (

                        <button
                          className='btn btn-danger flex-fill'
                          onClick={() =>
                            cancelOrder(index)
                          }
                        >
                          Cancel Order
                        </button>

                      )}

                    </div>

                    <p
                      className={`fw-bold text-center mt-3 ${
                        order.status ===
                        'Cancelled'
                          ? 'text-danger'
                          : 'text-success'
                      }`}
                    >

                      {order.status ||
                        'Order Placed Successfully'}

                    </p>

                  </div>

                </div>

              </div>

            ))}

          </div>

        )}

      </div>

    </div>

  )

}

export default Orders