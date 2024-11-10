import { Component, signal } from '@angular/core';
import { ProductInterface } from '../../models/product.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-lists',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListsComponent {
  products = signal<ProductInterface[]>([
    { id: '1', name: 'Airpods', description: 'A great product',
      price: 29.99, imageUrl: 'images/electronics/small/airpods.jpeg' },
    { id: '2', name: 'Balck Smartwatch', description: 'Another amazing product',
      price: 49.99, imageUrl: 'images/electronics/small/balck-smartwatch.jpeg' },
    { id: '3', name: 'Camer', description: 'Another amazing product',
      price: 49.99, imageUrl: 'images/electronics/small/camera.jpeg' },
    { id: '4', name: 'Digital Camera', description: 'Another amazing product',
      price: 49.99, imageUrl: 'images/electronics/small/digital-camera.jpeg' },
    { id: '5', name: 'Earpod', description: 'Another amazing product',
      price: 49.99, imageUrl: 'images/electronics/small/earpods.jpeg' },
    { id: '6', name: 'Headset', description: 'Another amazing product',
      price: 49.99, imageUrl: 'images/electronics/small/headset.jpeg' },
    { id: '7', name: 'Ipad Air', description: 'Another amazing product',
      price: 49.99, imageUrl: 'images/electronics/small/ipad-air.jpeg' },
    { id: '8', name: 'Ipad', description: 'Another amazing product',
      price: 49.99, imageUrl: 'images/electronics/small/ipad.jpeg' },
    { id: '9', name: 'Iphone Earbuds', description: 'Another amazing product',
      price: 49.99, imageUrl: 'images/electronics/small/iphone-earbuds.jpeg' },
    { id: '10', name: 'Macbook', description: 'Another amazing product',
      price: 49.99, imageUrl: 'images/electronics/small/macbook.jpeg' },
    { id: '11', name: 'Mouse', description: 'Another amazing product',
      price: 49.99, imageUrl: 'images/electronics/small/mouse.jpeg' },
    { id: '12', name: 'Old Laptop', description: 'Another amazing product',
      price: 49.99, imageUrl: 'images/electronics/small/old-laptop.jpeg' },
    { id: '13', name: 'Pendrive', description: 'Another amazing product',
      price: 49.99, imageUrl: 'images/electronics/small/pendrive.jpeg' },
    { id: '14', name: 'Printer', description: 'Another amazing product',
      price: 49.99, imageUrl: 'images/electronics/small/printer.jpeg' },
    { id: '15', name: 'Smartwatch', description: 'Another amazing product',
      price: 49.99, imageUrl: 'images/electronics/small/smartwatch.jpeg' },
    { id: '16', name: 'Tablet', description: 'Another amazing product',
      price: 49.99, imageUrl: 'images/electronics/small/tablet.jpeg' },
    { id: '17', name: 'Wireless Headset', description: 'Another amazing product',
      price: 49.99, imageUrl: 'images/electronics/small/wireless-headset.jpeg' },
    
  ]);
}
