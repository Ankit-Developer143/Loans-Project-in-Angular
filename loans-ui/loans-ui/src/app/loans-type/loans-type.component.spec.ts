import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoansTypeComponent } from './loans-type.component';

describe('LoansTypeComponent', () => {
  let component: LoansTypeComponent;
  let fixture: ComponentFixture<LoansTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoansTypeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoansTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
