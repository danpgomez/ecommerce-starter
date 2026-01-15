import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import ProductGrid from "./components/ProductGrid";
import Cart from "./components/Cart";
import Footer from "./components/Footer";
import { useState } from "react";

export function App() {

  const [isCartOpen, setIsCartOpen] = useState(false);
  const [selectedProducts, setSelectedProducts] = useState([]);

  return (
    <>
      <Header isCartOpen={isCartOpen} setIsCartOpen={setIsCartOpen} />
      <main>
        <Cart
          isCartOpen={isCartOpen}
          setIsCartOpen={setIsCartOpen}
          selectedProducts={selectedProducts}
          setSelectedProducts={setSelectedProducts}
        />
        <section className="wines-list-area">
          <h2 className="page_title">Our Wines</h2>
          <ProductGrid
            selectedProducts={selectedProducts}
            setSelectedProducts={setSelectedProducts}
          />
        </section>
      </main>
      <Footer />
    </>
  );
}
