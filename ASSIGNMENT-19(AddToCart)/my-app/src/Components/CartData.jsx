
import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext'
import CartCard from './CartCard'
import { Link } from 'react-router-dom'

const CartData = () => {
    const{cartProducts} = useContext(CartContext) 
    console.log('cart data', cartProducts)
  return (
  <div className="app-container">
  <div className="cart-summary">Total Items: {cartProducts.length}</div>
  <Link className="link-button" to="/">Back to Home</Link>
  {cartProducts.map((item, i) => (
    <CartCard {...item} key={i} index={i} />
  ))}
</div>

  )
}

export default CartData