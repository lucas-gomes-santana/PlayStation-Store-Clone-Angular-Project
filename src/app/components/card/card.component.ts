import { Component, Input } from '@angular/core';
import { CardLabelComponent } from "./card-label/card-label.component";
import { CardPricesComponent } from "./card-prices/card-prices.component";

@Component({
  selector: 'app-card',
  imports: [CardLabelComponent, CardPricesComponent],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {

  @Input()
  gameCover:string = "https://cdn1.epicgames.com/spt-assets/ca9ef1bcf2f54043baac351366aec677/black-myth-wukong-jjjfw.png";

  @Input()
  gameType:string = "Triple AAA Game!"

  @Input()
  gamePrice:string = "$ 187,00";

}
