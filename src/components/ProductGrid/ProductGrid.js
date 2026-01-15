import React from "react";
import Product from "../Product";
import "./ProductGrid.css";

function ProductGrid({ selectedProducts, setSelectedProducts }) {

  const [products, setProducts] = React.useState([]);

  const getData = async () => {
    try {
      const response = await fetch("https://api.sampleapis.com/wines/reds");
      const json = await response.json();
      setProducts(json);
    } catch (error) {
      setProducts(error.message);
    }
  };

  React.useEffect(() => {
    getData();
  }, []);

  return (
    <div className="product_grid">
      {products.map(product => {
        // This wine API doesn't include prices so I'm adding a random price for each wine.
        product.price = generateRandomPrice();
        
        return <Product
          key={product.id}
          product={product}
          selectedProducts={selectedProducts}
          setSelectedProducts={setSelectedProducts}
        />
      })}
    </div>
  );
}

function generateRandomPrice() {
  return Math.round(Math.random() * 100);
}

export default ProductGrid;
