import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styles: []
})
export class HijoComponent implements OnInit {

  @Input() contador: number;
  @Output() cambioContador = new EventEmitter<number>();
  constructor() { }


  multiplicar() {
      this.contador *= 2;
      this.cambioContador.emit(this.contador);
  }

  dividir() {
    this.contador /= 2;
    this.cambioContador.emit(this.contador);
  }
  reset(cambioContador: number) {
    this.contador = cambioContador;
    this.cambioContador.emit(cambioContador);
  }
  ngOnInit() {
  }

}
