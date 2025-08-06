import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext'

const Card = ({name, index}) => {

    const{ addToCart } = useContext(CartContext)
  return (
  <div className="card">
  <h3>No: {index + 1}</h3>
  <h1>Name : {name}</h1>
  <button onClick={() => addToCart(index)}>Add to Cart</button>
</div>

  )
}

export default Card