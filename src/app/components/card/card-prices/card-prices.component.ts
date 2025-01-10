import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-prices',
  imports: [],
  templateUrl: './card-prices.component.html',
  styleUrl: './card-prices.component.scss'
})
export class CardPricesComponent {

  @Input()
  gamePrice:string = "$ 145,00";
}
