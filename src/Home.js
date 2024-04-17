// Home.js
import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="home">
      <h2>Welcome to our store!</h2>
      <Link to="/products">
        <button>Proceed to Shopping</button>
      </Link>
    </div>
  );
};

export default Home;
