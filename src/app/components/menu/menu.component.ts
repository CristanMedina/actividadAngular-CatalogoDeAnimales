import { Component } from '@angular/core';
import { CardComponent } from '../card/card.component';
import { FormsModule } from '@angular/forms';
import { Card } from '../../interface/card';

@Component({
  selector: 'app-menu',
  imports: [CardComponent, FormsModule],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {
    animales:Card[]=[
        {
            image: "img/gorila.jpg",
            title: "Gorila",
            description: "El gorila es un animal grande y fuerte que vive en las selvas de África. Son conocidos por su inteligencia y su comportamiento social.",
        },
        {
            image: "img/tigre.jpg",
            title: "Tigre",
            description: "El tigre es un felino grande y poderoso que habita en Asia. Son conocidos por su pelaje rayado y su habilidad para cazar.",
        }
    ]

    formularioVisible: boolean = false;

    image: string = "";
    title: string = "";
    description: string = "";

    flipFormulario(){
        this.formularioVisible = !this.formularioVisible;
    }

    addAnimal(){
        const nuevoAnimal: Card = {
            image: this.image,
            title: this.title,
            description: this.description
        };

        this.animales.push(nuevoAnimal);

        this.image = "";
        this.title = "";
        this.description = "";

        this.flipFormulario();
    }
}
