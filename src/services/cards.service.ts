import { computed, Injectable, signal, Signal } from '@angular/core';

export type Card = {
  id: string;
  holder: string;
  status: string;
};

@Injectable({ providedIn: 'root' })
export class CardsService {
  cards = signal<Card[]>([
    {
      id: '1',
      holder: 'Dany',
      status: 'Active',
    },
    {
      id: '2',
      holder: 'Edgar',
      status: 'Active',
    },
  ]);

  cardSlots = signal<number>(3);

  canAddCard = computed(() => this.cardSlots() > 0);

  lastClient = signal('No clients yet!');

  add(holder: string) {
    const card = {
      id: Math.random().toFixed(),
      holder,
      status: 'pending',
    };
    // this.cards = [...this.cards, card];

    // this.cardsleft--;
    // this.lastClient = `Thanks ${holder}!!`;

    // console.log(this.cards, this.lastClient, this.cardsleft);
  }
}
