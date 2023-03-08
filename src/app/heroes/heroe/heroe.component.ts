import { Component } from '@angular/core';


@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['../../../styles.css']
})
export class HeroeComponent {
  nombre: string = 'Ironman';
  edad:   number = 45;

  get nombreCapitalizado(): string {
    return this.nombre.toUpperCase();
  }

  obtenerNombre():string {
    return `${this.nombre} - ${this.edad}`;
  }

  cambiarNombre(): void {
    this.nombre = 'Spriderman';
  }
  cambiarEdad():void {
    this.edad = 30;
  }
}
