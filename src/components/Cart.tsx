import React from 'react';
import { useCart } from '../context/CartContext';

const Cart: React.FC = () => {
  const { cart, removeFromCart, clearCart } = useCart();

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="border p-4 rounded shadow">
      <h2 className="text-xl font-bold mb-4">Carrinho de Compras</h2>
      {cart.length === 0 ? (
        <p>O carrinho está vazio.</p>
      ) : (
        <>
          <ul>
            {cart.map((item, index) => (
              <li key={index} className="flex justify-between mb-2">
                <span>{item.name}</span>
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="text-red-500 hover:underline"
                >
                  Remover
                </button>
              </li>
            ))}
          </ul>
          <p className="mt-4 font-semibold">Total: R$ {total.toFixed(2)}</p>
          <button
            onClick={clearCart}
            className="mt-4 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
          >
            Limpar carrinho
          </button>
        </>
      )}
    </div>
  );
};

export default Cart;