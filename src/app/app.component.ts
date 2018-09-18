import { Component, isDevMode, OnInit } from '@angular/core';
import { Store, Action } from '@ngrx/store';
import { IncrementarAction, DecrementarAction } from './contador/contador.action';
import { AppState } from './app.reducer';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  contador: number;
  title = 'redux-app';

  constructor(private store: Store<AppState>) {
    // this.contador = 10;
    this.store.select('contador').subscribe( contador => {
      this.contador = contador;
      this.imprimirConsola (contador);
    });
  }

  imprimirConsola(texto: any) {
    if ( isDevMode ) {
      console.log(texto);

    }
  }

  incrementar() {
    const accion = new IncrementarAction;
    this.store.dispatch( accion );
  }
  decrementar() {
    const accion = new DecrementarAction;
    this.store.dispatch( accion );
  }

}

