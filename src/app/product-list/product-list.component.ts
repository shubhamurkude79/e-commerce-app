import { Component, inject, OnInit } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { gql } from '@apollo/client/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent implements OnInit{
  private apollo = inject(Apollo);
  products$!: Observable<any>;
  
  ngOnInit(): void {
    const GET_PRODUCTS = gql`
      query {
        products {
          id
          name
          description
          price
        }
      }
    `;
    this.products$ = this.apollo
      .watchQuery<any>({ query: GET_PRODUCTS })
      .valueChanges.pipe(map(result => result.data.products));
  }
}
