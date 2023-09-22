import { useGetTodosQuery } from './store/apis/todosApi';

export const TodoApp = () => {

  //Acá renombre "data" a "todos"
  const { data: todos = [], isLoading } = useGetTodosQuery();

  return (
    <>
      <h1>Todos - RTK Query</h1>
      <hr />
      <h4>isLoading: { isLoading ? 'True' : 'False' }</h4>

      <pre>...</pre>

      <ul>
        { todos.map( todo => (
          <li key={ todo.id }>
            <strong>{ todo.completed ? 'Done' : 'Pending' }</strong> { todo.title }
          </li>
        ))}
      </ul>

      <button>
        Next ToDo
      </button>
    </>
  )
}
