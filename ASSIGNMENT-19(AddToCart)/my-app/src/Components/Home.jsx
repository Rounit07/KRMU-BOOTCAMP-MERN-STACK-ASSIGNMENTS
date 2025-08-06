import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Card from './Card.jsx';
import { CartContext } from '../context/CartContext.jsx';

const Home = () => {
  const { products } = useContext(CartContext);

  return (
    <div className="app-container">
      <Link className="link-button" to="/addtocart">Go to Cart</Link>
      <div>
        {products.map((item, i) => (
          <Card {...item} key={i} index={i} />
        ))}
      </div>
    </div>
  );
};

export default Home;
