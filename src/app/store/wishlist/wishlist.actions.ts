import { createAction, props } from "@ngrx/store";
import { ProductInterface } from "../../models/product.model";

export const addToWishlist = createAction(
    '[Wishlist] Add to wishlist',
    props<{product: ProductInterface}>()
);

export const removeFromWishlist = createAction(
    '[Wishlist] Remove from wishlist',
    props<{id: string}>()
);