import { useCart } from "~/context/CartContext";

const TestList = () => {
    const { dispatch } = useCart();

    const products = [
      { id: "1", name: "Tričko Zontri", price: 299 },
      { id: "2", name: "Mikina Zontri", price: 799 },
      { id: "3", name: "Kšiltovka Zontri", price: 199 },
    ];
  
    const addToCart = (p: { id: string; name: string; price: number }) => {
      dispatch({
        type: "ADD",
        item: { ...p, quantity: 1 }, // vždy přidáme 1 kus
      });
    };
  
    return (
      <div>
        <h2>🛍️ Produkty</h2>
        <ul>
          {products.map((p) => (
            <li key={p.id}>
              {p.name} – {p.price} Kč
              <button onClick={() => addToCart(p)}>➕ Do košíku</button>
            </li>
          ))}
        </ul>
      </div>
    );
}

export default TestList