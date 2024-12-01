import { createReducer, on } from '@ngrx/store';
import { addToCart, removeFromCart, clearCart } from './cart.actions';
import { CartState, initialCartState } from './cart.state';

export const cartReducer = createReducer(
  initialCartState,
  on(addToCart, (state, { item }) => {
    const existingItem = state.items.find(i => i.id === item.id);
    if (existingItem) {
      // If item exists, update its quantity
      return {
        ...state,
        items: state.items.map(i =>
          i.id === item.id ? { ...i, quantity: i.quantity + item.quantity } : i
        ),
      };
    } else {
      // If item doesn't exist, add it to the cart
      return { ...state, items: [...state.items, item] };
    }
  }),
  on(removeFromCart, (state, { id }) => ({
    ...state,
    items: state.items.filter(item => item.id !== id),
  })),
  on(clearCart, state => ({ ...state, items: [] }))
);
