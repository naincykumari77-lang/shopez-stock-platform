import React, {
  createContext,
  useState
} from 'react'

export const CartContext =
  createContext()

const CartProvider = ({
  children
}) => {

  const [cartItems, setCartItems] =
    useState(

      JSON.parse(
        localStorage.getItem('cart')
      ) || []

    )

  const addToCart = (product) => {

    const updatedCart = [

      ...cartItems,
      product

    ]

    setCartItems(updatedCart)

    localStorage.setItem(

      'cart',

      JSON.stringify(updatedCart)

    )

  }

  const removeFromCart = (id) => {

    const updatedCart =
      cartItems.filter(

        (item) =>
          item._id !== id

      )

    setCartItems(updatedCart)

    localStorage.setItem(

      'cart',

      JSON.stringify(updatedCart)

    )

  }

  return (

    <CartContext.Provider

      value={{
        cartItems,
        addToCart,
        removeFromCart
      }}

    >

      {children}

    </CartContext.Provider>

  )
}

export default CartProvider