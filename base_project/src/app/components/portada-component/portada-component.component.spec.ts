import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortadaComponentComponent } from './portada-component.component';

describe('PortadaComponentComponent', () => {
  let component: PortadaComponentComponent;
  let fixture: ComponentFixture<PortadaComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PortadaComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PortadaComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
