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
   <input type="text" #holder />
   <button (click)="add(holder)">Save</button>
  `,
})
export class App {
  name = 'Angular';
  cardsService = inject(CardsService);
  cards = this.cardsService.cards;
  cardLeft = this.cardsService.cardsleft;

  add(holder: HTMLInputElement) {
    this.cardsService.add(holder.value);
    holder.value = '';
  }
}

bootstrapApplication(App);
