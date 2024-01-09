import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-tp3-compteur',
  templateUrl: './tp3-compteur.component.html',
  styleUrls: ['./tp3-compteur.component.scss']
})
export class Tp3CompteurComponent {
  @Output() increment = new EventEmitter<void>();

  incrementCounter() {
    this.increment.emit();
  }
}
