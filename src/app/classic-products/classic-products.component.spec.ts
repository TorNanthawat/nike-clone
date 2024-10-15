import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassicProductsComponent } from './classic-products.component';

describe('ClassicProductsComponent', () => {
  let component: ClassicProductsComponent;
  let fixture: ComponentFixture<ClassicProductsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ClassicProductsComponent]
    });
    fixture = TestBed.createComponent(ClassicProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
