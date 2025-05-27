import React, { useState } from 'react';
import ProductList from '../components/ProductList';
import Cart from '../components/Cart';
import Checkout from '../components/Checkout';
import { useCart } from '../context/CartContext';
import {useNavigate} from 'react-router-dom';
import type { Product } from '../types/Product';
import ProductInfo from '../components/ProductInfo';

const products: Product[] = [
  { id: 1, name: 'Produto A', description: 'Descrição do Produto A', price: 100, image: 'https://via.placeholder.com/150' },
  { id: 2, name: 'Produto B', description: 'Descrição do Produto B', price: 200, image: 'https://via.placeholder.com/150' },
  { id: 3, name: 'Produto C', description: 'Descrição do Produto C', price: 300, image: 'https://via.placeholder.com/150' },
];

const Home: React.FC = () => {
  const { addToCart } = useCart();
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const navigate = useNavigate();

  const handleViewDetails = (product: Product) => {
    setSelectedProduct(product);
    navigate(`/product/${product.id}`);
  };

  return (
    <div className="p-6 space-y-6">
      <ProductList
        products={products}
        onAddToCart={addToCart}
        onViewDetails={handleViewDetails}
      />

      {selectedProduct && (
        <ProductInfo
          product={selectedProduct}
          onAddToCart={addToCart}
        />
      )}

      <Cart />
      <Checkout />
    </div>
  );
};

export default Home;
// Removed unused function as `setSelectedProduct` is now handled by useState.
