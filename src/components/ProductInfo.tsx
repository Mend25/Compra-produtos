import React from 'react';
import type { Product } from '../types/Product';

type ProductInfoProps = {
  product: Product;
  onAddToCart: (product: Product) => void;
};

const ProductInfo: React.FC<ProductInfoProps> = ({ product, onAddToCart }) => {
  return (
    <div className="max-w-md mx-auto border rounded shadow p-6">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-64 object-cover rounded mb-4"
      />
      <h2 className="text-2xl font-bold mb-2">{product.name}</h2>
      <p className="text-gray-700 mb-4">{product.description}</p>
      <p className="text-xl font-semibold mb-4">R$ {product.price.toFixed(2)}</p>
      <button
        onClick={() => onAddToCart(product)}
        className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
      >
        Adicionar ao carrinho
      </button>
    </div>
  );
};

export default ProductInfo;