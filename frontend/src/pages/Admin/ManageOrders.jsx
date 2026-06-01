import React, {
  useEffect,
  useState
} from "react";

function ManageOrders() {

  const [orders, setOrders] =
    useState([]);

  useEffect(() => {

  let allOrders = []

  Object.keys(localStorage).forEach((key) => {

    if (key.startsWith('orders_')) {

      const userOrders =
        JSON.parse(
          localStorage.getItem(key)
        ) || []

      allOrders = [
        ...allOrders,
        ...userOrders
      ]
    }

  })

  setOrders(allOrders)

}, [])

  const updateStatus = (
    index,
    status
  ) => {

    const updatedOrders =
      [...orders];

    updatedOrders[index].status =
      status;

    setOrders(updatedOrders);

    localStorage.setItem(
      "orders",
      JSON.stringify(updatedOrders)
    );

  };

  return (

    <div className="container mt-4">

      <h2 className="mb-4">
        Manage Orders
      </h2>

      <h4 className="mb-4 text-primary">
        Total Orders: {orders.length}
      </h4>

      {orders.length === 0 ? (

        <h5>No Orders Found</h5>

      ) : (

        <div className="row">

          {orders.map(
            (order, index) => (

              <div
                className="col-md-4 mb-4"
                key={index}
              >

                <div className="card p-3 shadow">

                  <img
                    src={order.image}
                    alt={order.name}
                    style={{
                      height: "200px",
                      objectFit: "cover"
                    }}
                  />

                  <h4 className="mt-3">
                    {order.name}
                  </h4>

                  <h5>
                    ₹ {order.price}
                  </h5>

                  <p>
                    Status:
                    {" "}
                    <strong>
                      {order.status ||
                        "Placed"}
                    </strong>
                  </p>

                  <button
                    className="btn btn-warning mb-2"
                    onClick={() =>
                      updateStatus(
                        index,
                        "Shipped"
                      )
                    }
                  >
                    Mark Shipped
                  </button>

                  <button
                    className="btn btn-success mb-2"
                    onClick={() =>
                      updateStatus(
                        index,
                        "Delivered"
                      )
                    }
                  >
                    Mark Delivered
                  </button>

                  <button
                    className="btn btn-danger"
                    onClick={() =>
                      updateStatus(
                        index,
                        "Cancelled"
                      )
                    }
                  >
                    Cancel Order
                  </button>

                </div>

              </div>

            )
          )}

        </div>

      )}

    </div>

  );

}

export default ManageOrders;