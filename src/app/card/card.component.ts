import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  @Input() cardNumber: string;
  @Input() name: string;
  @Input() expiration: string;

  get formattedCardNumber(): string {
    return this.cardNumber
      .replace(/\D/g, '')          // remove non-digits
      .replace(/(.{4})/g, '$1 ')   // add space every 4 digits
      .trim();
  }
}
