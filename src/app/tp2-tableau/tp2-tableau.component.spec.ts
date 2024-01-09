import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tp2TableauComponent } from './tp2-tableau.component';

describe('Tp2TableauComponent', () => {
  let component: Tp2TableauComponent;
  let fixture: ComponentFixture<Tp2TableauComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Tp2TableauComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Tp2TableauComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
