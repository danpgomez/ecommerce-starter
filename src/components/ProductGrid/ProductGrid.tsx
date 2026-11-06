import React, { JSX } from "react";
import ProductCard from "../Product";
import "./ProductGrid.css";
import type { WineProduct, CartProduct } from "../../types/products";

interface ProductGridProps {
  selectedProducts: CartProduct[];
  setSelectedProducts: (selectedProducts: CartProduct[]) => void;
}

function ProductGrid({ selectedProducts, setSelectedProducts }: ProductGridProps): JSX.Element {

  const [products, setProducts] = React.useState<WineProduct[]>([]);

  const getData = async () => {
    try {
      const response = await fetch("https://api.sampleapis.com/wines/reds");
      if (response.ok) {
        console.log('🍷', response); // TODO: remove this debugging line.
        const json = await response.json();
        
        // This wine API doesn't include prices so I'm adding a random price for each wine.
        const productsWithPrice: WineProduct[] = [...json].map(product => {
          product.price = generateRandomPrice()
          return product;
        });
  
        setProducts(productsWithPrice);
      }
    } catch (error) {
      if (error instanceof Error) {
        console.error(error.message);
      } else {
        console.error(error);
      }
    }
  };

  React.useEffect(() => {
    getData();
  }, []);

  return (
    <div className="product_grid">
      {products.map(product => {
        return <ProductCard
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
