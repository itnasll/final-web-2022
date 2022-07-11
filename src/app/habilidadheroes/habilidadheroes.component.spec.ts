import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HabilidadheroesComponent } from './habilidadheroes.component';

describe('HabilidadheroesComponent', () => {
  let component: HabilidadheroesComponent;
  let fixture: ComponentFixture<HabilidadheroesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HabilidadheroesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HabilidadheroesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

