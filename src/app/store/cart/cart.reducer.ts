import { createReducer, on } from '@ngrx/store';
import { addToCart, removeFromCart, clearCart } from './cart.actions';
import { CartState, initialCartState } from './cart.state';

function saveCartToLocalStorage(cart: CartState) {
  localStorage.setItem('cart', JSON.stringify(cart));
}

function loadCartFromLocalStorage(): CartState {
  const storedCart = localStorage.getItem('cart');
  return storedCart ? JSON.parse(storedCart) : initialCartState;
}

export const cartReducer = createReducer(
  loadCartFromLocalStorage(),
  on(addToCart, (state, { item }) => {
    const existingItem = state.items.find((i) => i.id === item.id);
    const updatedCart = existingItem
      ? {
          ...state,
          items: state.items.map((i) =>
            i.id === item.id
              ? { ...i, quantity: i.quantity + item.quantity }
              : i
          ),
        }
      : { ...state, items: [...state.items, item] };
    saveCartToLocalStorage(updatedCart);
    return updatedCart;
  }),
  on(removeFromCart, (state, { id }) => {
    const updatedCart = {
      ...state,
      items: state.items.filter((item) => item.id !== id),
    };
    saveCartToLocalStorage(updatedCart);
    return updatedCart;
  }),
  on(clearCart, (state) => {
    const clearedCart = { ...state, items: [] };
    saveCartToLocalStorage(clearedCart);
    return clearedCart;
  })
);
