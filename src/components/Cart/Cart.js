import "./Cart.css";

function Cart({ isCartOpen, setIsCartOpen }) {
    const cartClass = isCartOpen ? "cart-sidebar open" : "cart-sidebar";
    return <aside className={cartClass}>
        <button
            className="close-cart"
            onClick={() => setIsCartOpen(!isCartOpen)}
        >X</button>
        <h2 className="cart-heading">Shopping Cart</h2>
    </aside>
}

export default Cart;
