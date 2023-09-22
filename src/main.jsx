import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
// Para "proveer" el "store" a la app, se importa desde React/Redux un "Provider"
import { Provider } from 'react-redux';
// Importo el "store" que cree para esta app
import { store } from './store';
import { PokemonApp } from './PokemonApp';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* Para implementar el "proveedor" de mi "store" de manera global se hace de la siguiente forma: */}
    <Provider store={ store }>
      {/* <App /> */}
      <PokemonApp />
    </Provider>
  </React.StrictMode>,
)

/* ----------------------------------------------------------------
  Apuntes Generales sobre React, Redux y JavaScript en general

  - Los Reducers son funciones puras que reciben el estado actual de la aplicación y la acción a realizar y devuelven un nuevo estado, sin modificar directamente el estado actual.
  - Una función pura debe ser predecible y sin efectos secundarios. Si alguno de estos criterios no se cumple, estamos ante una función impura.
  - Las funciones puras operan utilizando solo los parámetros de entrada sin recurrir a ningún otro elemento fuera de ellas.
  - En términos simples, las funciones puras no tienen un estado interno. Por lo tanto, todas las operaciones realizadas en las funciones puras no se ven afectadas por su estado. Como resultado, los mismos parámetros de entrada darán la misma salida determinista independientemente de las veces que se ejecute la función.
  - En las funciones impuras, el estado puede modificarse para utilizar la variable padre y llamar a la compilación de la función.
  - la principal diferencia entre las funciones puras e impuras en JavaScript son los efectos secundarios

  ¿Que es Redux?
  Es un contenedor predecible del estado de una aplicación, en otras palabras, es una forma de controlar donde se encuentra la información de una aplicacion en todo momento, y tambien ayuda a que la modificación de la información siempre sea en una sola via, de manera predecible, con el objetivo de prevenir cambios accidentales en la misma

  En Redux existe el concepto de "store" o tambien llamado "Fuente unica de la verdad", que es donde se almacenara la información que los componentes de una aplicacion consumiran o necesitaran para trabajar por ejemplo:

  - Si necesito saber cuál es el usuario activo, o cuantas notificaciones tiene el usuario, o cuantos productos tengo que mostrar en pantalla, voy a ir a consultar al "Store"

  En pocas palabras, voy al "store" cuando necesito información

  Otra manera de definir el "store" es como un conjunto de "reducers" que reciben las "acciones/consultas" a traves de un "dispatcher" y estos a su vez generan un nuevo "estado" general de una aplicación, siempre y cuando todo este proceso sea "sincrono"

  Cuando el proceso es "asincrono" las "acciones/consultas" son recibidas por un "middleware" que se encuentra en el "dispatcher", cuando el "middleware" ejecuta las "acciones/consultas" notifica al "dispatcher" y este a su vez escoge el reducer dentro del store que generara un nuevo estado

  Flujo funcional de Redux:

  - Sincrono:
    Store -> View -> Action -> Dispatcher (Store) -> Reducer (Store) -> View

  - Asincrono:
    Store -> View -> Action -> Dispatcher/Middleware (Store) -> Reducer (Store) -> View

---------------------------------------------------------------- */