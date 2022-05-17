import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductByManufacturerComponent } from './product-by-manufacturer.component';

describe('ProductByManufacturerComponent', () => {
  let component: ProductByManufacturerComponent;
  let fixture: ComponentFixture<ProductByManufacturerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductByManufacturerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductByManufacturerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
