import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPokemons } from './store/slices/pokemon';

export const PokemonApp = () => {

  // Para poder "despachar" una "accion" uso el "Hook" de "React-Redux" "useDispatch"
  const dispatch = useDispatch();

  // Seteo/extraigo, el estado actual (pokemonSlices)
  const { page, pokemons = [], isLoading } = useSelector( state => state.pokemons );

  // Si quiero hacer algo cuando el componente es creado por primera vez y ejecutarlo una sola vez uso el "Hook" "useEffect" de la siguiente manera: en este caso, despachando un "Thunk"
  useEffect(() => {
    dispatch( getPokemons() );
  }, [])


  return (
    <>
      <h1>PokemonApp</h1>
      <hr />
      <span>Loading: { isLoading ? 'true' : 'false' }</span>

      <ul>
        {
          pokemons.map( ({ name }) => (
            <li key={ name }>{ name }</li>
          ))
          /* --------------------------------------------------------------

            Lo anterior seria igual a esto en javascript vanilla:

              pokemons.map( pokemon => (
                <li>{ pokemons.name }</li>
              ))

            lo que sucede es que React en las listas siempre pide un "key", este debe ser unico e irrepetible, por eso es mejor, desestructurar y tomar una propidad del objeto que nos sirva como key, en este caso la propiedad "name" del objeto "pokemon" nos sirve

          ---------------------------------------------------------------- */
        }
      </ul>

      <button
        disabled={ isLoading }
        onClick={ () => dispatch( getPokemons( page ) ) }
      >
        Next
      </button>
    </>
  )
}
