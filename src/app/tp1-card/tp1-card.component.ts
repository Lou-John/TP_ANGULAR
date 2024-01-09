import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './tp1-card.component.html',
  styles: [
    `
      .card {
        width: 300px;
        margin: 20px;
      }
    `,
  ],
})
export class CardComponent {
  @Input() titre: string = 'Titre';
  @Input() sousTitre: string = 'Sous-titre';
  @Input() description: string = 'Description';
  @Input() lien: string = 'https://example.com';
  @Input() texteLien: string = 'En savoir plus';
}
