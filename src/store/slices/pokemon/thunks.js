import { pokemonApi } from "../../../api/pokemonApi";
import { setPokemons, startLoadingPokemons } from "./pokemonSlices";

// Creo mi funcion "Thunk" (action) "getPokemon"
export const getPokemons = ( page = 0 ) => {
  // Y esta accion "despachara" uno o varios "reducers" desde los "slices" creados anteriormente, usando como argumento la funcion "dispatch" que es la que "despacha" y "getState" por si necesito obtener el "estado" global de la app
  return async( dispatch, getState ) => {

    // Primero mando a llamar (cargo) los pokemons
    dispatch( startLoadingPokemons() );

    // TODO: realizar petición http

    // Usando la petición con "fetch"
    // const resp = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=10&offset=${ page * 10 }`);
    // const data = await resp.json();

    // Usando la petición con "Axios"
    const { data } = await pokemonApi.get(`/pokemon?limit=10&offset=${ page * 10 }`);

    // Envio el "Payload" configurado anteriormente
    dispatch( setPokemons({ page: page + 1, pokemons: data.results }) );

  }
}


/* ----------------------------------------------------------------
  Thunks

  Los "Thunks" son acciones asincronas que disparan otra accion cuando se resuelve la peticion asincrona, en otras palabras, es una accion que tiene un codigo asincrono y dependiendo del resultado de ese codigo va a "despachar" otra accion a los "reducers"
---------------------------------------------------------------- */