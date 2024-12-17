import { Component, OnInit, signal } from '@angular/core';
import { ProductInterface } from '../../models/product.model';
import { ProductService } from '../../services/product.service';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-results',
  standalone: true,
  imports: [CommonModule, RouterLink, FormsModule],
  templateUrl: './results.component.html',
  styleUrl: './results.component.css'
})
export class ResultsComponent implements OnInit{
  products = signal<ProductInterface[]>([]);
  filteredProducts = signal<ProductInterface[]>([]);

  // Search Query and Filters
  searchQuery = signal<string>('');
  selectedCategory = signal<string>('');
  selectedBrand = signal<string>('');

  constructor(
    private productService: ProductService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.productService.getProducts().subscribe((products) => {
      this.products.set(products);
      this.applyFilters();
    });

    // Fetch query params for search
    this.route.queryParams.subscribe((params) => {
      this.searchQuery.set(params['query'] || '');
      this.selectedCategory.set(params['category'] || '');
      this.applyFilters();
    });
  }

  applyFilters(): void {
    const query = this.searchQuery().toLowerCase();
    const category = this.selectedCategory();
    const brand = this.selectedBrand();

    const filtered = this.products().filter((product) => {
      const matchesQuery = product.name.toLowerCase().includes(query);
      const matchesCategory = category ? product.category === category : true;
      const matchesBrand = brand ? product.brand === brand : true;

      return matchesQuery && matchesCategory && matchesBrand;
    });

    this.filteredProducts.set(filtered);
  }

}
