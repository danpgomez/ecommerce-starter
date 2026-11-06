import { JSX } from "react";
import "./CartItem.css";
import type { CartProduct } from "../../types/products";

interface CartItemProps {
    product: CartProduct;
    selectedProducts: CartProduct[];
    setSelectedProducts: (products: CartProduct[]) => void;
}

function CartItem({ product, selectedProducts, setSelectedProducts }: CartItemProps): JSX.Element {
    const handleDecrement = () => {
        if (product.quantity === 1) {
            setSelectedProducts(selectedProducts.filter(p => p.id !== product.id));
        } else {
            setSelectedProducts(selectedProducts.map(p => p.id === product.id ? { ...p, quantity: p.quantity - 1 } : p));
        }
    }

    const handleIncrement = () => {
        setSelectedProducts(selectedProducts.map(p => p.id === product.id ? { ...p, quantity: p.quantity + 1 } : p));
    }

    return (
        <li className="cart-item">
            <img className="cart-item-image" src={product.image} alt={product.wine} />
            <p className="cart-item-name">{product.wine}</p>
            <p className="cart-item-price">${product.price}</p>
            <button
                className="quantity-minus"
                onClick={handleDecrement}
            >-</button>
            <p className="quantity-text">{product.quantity}</p>
            <button
                className="quantity-plus"
                onClick={handleIncrement}
            >+</button>
        </li>
    )
}

export default CartItem;
