import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-tp2-ligne',
  templateUrl: './tp2-ligne.component.html',
  styleUrls: ['./tp2-ligne.component.scss']
})
export class Tp2LigneComponent {
  @Input() id: string = '0';
  @Input() username: string = 'John';
  @Input() email: string = 'john.doe@gmail.com';
}
