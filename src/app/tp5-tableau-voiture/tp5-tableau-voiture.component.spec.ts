import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tp5TableauVoitureComponent } from './tp5-tableau-voiture.component';

describe('Tp5TableauVoitureComponent', () => {
  let component: Tp5TableauVoitureComponent;
  let fixture: ComponentFixture<Tp5TableauVoitureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Tp5TableauVoitureComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Tp5TableauVoitureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
