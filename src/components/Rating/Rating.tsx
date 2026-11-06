import { JSX } from "react";

interface RatingProps {
    ratingValue: number;
}

function Rating({ ratingValue }: RatingProps): JSX.Element {
    return <p className="product_rating">Average Rating: {ratingValue}</p>;
}

export default Rating;