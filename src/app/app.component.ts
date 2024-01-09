import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'TP ANGULAR';

  counterValue = 0;

  incrementCounter() {
    this.counterValue++;
  }

}

interface Voiture {
  id: number
  marque: string
  modele: string
}
