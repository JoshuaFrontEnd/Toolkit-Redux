import { configureStore } from '@reduxjs/toolkit';
//  Importacion de "slice" personalizado, en este caso un contador
import { counterSlice } from './slices/counter';
import { pokemonSlice } from './slices/pokemon';
import { todosApi } from './apis';

// Acá estoy creando el "store" o "unica" fuente de la verdad, y dentro de el van los "reducers" asociados a mi app
export const store = configureStore({
  // Para organizar el "state" de una aplición en piezas mas pequeñas "React/Redux" crea el concepto de "slice", de esta manera es mas facil manejar y entender los "states" complejos de apps muy grandes, estos "slices" se crean de manera aparte y son llamados dentro de los "reducers" del "store" de la siguiente forma:
  reducer: {
    counter: counterSlice.reducer,
    pokemons: pokemonSlice.reducer,

    // Agregando los "reducers" del "RTK Query" al "store" usando propiedades computadas:
    [ todosApi.reducerPath ]: todosApi.reducer,
  },
  middleware: ( getDefaultMiddleware ) => getDefaultMiddleware()
    .concat( todosApi.middleware )
})