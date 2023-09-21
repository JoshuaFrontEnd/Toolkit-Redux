import { useDispatch, useSelector } from 'react-redux';

import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import { increment } from './store/slices/counter';

function App() {

  // Para leer el "state" (datos) del "store" usamos el Hook de React Redux "useSelector" y para acceder a un "Reducer" especifico del estado, se hace de la siguiente forma:
  const { counter } = useSelector( state => state.counter );

  // Para poder acceder al "dispatcher" necesito usar el Hook de React Redux "useDispatch"
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
        {/* Acá estoy despachando al "dispatcher" la "action increment" */}
        <button onClick={() => dispatch( increment() )}>
          count is { counter }
        </button>
      </div>
    </>
  )
}

export default App;
