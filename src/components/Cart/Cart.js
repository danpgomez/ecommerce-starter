import "./Cart.css";
import CartItem from "../CartItem";

function Cart({
    isCartOpen,
    setIsCartOpen,
    selectedProducts,
    setSelectedProducts
}) {
    const totalPrice = selectedProducts.reduce((accumulator, product) => {
        console.log(parseFloat(accumulator))
        return parseFloat(accumulator) + parseFloat(product.price)
    }, 0);
    const cartClass = isCartOpen ? "cart-sidebar open" : "cart-sidebar";
    
    return <aside className={cartClass}>
        <button
            className="close-cart"
            onClick={() => setIsCartOpen(!isCartOpen)}
        >X</button>
        <h2 className="cart-heading">Shopping Cart</h2>
        <ul className="cart-items-list">
            {selectedProducts.map((product, index) => <CartItem key={product.id-index} product={product} />)}
        </ul>
        <p className="cart-total">Total: ${totalPrice}</p>
    </aside>
}

export default Cart;
