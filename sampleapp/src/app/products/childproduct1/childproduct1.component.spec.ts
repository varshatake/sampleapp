import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Childproduct1Component } from './childproduct1.component';

describe('Childproduct1Component', () => {
  let component: Childproduct1Component;
  let fixture: ComponentFixture<Childproduct1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Childproduct1Component]
    });
    fixture = TestBed.createComponent(Childproduct1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
