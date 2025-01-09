import { createReducer, on } from "@ngrx/store";
import { initialWishlistState } from "./wishlist.state";
import { addToWishlist, removeFromWishlist } from "./wishlist.actions";

export const wishlistReducer = createReducer(
    initialWishlistState,
    on(addToWishlist, (state, { product }) => {
        const exists = state.items.some((item) => item.id === product.id);
        if (exists) return state; // Prevent duplicates
        return {...state, items: [...state.items, product]}
    }),
    on(removeFromWishlist, (state, { id }) => ({
        ...state,
        items: state.items.filter((item) => item.id !== id)
    }))
);