import React from 'react';
import type { Product } from '../types/Product';

type Props = {
  product: Product;
  onAddToCart: (product: Product) => void;
  onBack: () => void;
};

const ProductPage: React.FC<Props> = ({ product, onAddToCart, onBack }) => (
  <div className="p-4 bg-white rounded shadow-lg">
    <button onClick={onBack} className="text-blue-600 hover:underline mb-4">Voltar</button>
    <img src={product.image} alt={product.name} className="w-full h-64 object-cover rounded mb-4" />
    <h2 className="text-2xl font-bold text-blue-800">{product.name}</h2>
    <p className="text-gray-700">{product.description}</p>
    <p className="font-bold text-red-600 mt-2">R$ {product.price.toFixed(2)}</p>
    <button onClick={() => onAddToCart(product)} className="mt-4 bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Adicionar ao Carrinho</button>
  </div>
);

export default ProductPage;