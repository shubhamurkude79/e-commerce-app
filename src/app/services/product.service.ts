import { inject, Injectable } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';
import { ProductInterface } from '../models/product.model';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private apollo = inject(Apollo)

  // Define the GraphQL query
  private GET_PRODUCTS_QUERY = gql`
    query GetProducts {
      products {
        id
        name
        description
        category
        brand
        price
        imageUrl
      }
    }
  `
  // Fetch products from the GraphQL server
  getProducts():Observable<ProductInterface[]>{
    return this.apollo
    .watchQuery<{ products: ProductInterface[] }>({
      query: this.GET_PRODUCTS_QUERY,
    })
    .valueChanges.pipe(map((result) => result.data.products))
  }

}
