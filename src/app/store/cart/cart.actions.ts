import {createAction, props} from '@ngrx/store';
import { CartItem } from './cart.state';

export const addToCart = createAction(
    '[Cart] Add to cart',
    props<{ item: CartItem }>()
);

export const removeFromCart = createAction(
    '[Cart] Remove from cart',
    props<{ id: string }>()
);

export const clearCart = createAction('[Cart] Clear cart');