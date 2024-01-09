import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-tp4-animal-card',
  templateUrl: './tp4-animal-card.component.html',
  styleUrls: ['./tp4-animal-card.component.scss']
})
export class Tp4AnimalCardComponent {
  @Input() photo: string = 'https://img.freepik.com/premium-vector/default-image-icon-vector-missing-picture-page-website-design-mobile-app-no-photo-available_87543-11093.jpg';
  @Input() nom: string = 'No photo';
  @Input() cri: string = 'Pas de cri';

  showAnimalSound() {
    alert(`Le ${this.nom} crie fièrement: ${this.cri}!`);
  }
}
