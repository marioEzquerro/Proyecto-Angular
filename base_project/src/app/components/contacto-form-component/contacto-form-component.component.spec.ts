import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactoFormComponentComponent } from './contacto-form-component.component';

describe('ContactoFormComponentComponent', () => {
  let component: ContactoFormComponentComponent;
  let fixture: ComponentFixture<ContactoFormComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactoFormComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactoFormComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
