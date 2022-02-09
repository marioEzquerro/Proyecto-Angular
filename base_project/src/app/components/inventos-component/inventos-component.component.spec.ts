import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InventosComponentComponent } from './inventos-component.component';

describe('InventosComponentComponent', () => {
  let component: InventosComponentComponent;
  let fixture: ComponentFixture<InventosComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InventosComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InventosComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
