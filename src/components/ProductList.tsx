import React from 'react';
import type { Product } from '../types/Product';
import ProductCard from './ProductCard';

type Props = {
  products: Product[];
  onAddToCart: (product: Product) => void;
  onViewDetails: (product: Product) => void;
};

const ProductList: React.FC<Props> = ({ products, onAddToCart, onViewDetails }) => (
  <div>
    <h2 className="text-2xl font-bold mb-4 text-blue-800">Produtos</h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {products.map(product => (
        <ProductCard key={product.id} product={product} onAddToCart={onAddToCart} onViewDetails={onViewDetails} />
      ))}
    </div>
  </div>
);

export default ProductList;