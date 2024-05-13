import React from 'react';

function ProductCard({ product }) {
    return (
        <div className="bg-white rounded-lg shadow-md p-6 mb-4">
            <img src={product.image} alt={product.name} className="w-32 h-auto rounded-lg mb-4" />
            <div className="text-gray-800">
                <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
                <p className="text-sm text-gray-600 mb-2">{product.description}</p>
                <p className="text-sm text-gray-600">Doctor: {product.doctor}</p>
            </div>
        </div>
    );
}

export default ProductCard;
