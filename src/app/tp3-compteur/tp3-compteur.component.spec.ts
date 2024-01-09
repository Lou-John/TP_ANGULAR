import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tp3CompteurComponent } from './tp3-compteur.component';

describe('Tp3CompteurComponent', () => {
  let component: Tp3CompteurComponent;
  let fixture: ComponentFixture<Tp3CompteurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Tp3CompteurComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Tp3CompteurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
