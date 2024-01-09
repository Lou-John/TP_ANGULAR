import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tp2LigneComponent } from './tp2-ligne.component';

describe('Tp2LigneComponent', () => {
  let component: Tp2LigneComponent;
  let fixture: ComponentFixture<Tp2LigneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Tp2LigneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Tp2LigneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
