import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DescripEventComponent } from './descrip-event.component';

describe('DescripEventComponent', () => {
  let component: DescripEventComponent;
  let fixture: ComponentFixture<DescripEventComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DescripEventComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DescripEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
