import { useDispatch, useSelector } from 'react-redux';

import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import { increment } from './store/slices/counter';

function App() {

  // Para leer datos del store usamos el Hook de React Redux 'useSelector'
  const { counter } = useSelector( state => state.counter );
  const dispatch = useDispatch();


  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => dispatch( increment() )}>
          count is { counter }
        </button>
      </div>
    </>
  )
}

export default App;
