import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { selectCartItemCount } from '../../store/cart/cart.selectors';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  cartItemCount$: Observable<number>;

  constructor(private store: Store){
    this.cartItemCount$ = this.store.select(selectCartItemCount);
  }
}
