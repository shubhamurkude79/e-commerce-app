import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter, Route } from '@angular/router';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { CartComponent } from './components/cart/cart.component';

const routes: Route[] = [
  { path: 'products', component: ProductListComponent },
  { path: 'cart', component: CartComponent},
  { path: 'product/:id', component: ProductDetailComponent },
  { path: '**', redirectTo:'products', pathMatch: 'full'}
  // Add more routes as needed
];

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes)]
};
