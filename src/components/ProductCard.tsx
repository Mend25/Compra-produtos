import React from 'react';
import type { Product } from '../types/Product';

type Props = {
  product: Product;
  onAddToCart: (product: Product) => void;
  onViewDetails: (product: Product) => void;
};

const ProductCard: React.FC<Props> = ({ product, onAddToCart, onViewDetails }) => (
  <div className="border-2 border-blue-800 rounded p-4 shadow-lg hover:shadow-xl transition bg-white">
    <img src={product.image} alt={product.name} className="w-full h-48 object-cover rounded mb-4" />
    <h3 className="text-xl font-semibold text-blue-800">{product.name}</h3>
    <p className="text-gray-700">{product.description}</p>
    <p className="font-bold text-red-600 mt-2">R$ {product.price.toFixed(2)}</p>
    <div className="mt-4 flex gap-2">
      <button onClick={() => onAddToCart(product)} className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Adicionar</button>
      <button onClick={() => onViewDetails(product)} className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">Ver Detalhes</button>
    </div>
  </div>
);

export default ProductCard;