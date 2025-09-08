import { CartProvider } from "~/context/CartContext";
import Cart from "~/elements/cart";
import Checkout from "~/elements/checkout";
import TestList from "~/elements/testList";

export default function Idk() {
    return (
        <CartProvider> 
            <TestList />
            <h1>Idk</h1>
            <Cart />
            <Checkout />
        </CartProvider>
    )
}