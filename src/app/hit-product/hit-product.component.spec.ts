import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HitProductComponent } from './hit-product.component';

describe('HitProductComponent', () => {
  let component: HitProductComponent;
  let fixture: ComponentFixture<HitProductComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HitProductComponent]
    });
    fixture = TestBed.createComponent(HitProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
