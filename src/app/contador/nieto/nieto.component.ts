import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.reducer';
import { ReiniciarAction } from '../contador.action';

@Component({
  selector: 'app-nieto',
  templateUrl: './nieto.component.html',
  styles: []
})
export class NietoComponent implements OnInit {
  @Input() contador: number;
  @Output() cambioContador = new EventEmitter<number>();
  constructor(public store: Store<AppState>) {}

  reset() {
    const accion = new  ReiniciarAction;
    this.store.dispatch( accion );
  }
  ngOnInit() {
    this.store.select('contador').subscribe( contador => {
      this.contador = contador;
      console.log(contador);
     });
  }

}
