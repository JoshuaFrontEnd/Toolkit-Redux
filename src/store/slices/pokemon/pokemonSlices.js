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
      console.log( action );
    }
  }
});

export const { startLoadingPokemons, setPokemons } = pokemonSlice.actions;