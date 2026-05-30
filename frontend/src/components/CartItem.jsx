import React from "react";

function CartItem({
  item,
  increaseQuantity,
  decreaseQuantity,
  removeFromCart,
}) {

  return (

    <div className="cart-item">

      <img
        src={item.image}
        alt={item.title}
        width="120"
      />

      <div>

        <h3>{item.title}</h3>

        <p>₹{item.price}</p>

        <div className="quantity-buttons">

          <button
            onClick={() =>
              decreaseQuantity(item.id)
            }
          >
            -
          </button>

          <span>{item.quantity}</span>

          <button
            onClick={() =>
              increaseQuantity(item.id)
            }
          >
            +
          </button>

        </div>

        <button
          onClick={() =>
            removeFromCart(item.id)
          }
        >
          Remove
        </button>

      </div>

    </div>
  );
}

export default CartItem;