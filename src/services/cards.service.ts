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
  demo = signal<Card>({ id: '3', holder: 'Ramon', status: 'Active' });
  soldOut = computed(() => this.cardSlots() <= 0);

  lastClient = signal('No clients yet!');

  add(holder: string) {
    const card = {
      id: Math.random().toFixed(),
      holder,
      status: 'pending',
    };
    console.log(this.demo());
    this.demo.mutate((p) => (p.holder = 'Lebron'));
    console.log(this.demo());
    
    this.cards.update((p) => [...p, card]);
    this.cardSlots.update((p) => p - 1);
    console.log(this.cardSlots());
    this.lastClient.set(`Thanks ${holder}`!!);
  }
}
