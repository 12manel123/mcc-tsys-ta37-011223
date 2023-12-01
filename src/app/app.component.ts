import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  valorEnPantalla: string = '';
  resultadoEnPantalla: string = '';
  primerOperando: number | null = null;
  operacion: string[] = [];
  agregarAlValorEnPantalla(valor: string): void {
    this.valorEnPantalla += valor;
  }

  borrarDelValorEnPantalla(): void {
    this.valorEnPantalla = this.valorEnPantalla.slice(0, -1);
  }

  limpiarPantalla(): void {
    this.valorEnPantalla = '';
    this.operacion = [];
  }

  realizarOperacion(operacion: string): void {
    this.operacion.push(this.valorEnPantalla, operacion);
    this.valorEnPantalla = '';
  }

  calcularResultado(): void {
    this.operacion.push(this.valorEnPantalla);
    const expresion = this.operacion.join(' ');
    this.valorEnPantalla = eval(expresion).toString();
    this.operacion = [];
  }
}