import React from "react";
import { useCart } from "~/context/CartContext";

export default function Checkout() {
  const { state } = useCart();

  const total = state.items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const handleCheckout = () => {
    alert("Simulace platby: zaplaceno " + total + " Kč ✅");
  };

  if (state.items.length === 0) {
    return <p>Košík je prázdný, nemáš co zaplatit 😅</p>;
  }

  return (
    <div>
      <h2>Pokladna</h2>
      <ul>
        {state.items.map((item) => (
          <li key={item.id}>
            {item.name} – {item.quantity} ks ({item.price * item.quantity} Kč)
          </li>
        ))}
      </ul>
      <p>Celková cena: {total} Kč</p>
      <button onClick={handleCheckout}>Zaplatit</button>
    </div>
  );
}
