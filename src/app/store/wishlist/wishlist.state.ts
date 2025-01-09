import { ProductInterface } from "../../models/product.model";

export interface WishlistState {
    items: ProductInterface[];
}

export const initialWishlistState: WishlistState = {
    items: [],
};