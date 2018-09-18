import { Action } from "@ngrx/store";
import * as formContador from './contador.action';

export function contadorReducer( state: number = 10, action: formContador.actions ) {

    switch ( action.type ) {
        case formContador.INCREMENTAR:
            return state + 1;
        case formContador.DECREMENTAR:
            return state - 1;
        case formContador.MULTIPLICAR:
            return state * action.payLoad;  // multiplicacion tiene un constructor con un payload (contador.action.ts)
        case formContador.DIVIDIR:
            return state / action.payLoad;  // division tiene un constructor con un payload (contador.action.ts)
        case formContador.REINICIAR:
            return 0;
        default:
            return state;
    }
}

