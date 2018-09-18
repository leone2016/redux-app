import { Component, OnInit} from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.reducer';
import { MultiplicarAction, DividirAction } from '../contador.action';



@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styles: []
})
export class HijoComponent implements OnInit {

  contador: number;
  constructor( private store: Store<AppState> ) { }


  multiplicar() {
    const accion = new MultiplicarAction(5);
    this.store.dispatch( accion );
  }

  dividir() {
    const accion = new DividirAction(2);
    this.store.dispatch( accion );

  }
  reset(cambioContador: number) {
    this.contador = cambioContador;
  }
  ngOnInit() {
    this.store.select('contador').subscribe( contador => {
      this.contador = contador;
      console.log(contador);
     });
  }

}
