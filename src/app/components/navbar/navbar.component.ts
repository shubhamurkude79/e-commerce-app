import { Component, HostListener } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { selectCartItemCount } from '../../store/cart/cart.selectors';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, CommonModule, FormsModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  cartItemCount$: Observable<number>;
  isScrolled: boolean = false;

  // Search input and category dropdown state
  selectedCategory:string = '';
  searchQuery:string = '';

  // Predefined product categories
  categories: string[] = ['Electronics', 'Beauty and Cosmetics', 'Clothing and Fashion'];

  constructor(private store: Store, private router: Router){
    this.cartItemCount$ = this.store.select(selectCartItemCount);
  }

  @HostListener('window:scroll', [])
  onScroll(): void {
    this.isScrolled = window.scrollY > 0; // Detect scrolling
  }

  onSearch():void {
    // Navigate to the results page with query parameters
    this.router.navigate(['/results'], {
      queryParams: {
        query: this.searchQuery,
        category: this.selectedCategory
      }
    });
  }

  onLogout(): void {
    console.log('User logged out');
    this.router.navigate(['/login']);
  }
  
}
