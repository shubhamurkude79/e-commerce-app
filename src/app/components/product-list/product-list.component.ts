import { AfterViewInit, Component, OnInit, signal } from '@angular/core';
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

export class ProductListComponent implements OnInit, AfterViewInit {
  // Initialize the signal to store products
  products = signal<ProductInterface[]>([]);
  sliderImages = signal<string[]>([
    '/images/banner/banner1.jpeg',
    '/images/banner/banner2.png',
    '/images/banner/banner3.png',
    '/images/banner/banner4.png',
  ]);
  myIndex: number = 0;

  constructor(private productService: ProductService) {}

  ngOnInit():void{
    // Fetch products using the service
    this.productService.getProducts().subscribe((products) => {
      this.products.set(products)
    })
  }
  ngAfterViewInit(): void {
    this.carousel();
  }

  carousel(): void {
    const slides = document.getElementsByClassName("mySlides") as HTMLCollectionOf<HTMLElement>;
    if (!slides.length) {
      return; // Safeguard in case slides are not available
    }
    for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    this.myIndex++;
    if (this.myIndex > slides.length) {
      this.myIndex = 1;
    }
    slides[this.myIndex - 1].style.display = "block";
    setTimeout(() => this.carousel(), 3500); // Change image every 2 seconds
  }
}
