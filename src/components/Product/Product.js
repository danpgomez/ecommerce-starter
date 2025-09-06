import "./Product.css";
import Rating from "../Rating";

function Product({ product }) {
  return (
    <article className="product_card">
      <div className="product_image_wrapper">
        <img src={product.image} alt={product.wine}/>
      </div>
      <p className="product_title">{product.wine}</p>
      <p className="product_winery">{product.winery}</p>
      <Rating ratingValue={product.rating.average} />
    </article>
  );
}

export default Product;
