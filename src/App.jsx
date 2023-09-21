import { useDispatch, useSelector } from 'react-redux';

import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import { increment, decrement, incrementByTwo } from './store/slices/counter';

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
      <h1>count is { counter }</h1>
      <div className="card">
        {/* Acá estoy despachando al "dispatcher" la "action increment" */}
        <button onClick={() => dispatch( increment() )}>
          Increment
        </button>
        <button onClick={() => dispatch( decrement() )}>
          Decrement
        </button>
        <button onClick={() => dispatch( incrementByTwo(2) )}>
          Increment by 2
        </button>
      </div>
    </>
  )
}

export default App;
