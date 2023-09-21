import { createSlice } from '@reduxjs/toolkit';

export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    counter: 10
  },
  reducers: {
    // Acá estoy creando una "action" a ejecutar
    increment: ( state ) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.counter += 1
    },
    decrement: ( state ) => {
      state.counter -= 1
    },
    incrementByTwo: ( state, action ) => {
      console.log( action );
      state.counter += action.payload;
    }
  },
})

// Action creators are generated for each case reducer function
// Acá estoy exportando la "action" para poder utilizarla después
// Las acciones exportadas son generadas por las funciones creadas en el "reducers"
export const { increment, decrement, incrementByTwo } = counterSlice.actions;




/* ----------------------------------------------------------------
  En Redux, un slice es una forma de organizar el estado de una aplicación en piezas más pequeñas y manejables. Un slice es simplemente un objeto que contiene un reducer, un conjunto de acciones y un conjunto de selectores.

  Los slices son útiles para aplicaciones grandes que tienen un estado complejo. Al dividir el estado en slices, los desarrolladores pueden centrarse en un área específica del estado a la vez. Esto hace que el código sea más fácil de entender y mantener.

  Para crear un slice en Redux, se utiliza la función createSlice(). Esta función toma tres argumentos:

  - El nombre del slice.
  - Un objeto que contiene las funciones de reducción para cada acción.
  - Un objeto que contiene los selectores para cada valor de estado.

  PAYLOAD

  Action payload en React es la información que se envía a un reducer para actualizar el estado de la aplicación. Es una propiedad de la acción que se puede utilizar para pasar cualquier tipo de datos, como objetos, arrays o cadenas.

  Por ejemplo, si tienes una aplicación de comercio electrónico, podrías utilizar un payload para enviar al reducer los datos de un producto que el usuario ha añadido a su carrito. El reducer podría entonces utilizar estos datos para actualizar el estado de la aplicación y mostrar el producto en el carrito de compras del usuario.

  Para crear un payload, simplemente agrega una propiedad payload a la acción. El valor de la propiedad payload puede ser cualquier tipo de datos que necesites.
---------------------------------------------------------------- */