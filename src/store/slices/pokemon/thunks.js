import { setPokemons, startLoadingPokemons } from "./pokemonSlices";

// Creo mi funcion "Thunk" (action) "getPokemon"
export const getPokemons = () => {
  // Y esta accion "despachara" uno o varios "reducers" desde los "slices" creados anteriormente, usando como argumento la funcion "dispatch" que es la que "despacha" y "getState" por si necesito obtener el "estado" global de la app
  return async( dispatch, getState ) => {

    // Primero mando a llamar (cargo) los pokemons
    dispatch( startLoadingPokemons() );

    // TODO: realizar petición http

    // dispatch( setPokemons() );

  }
}


/* ----------------------------------------------------------------
  Thunks

  Los "Thunks" son acciones asincronas que disparan otra accion cuando se resuelve la peticion asincrona, en otras palabras, es una accion que tiene un codigo asincrono y dependiendo del resultado de ese codigo va a "despachar" otra accion a los "reducers"
---------------------------------------------------------------- */