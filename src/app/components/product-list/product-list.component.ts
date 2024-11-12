import { Component, inject, OnInit, signal } from '@angular/core';
import { ProductInterface } from '../../models/product.model';
import { CommonModule } from '@angular/common';
import { Apollo, gql } from 'apollo-angular';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})

export class ProductListComponent implements OnInit {
  private apollo = inject(Apollo)
  // Initialize the signal to store products
  products = signal<ProductInterface[]>([]);

  // Define the GraphQL query
  private GET_PRODUCTS_QUERY = gql`
    query GetProducts {
      products {
        id
        name
        description
        price
        imageUrl
      }
    }
  `
  ngOnInit():void{
    // Fetch products from the GraphQL server
    this.apollo.watchQuery<{products: ProductInterface[] }>({
      query: this.GET_PRODUCTS_QUERY,
    }).valueChanges.subscribe((result) => {
      // Update the signal with fetched products
      this.products.set(result.data.products);
    });
  }
}
