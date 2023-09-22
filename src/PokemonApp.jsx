import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getPokemons } from './store/slices/pokemon';

export const PokemonApp = () => {

  // Para poder "despachar" una "accion" uso el "Hook" de "React-Redux" "useDispatch"
  const dispatch = useDispatch();

  // Si quiero hacer algo cuando el componente es creado por primera vez y ejecutarlo una sola vez uso el "Hook" "useEffect" de la siguiente manera: en este caso, despachando un "Thunk"
  useEffect(() => {
    dispatch( getPokemons() );
  }, [])


  return (
    <>
      <h1>PokemonApp</h1>
      <hr />

      <ul>
        <li>hola</li>
        <li>hola</li>
        <li>hola</li>
      </ul>
    </>
  )
}
