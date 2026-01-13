import "./Header.css";
import shoppingCartIcon from "url:./assets/shopping-cart-white.svg";

function Header() {
  return (
    <header className="app_header">
      <h1 className="site_title">Daniel's Wine Shop</h1>
      <img
        src={shoppingCartIcon}
        alt="shopping cart"
        className="shopping-cart"
      />
    </header>
  );
}

export default Header;
