export interface Product {
    id?: number;
    name: string;
    price: number;
    description: string;
    image?: string | ArrayBuffer | null;
    rating: number;
    category?: string;
    quantity?: number;
    isAvailable?: boolean;
   
    userId?: number;
    brandId?: number;
    sizeId?: number;
    colorId?: number;
    categoryId?: number;
    subCategoryId?: number;
    discountId?: number;
    isFavourite?: boolean;

}
