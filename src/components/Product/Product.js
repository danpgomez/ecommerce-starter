import { useState } from "react";
import "./Product.css";
import Rating from "../Rating";

function Product({ product, selectedProducts, setSelectedProducts }) {
  const [isSelectedProduct, setIsSelectedProduct] = useState(false);
  const productClass = isSelectedProduct ? "product_card selected" : "product_card";
  
  return (
    <button 
    className={productClass}
    onClick={() => {
      setIsSelectedProduct(true);
      const updatedProducts = [...selectedProducts];
      updatedProducts.push(product);
      setSelectedProducts(updatedProducts);
    }}
    >
    <article>
      <div className="product_image_wrapper">
        <img src={product.image} alt={product.wine}/>
      </div>
      <p className="product_title">{product.wine}</p>
      <p className="product_winery">{product.winery}</p>
      <p className="product_price">{'$' + product.price}</p>
      <Rating ratingValue={product.rating.average} />
    </article>
    </button>
  );
}

export default Product;
