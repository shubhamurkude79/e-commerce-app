import { AfterViewInit, Component, OnDestroy, OnInit, signal, ViewChild, TemplateRef } from '@angular/core';
import { ProductInterface } from '../../models/product.model';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ProductService } from '../../services/product.service';
import { Store } from '@ngrx/store';
import { addToWishlist } from '../../store/wishlist/wishlist.actions';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})

export class ProductListComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild('loading', { static: true }) loading!: TemplateRef<any>;

  // Initialize the signal to store products
  products = signal<ProductInterface[]>([]);
  sliderImages = signal<string[]>([
    '/images/banner/banner1.jpeg',
    '/images/banner/banner2.png',
    '/images/banner/banner3.png',
    '/images/banner/banner4.png',
  ]);
  myIndex: number = 0;
  private carouselTimeout: any; // Reference to the setTimeout
  public likedProducts: boolean[] = [];

  constructor(private productService: ProductService, private store: Store) {
    this.likedProducts = Array()
  }

  ngOnInit():void{
    // Fetch products using the service
    this.productService.getProducts().subscribe((products) => {
      this.products.set(products);
      this.likedProducts = Array(products.length).fill(false); // Initialize likedProducts here
    })
  }
  ngAfterViewInit(): void {
    this.carousel();
  }

  addToWishlist(product: ProductInterface): void {
    this.store.dispatch(addToWishlist({ product }));
  }

  toggleWishlist(index: number): void {
    this.likedProducts[index] = !this.likedProducts[index];
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

    // Save the timeout reference to clear it later
    this.carouselTimeout = setTimeout(() => this.carousel(), 3500);
  }

  ngOnDestroy(): void {
    if(this.carouselTimeout){
      clearTimeout(this.carouselTimeout);
    }
  }
}
