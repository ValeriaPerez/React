import { combineReducers } from 'redux';

function todos(state = [], action) {
  
  switch(action.type) {
  
  case 'ADD_TODO':

  // creamos una copia del state actual
  const copy = Array.from(state);
  // modificamos lo que necesitamos
  copy.push(action.payload.text)
  // retornamos el nuevo state
  return copy;

  default:
    // si el action.type no existe o no concuerda
    // con ningunos de los casos definidos
    // devolvemos el estado sin modificar
    return state;
  }
}

// combinamos nuestros reducers
// los keys que usemos para nuestros reducers
// van a ser usados como keys en nuestro store
// en este ejemplo sería: { todos: [], }
const reducers = combineReducers({
    todos,
});

export default reducers;


//STORE
// cargamos la función para crear un store
import { createStore } from 'redux';
// cargamos nuestros reducers (ya combinados)
import reducers from './reducers.js';

// definimos el estado inicial
const initialState = {
    todos: [],
};

// creamos el store
const store = createStore(reducers, initialState);

export default store;


//OBTENIENDO ESTADO
import store from './store.js';
// vemos el estado actual del store
console.log(store.getState());

//SUBSCRIBIRSE A LOS CAMBIOS DE ESTADO
import store from './store.js';

// nos suscribimos al store, esto nos devuelve
// una función que nos sirve para desuscribirnos
const unsubscribe = store.subscribe(() => {
    // vemos el nuevo store
    console.log(store.getState());
    // nos desuscribimos
    unsubscribe();
});