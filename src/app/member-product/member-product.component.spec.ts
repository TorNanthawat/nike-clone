import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MemberProductComponent } from './member-product.component';

describe('MemberProductComponent', () => {
  let component: MemberProductComponent;
  let fixture: ComponentFixture<MemberProductComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MemberProductComponent]
    });
    fixture = TestBed.createComponent(MemberProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
