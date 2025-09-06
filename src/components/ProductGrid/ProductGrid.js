import React from "react";
import Product from "../Product";
import "./ProductGrid.css";

function ProductGrid() {

  const [ products, setProducts ] = React.useState([]);
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
      {products.map(product => (
        <Product key={product.id} product={product} />
      ))}
    </div>
  );
}

export default ProductGrid;
