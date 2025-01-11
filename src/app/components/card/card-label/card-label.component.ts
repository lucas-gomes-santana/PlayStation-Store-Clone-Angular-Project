import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-label',
  imports: [],
  templateUrl: './card-label.component.html',
  styleUrl: './card-label.component.scss'
})
export class CardLabelComponent {

   @Input()
   gameType:string = "Triple  Game!";
}
