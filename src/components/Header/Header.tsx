import "./Header.css";
import shoppingCartIcon from "url:./assets/shopping-cart-white.svg";
import { JSX } from "react";

interface HeaderProps {
  isCartOpen: boolean;
  setIsCartOpen: (currentCartState: boolean) => void;
};

function Header({isCartOpen, setIsCartOpen}: HeaderProps): JSX.Element {
  return (
    <header className="app_header">
      <h1 className="site_title">Daniel's Wine Shop</h1>
      <button 
        className="shopping-cart"
        aria-label={isCartOpen ? "Close shopping cart" : "Open shopping cart"}
        onClick={() => setIsCartOpen(!isCartOpen)}
      >
        <img
          src={shoppingCartIcon}
          alt="" // labeled by the button that wraps it.
        />
      </button>
    </header>
  );
}

export default Header;
