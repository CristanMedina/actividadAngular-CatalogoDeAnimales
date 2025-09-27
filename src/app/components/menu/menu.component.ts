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
            especies: ["Gorila de montaña", "Gorila de llanura"]
        },
        {
            image: "img/tigre.jpg",
            title: "Tigre",
            description: "El tigre es un felino grande y poderoso que habita en Asia. Son conocidos por su pelaje rayado y su habilidad para cazar.",
            especies: ["Tigre de Bengala", "Tigre Siberiano"]
        }
    ]

    formularioVisible: boolean = false;

    image: string = "";
    title: string = "";
    description: string = "";
    especies: string[] = [];

    selectedIndex: number = 0;

    addEspecie(especieAAgregar: string) {
      if (especieAAgregar.trim() !== '') {
        this.especies.push(especieAAgregar.trim());
      }
    }

    flipFormulario(){
        this.formularioVisible = !this.formularioVisible;
    }

    addAnimal(){
        const nuevoAnimal: Card = {
            image: this.image,
            title: this.title,
            description: this.description,
            especies: this.especies
        };

        this.animales.push(nuevoAnimal);

        this.image = "";
        this.title = "";
        this.description = "";
        this.especies = [];

        this.flipFormulario();
    }

    recibirValor(valorRecibido: number){
        this.selectedIndex = valorRecibido;
        console.log("Valor recibido en el componente Card: " + valorRecibido);
    }
}
