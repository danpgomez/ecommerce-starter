import Product from "../Product";
import "./ProductGrid.css";

function ProductGrid() {
  const numOfImages = new Array(1, 2, 3, 4, 5, 6, 7, 8, 9);
  console.log(numOfImages);

  return (
    <div className="product_grid">
      {numOfImages.map((_, index) => (
        <Product key={index} url="https://placehold.co/200" />
      ))}
    </div>
  );
}

export default ProductGrid;
