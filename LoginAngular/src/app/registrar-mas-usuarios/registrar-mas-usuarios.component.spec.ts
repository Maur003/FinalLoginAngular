import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrarMasUsuariosComponent } from './registrar-mas-usuarios.component';

describe('RegistrarMasUsuariosComponent', () => {
  let component: RegistrarMasUsuariosComponent;
  let fixture: ComponentFixture<RegistrarMasUsuariosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistrarMasUsuariosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistrarMasUsuariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
