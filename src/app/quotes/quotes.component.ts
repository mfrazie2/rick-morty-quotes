import {Component} from '@angular/core';

interface Quote {
  quote:string
  speaker:string
}

@Component({
  selector: 'quotes',
  styleUrls: ['./quotes.component.css'],
  templateUrl: './quotes.component.html'
})
export class QuotesComponent {
  quote:Quote;

  constructor() {
    this.quote = {
      quote: 'Listen, I\'m not the nicest guy in the universe, because I\'m the smartest, and being nice is something stupid people do to hedge their bets.',
      speaker: 'Rick'
    }
  }
}
