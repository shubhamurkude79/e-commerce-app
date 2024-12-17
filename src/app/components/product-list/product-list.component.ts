import { Component, OnInit, signal } from '@angular/core';
import { ProductInterface } from '../../models/product.model';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})

export class ProductListComponent implements OnInit {
  // Initialize the signal to store products
  products = signal<ProductInterface[]>([]);

  constructor(private productService: ProductService) {}

  ngOnInit():void{
    // Fetch products using the service
    this.productService.getProducts().subscribe((products) => {
      this.products.set(products)
    })
  }
}
