import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypeSportComponent } from './type-sport.component';

describe('TypeSportComponent', () => {
  let component: TypeSportComponent;
  let fixture: ComponentFixture<TypeSportComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TypeSportComponent]
    });
    fixture = TestBed.createComponent(TypeSportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
