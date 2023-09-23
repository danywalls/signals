import 'zone.js/dist/zone';
import { Component, effect, inject, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';
import { CardsService } from './services/cards.service';

@Component({
  selector: 'my-app',
  standalone: true,
  imports: [CommonModule],
  template: `
   
    <h1>{{title}}</h1>
    <h3>We have {{cardSlots()}} slots </h3>
    <p>{{lastClient()}}</p>
    <input type="text" #holder [disabled]="soldOut()"/>
    <button (click)="add(holder)"
     [disabled]="soldOut()">Save</button>

    <div *ngFor="let card of cards()">
    {{card.holder}} {{card.id}}
    </div>
  `,
})
export class App {
  private cardsService = inject(CardsService);

  title = 'Bank Open';
  cards = this.cardsService.cards;
  cardSlots = this.cardsService.cardSlots;
  soldOut = this.cardsService.soldOut;
  lastClient = this.cardsService.lastClient;

  constructor() {
    effect(() => {
      if (this.soldOut()) {
        this.title = 'Bank Closed';
      }
    });
  }

  add(holder: HTMLInputElement) {
    this.cardsService.add(holder.value);
    holder.value = '';
  }
}

bootstrapApplication(App);
