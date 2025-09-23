import { Component, Input } from '@angular/core';
import { Card } from '../../interface/card';

@Component({
  selector: 'app-card',
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
    @Input() myCard!: Card;
}
