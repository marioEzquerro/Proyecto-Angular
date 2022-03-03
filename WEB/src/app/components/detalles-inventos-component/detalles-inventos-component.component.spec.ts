import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetallesInventosComponentComponent } from './detalles-inventos-component.component';

describe('DetallesInventosComponentComponent', () => {
  let component: DetallesInventosComponentComponent;
  let fixture: ComponentFixture<DetallesInventosComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetallesInventosComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetallesInventosComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
