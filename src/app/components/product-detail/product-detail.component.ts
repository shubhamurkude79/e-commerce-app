import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Apollo, gql } from 'apollo-angular';
import { ProductInterface } from '../../models/product.model';
import { map } from 'rxjs';
import { CommonModule, Location } from '@angular/common';

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

  goBack(): void {
    this.location.back();
  }

}
