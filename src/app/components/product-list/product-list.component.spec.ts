import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductListsComponent } from './product-list.component';

describe('ProductListsComponent', () => {
  let component: ProductListsComponent;
  let fixture: ComponentFixture<ProductListsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductListsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductListsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
