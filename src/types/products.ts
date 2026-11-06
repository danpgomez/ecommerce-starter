export interface WineProduct {
    id: number;
    wine: string;
    image: string;
    price: number;
    winery: string;
    rating: { average: number };
}

export interface CartProduct extends WineProduct {
    quantity: number;
}