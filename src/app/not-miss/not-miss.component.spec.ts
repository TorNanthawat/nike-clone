import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotMissComponent } from './not-miss.component';

describe('NotMissComponent', () => {
  let component: NotMissComponent;
  let fixture: ComponentFixture<NotMissComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NotMissComponent]
    });
    fixture = TestBed.createComponent(NotMissComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
