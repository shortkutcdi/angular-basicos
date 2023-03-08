import { Component } from '@angular/core';

@Component({
  selector: 'contador-root',
  templateUrl: './contador.component.html',
  // styleUrls: ['../../app.component.css']
})
export class ContadorComponent {
  titulo: string = 'Contador App';
  numero: number = 0;
  base:   number = 5;

  acumular( valor: number ){
    this.numero += valor;
  }
}git log