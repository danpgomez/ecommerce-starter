import "./CartItem.css";

function CartItem({ product }) {
    return (
        <li className="cart-item">
            <img className="cart-item-image" src={product.image} alt={product.wine} />
            <p className="cart-item-name">{product.wine}</p>
            <p className="cart-item-price">${product.price}</p>
        </li>
    )
}

export default CartItem;
