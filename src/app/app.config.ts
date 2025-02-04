import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter, Route } from '@angular/router';
import { provideStore } from '@ngrx/store';
import { cartReducer } from './store/cart/cart.reducer';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { CartComponent } from './components/cart/cart.component';
import { ResultsComponent } from './components/results/results.component';
import { WishlistComponent } from './components/wishlist/wishlist.component';
import { wishlistReducer } from './store/wishlist/wishlist.reducer';
import { ProfileComponent } from './components/profile/profile.component';
import { EditProfileComponent } from './components/profile/edit-profile/edit-profile.component';

const routes: Route[] = [
  { path: 'products', component: ProductListComponent },
  { path: 'cart', component: CartComponent},
  { path: 'product/:id', component: ProductDetailComponent },
  { path: 'results', component: ResultsComponent },
  { path: 'wishlist', component: WishlistComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'profile/edit', component: EditProfileComponent },
  { path: '**', redirectTo:'products', pathMatch: 'full'}
  // Add more routes as needed
];

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideStore({ cart: cartReducer, wishlist: wishlistReducer  })
  ]
};
