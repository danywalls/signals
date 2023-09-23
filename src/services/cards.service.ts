import { Injectable } from '@angular/core';

export type Card = {
  id: string;
  holder: string;
  status: string;
};

@Injectable({ providedIn: 'root' })
export class CardsService {
  cards: Array<Card> = [];
  cardsleft: number = 3;
  lastClient = 'No clients yet!';

  add(holder: string) {
    const card = {
      id: Math.random().toFixed(),
      holder,
      status: 'pending',
    };
    this.cards = [...this.cards, card];

    this.cardsleft--;
    this.lastClient = `Thanks ${holder}!!`;

    console.log(this.cards, this.lastClient, this.cardsleft);
  }
}
