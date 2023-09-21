import { createSlice } from '@reduxjs/toolkit';

export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    counter: 10
  },
  reducers: {
    // Acá estoy creando una "action" a ejecutar
    increment: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.counter += 1
    }
  },
})

// Action creators are generated for each case reducer function
// Acá estoy exportando la "action" para poder utilizarla después
export const { increment } = counterSlice.actions;




/* ----------------------------------------------------------------
  En Redux, un slice es una forma de organizar el estado de una aplicación en piezas más pequeñas y manejables. Un slice es simplemente un objeto que contiene un reducer, un conjunto de acciones y un conjunto de selectores.

  Los slices son útiles para aplicaciones grandes que tienen un estado complejo. Al dividir el estado en slices, los desarrolladores pueden centrarse en un área específica del estado a la vez. Esto hace que el código sea más fácil de entender y mantener.

  Para crear un slice en Redux, se utiliza la función createSlice(). Esta función toma tres argumentos:

  - El nombre del slice.
  - Un objeto que contiene las funciones de reducción para cada acción.
  - Un objeto que contiene los selectores para cada valor de estado.
---------------------------------------------------------------- */