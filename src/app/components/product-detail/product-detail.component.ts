import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Apollo, gql } from 'apollo-angular';
import { ProductInterface } from '../../models/product.model';
import { map } from 'rxjs';
import { CommonModule, Location } from '@angular/common';
import { CartItem } from '../../store/cart/cart.state';
import { Store } from '@ngrx/store';
import { addToCart } from '../../store/cart/cart.actions';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css'
})
export class ProductDetailComponent {
  private route = inject(ActivatedRoute);
  private apollo = inject(Apollo);
  private location = inject(Location)
  product: ProductInterface | null = null;

  constructor(private store: Store){}

  ngOnInit(): void {
    const productId = this.route.snapshot.paramMap.get('id');

    if (productId) {
      const GET_PRODUCT_BY_ID = gql`
        query GetProduct($id: ID!) {
          product(id: $id) {
            id
            name
            description
            price
            imageUrl
          }
        }
      `;

      this.apollo
        .watchQuery<any>({
          query: GET_PRODUCT_BY_ID,
          variables: { id: productId },
        })
        .valueChanges.pipe(map((result) => result.data.product))
        .subscribe((product) => {
          this.product = product;
        });
    }
  }

  addToCart(product: ProductInterface | null): void{
    if(product){
      const cartItem: CartItem = {
        ...product,
        quantity: 1, // Default quantity
      };
      this.store.dispatch(addToCart({ item: cartItem }));
    }
  }

  goBack(): void {
    this.location.back();
  }

}
