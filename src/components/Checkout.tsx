import React from 'react';
import { useCart } from '../context/CartContext';

const Checkout: React.FC = () => {
  const { cart, clearCart } = useCart();

  const handleCheckout = () => {
    alert('Compra finalizada com sucesso!');
    clearCart();
  };

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="border p-4 rounded shadow mt-4">
      <h2 className="text-xl font-bold mb-4">Finalizar Compra</h2>
      {cart.length === 0 ? (
        <p>Seu carrinho está vazio.</p>
      ) : (
        <>
          <p className="mb-4">Total: R$ {total.toFixed(2)}</p>
          <button
            onClick={handleCheckout}
            className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
          >
            Finalizar compra
          </button>
        </>
      )}
    </div>
  );
};

export default Checkout;