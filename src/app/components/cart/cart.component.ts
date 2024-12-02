import { Component } from '@angular/core';
import { Observable, of } from 'rxjs';
import { CartItem } from '../../store/cart/cart.state';
import { Store } from '@ngrx/store';
import { selectCartItems, selectCartTotal } from '../../store/cart/cart.selectors';
import { clearCart, removeFromCart } from '../../store/cart/cart.actions';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {
  cartItems$: Observable<CartItem[]> = of([]); // Initialize as an empty array
  total$: Observable<number> = of(0); // Initialize as 0

  constructor(private store: Store){
    this.cartItems$ = this.store.select(selectCartItems);
    this.total$ = this.store.select(selectCartTotal);
  }

  removeFromCart(id: string):void {
    this.store.dispatch(removeFromCart({ id }));
  }

  clearCart():void {
    this.store.dispatch(clearCart());
  }

}
