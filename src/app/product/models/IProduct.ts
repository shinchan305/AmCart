export interface IProduct {
    id: string,
    name: string,
    price: number,
    discount?: number,
    categories: string[],
    brand: string,
    rating: number,
    images: string[],
    isWishlisted: boolean
}