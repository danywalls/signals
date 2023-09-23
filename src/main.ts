import 'zone.js/dist/zone';
import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';
import { CardsService } from './services/cards.service';

@Component({
  selector: 'my-app',
  standalone: true,
  imports: [CommonModule],
  template: `
   
   <h3>We have {{cardLeft}} cards </h3>
   <p>{{lastClient}}</p>
   <input type="text" #holder />
   <button (click)="add(holder)">Save</button>

   <div *ngFor="let card of cards">
   
   {{card.holder}} {{card.id}}
   </div>

  `,
})
export class App {
  private cardsService = inject(CardsService);

  cards = this.cardsService.cards;
  cardLeft = this.cardsService.cardsleft;
  lastClient = this.cardsService.lastClient;

  add(holder: HTMLInputElement) {
    this.cardsService.add(holder.value);
    holder.value = '';
  }
}

bootstrapApplication(App);
