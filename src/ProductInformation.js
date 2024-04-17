import React from 'react';

const ProductInformation = ({ name, price, description }) => {
    return (
        <div className="product">
        <h2>{name}</h2>
        <p>Price: {price}</p>
        <p>Description: {description}</p>
        </div>
    );
};

export default ProductInformation;