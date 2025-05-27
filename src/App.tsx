import React, { useState } from 'react';
import { products } from './types/Product';
import type { Product } from './types/Product';
import ProductList from './components/ProductList';
import ProductPage from './pages/ProductPage';

const App: React.FC = () => {
  const [cart, setCart] = useState<Product[]>([]);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const addToCart = (product: Product) => {
    setCart([...cart, product]);
  };

  const removeFromCart = (id: number) => {
    setCart(cart.filter(p => p.id !== id));
  };

  const total = cart.reduce((sum, p) => sum + p.price, 0);

  return (
    <div className="bg-white text-blue-900 min-h-screen">
      <header className="bg-blue-800 text-white p-4">
        <h1 className="text-3xl font-bold">Loja de Camisas</h1>
      </header>

      <main className="p-4">
        {selectedProduct ? (
          <ProductPage product={selectedProduct} onAddToCart={addToCart} onBack={() => setSelectedProduct(null)} />
        ) : (
          <ProductList products={products} onAddToCart={addToCart} onViewDetails={setSelectedProduct} />
        )}

        <div className="mt-8">
          <h2 className="text-2xl font-bold mb-2">Carrinho</h2>
          {cart.map((item, idx) => (
            <div key={idx} className="flex justify-between items-center border-b py-2">
              <span>{item.name}</span>
              <button onClick={() => removeFromCart(item.id)} className="text-red-600 hover:underline">Remover</button>
            </div>
          ))}
          <p className="font-bold mt-2">Total: R$ {total.toFixed(2)}</p>
        </div>
      </main>

      <footer className="bg-red-600 text-white p-4 text-center">
        © 2025 Loja de Camisas
      </footer>
    </div>
  );
};

export default App;