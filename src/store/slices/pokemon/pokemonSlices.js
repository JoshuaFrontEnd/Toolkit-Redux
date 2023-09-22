import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  page: 0,
  pokemons: [],
  isLoading: false,
}

export const pokemonSlice = createSlice({
  // Nombre del 'slice' que sera referenciado en el 'store'
  name: 'pokemon',
  initialState,
  reducers: {
    startLoadingPokemons: ( state ) => {
      state.isLoading = true;
    },
    setPokemons: ( state, action ) => {
      // Como ya cargue los pokemons los dejo de cargar
      state.isLoading = false;

      // Configuro el "Payload" (action)
      state.page = action.payload.page;
      state.pokemons = action.payload.pokemons;

    }
  }
});

export const { startLoadingPokemons, setPokemons } = pokemonSlice.actions;