// Products.js
import React, { useState } from 'react';
import ProductInformation from './ProductInformation';

const Products = () => {
  const [cart, setCart] = useState([]);

  const marketProducts = [
    { name: 'Cabbage', id: 1, price: 10, description: 'Healthy' },
    { name: 'Garlic', id: 2, price: 15, description: 'Smelly' },
    // other products...
  ];

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  return (
    <div className="products">
      {marketProducts.map(product => (
        <div key={product.id} className="product">
          <ProductInformation {...product} />
          <button onClick={() => addToCart(product)} className="btn btn-primary">Add to Cart</button>
        </div>
      ))}
    </div>
  );
};

export default Products;
