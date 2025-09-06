import "./App.css";
import Header from "./components/Header";
import ProductGrid from "./components/ProductGrid";
import Footer from "./components/Footer";

export function App() {
  return (
    <>
     <Header />
     <main>
      <h2 className="page_title">Our Wines</h2>
      <ProductGrid />
     </main>
     <Footer />
    </>
  );
}
