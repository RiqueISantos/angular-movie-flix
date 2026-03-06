import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  imports: [],
  templateUrl: './card.html',
  styleUrl: './card.css',
})
export class Card {
  @Input() title: string = '';
  @Input() description: string = '';
  @Input() duration: string = '';
  @Input() ageRating: string = '';
  @Input() approval: string = '';
  @Input() platform: string = '';
  @Input() platformLogo: string = '';
  @Input() isTopTen: boolean = false;
}
