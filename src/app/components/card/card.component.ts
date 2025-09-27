import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Card } from '../../interface/card';

@Component({
  selector: 'app-card',
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
    @Input() myCard!: Card;

    @Output() selectedCard = new EventEmitter<number>();

    @Input() index: number = 0;

    selectCard(){
        console.log("Se va a emitir el evento selectedCard");
        this.selectedCard.emit(this.index);
    }
}
