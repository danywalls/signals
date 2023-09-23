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
   
   <input type="text" #holder />
   <button (click)="add(holder.value)">Save</button>
  `,
})
export class App {
  
  name = 'Angular';
  cardsService = inject(CardsService)
  cards = this.cardsService.cards;
  cardLeft = this.cardsService.cardsleft;
  
  add(holder: string){
    this.cardsService.add(holder);
  }
}

bootstrapApplication(App);
