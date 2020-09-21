import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElemEventComponent } from './elem-event.component';

describe('ElemEventComponent', () => {
  let component: ElemEventComponent;
  let fixture: ComponentFixture<ElemEventComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ElemEventComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ElemEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
