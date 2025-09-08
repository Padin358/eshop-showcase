import React from "react";
import { useCart } from "~/context/CartContext";

export default function Cart() {
  const { state, dispatch } = useCart();

  const total = state.items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div>
      <h2>🛒 Košík</h2>
      {state.items.length === 0 && <p>Košík je prázdný.</p>}
      <ul>
        {state.items.map((item) => (
          <li key={item.id}>
            {item.name} – {item.price} Kč ×{" "}
            <input
              type="number"
              value={item.quantity}
              min={1}
              onChange={(e) =>
                dispatch({
                  type: "SET_QUANTITY",
                  id: item.id,
                  quantity: Number(e.target.value),
                })
              }
            />{" "}
            = {item.price * item.quantity} Kč
            <button onClick={() => dispatch({ type: "REMOVE", id: item.id })}>
              ❌ Odebrat
            </button>
          </li>
        ))}
      </ul>
      {state.items.length > 0 && (
        <>
          <p>Celkem: {total} Kč</p>
          <button onClick={() => dispatch({ type: "CLEAR" })}>
            Vyprázdnit košík
          </button>
        </>
      )}
    </div>
  );
}
