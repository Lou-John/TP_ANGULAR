import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tp4AnimalCardComponent } from './tp4-animal-card.component';

describe('Tp4AnimalCardComponent', () => {
  let component: Tp4AnimalCardComponent;
  let fixture: ComponentFixture<Tp4AnimalCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Tp4AnimalCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Tp4AnimalCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
