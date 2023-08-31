import { createSlice } from '@reduxjs/toolkit';

export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    counter: 10
  },
  reducers: {
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
export const { increment } = counterSlice.actions;




/* ----------------------------------------------------------------
  - Los slices contienen toda tu logica del reducer centralizada en solo archivo (antes no se solia hacer así) con lo se puede configurar facilmente las acciones para nuestro reducer y automaticamente nos genera los tipo de acciones según el nombre de las funciones que creemos dentro del objeto reducers dentro del createSlice
  - El 'slice' no es mas que una función que recibe como paramentro un objeto
---------------------------------------------------------------- */