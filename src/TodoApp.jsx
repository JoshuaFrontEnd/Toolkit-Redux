import { useState } from 'react';
import { useGetTodoIdQuery, useGetTodosQuery } from './store/apis/todosApi';

export const TodoApp = () => {

  const [ todoId, setTodoId ] = useState(1);

  //Acá renombre "data" a "todos"
  // const { data: todos = [], isLoading } = useGetTodosQuery();

  const { data: todo, isLoading  } = useGetTodoIdQuery( todoId );

  const prevTodo = () => {
    if ( todoId === 1 ) return;
    setTodoId( todoId - 1 );
  }

  const nextTodo = () => {
    setTodoId( todoId + 1 );
  }

  return (
    <>
      <h1>Todos - RTK Query</h1>
      <hr />
      <h4>isLoading: { isLoading ? 'True' : 'False' }</h4>

      <pre>{ JSON.stringify( todo ) }</pre>

      {/* <ul>
        { todos.map( todo => (
          <li key={ todo.id }>
            <strong>{ todo.completed ? 'Done' : 'Pending' }</strong> { todo.title }
          </li>
        ))}
      </ul> */}

      <button style={{ marginRight: 20 }} onClick={ prevTodo }>
        Prev ToDo
      </button>
      <button onClick={ nextTodo }>
        Next ToDo
      </button>

    </>
  )
}
