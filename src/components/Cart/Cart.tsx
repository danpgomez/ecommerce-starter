import "./Cart.css";
import CartItem from "../CartItem";
import { JSX } from "react";
import type { CartProduct } from "../../types/products";

interface CartProps {
    isCartOpen: boolean;
    setIsCartOpen: (currentCartStatus: boolean) => void;
    selectedProducts: CartProduct[]
    setSelectedProducts: (products: CartProduct[]) => void;
};

function Cart({
    isCartOpen,
    setIsCartOpen,
    selectedProducts,
    setSelectedProducts
}: CartProps): JSX.Element {
    const totalPrice = selectedProducts.reduce((accumulator, product) => {
        return accumulator + (product.price * product.quantity);
    }, 0);
    const cartClass = isCartOpen ? "cart-sidebar open" : "cart-sidebar";

    return <aside className={cartClass}>
        <button
            className="close-cart"
            onClick={() => setIsCartOpen(!isCartOpen)}
        >X</button>
        <h2 className="cart-heading">Order Summary</h2>
        <ul className="cart-items-list">
            {selectedProducts.map((product, index) => {
                return <CartItem
                    key={`${product.id}-${index}`}
                    product={product}
                    selectedProducts={selectedProducts}
                    setSelectedProducts={setSelectedProducts}
                />
            })}
        </ul>
        <p className="cart-total">Total: ${totalPrice.toFixed(2)}</p>
    </aside>
}

export default Cart;
