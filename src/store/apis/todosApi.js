import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const todosApi = createApi({

  reducerPath: 'todos',

  baseQuery: fetchBaseQuery({
    baseUrl: 'https://jsonplaceholder.typicode.com'
  }),

  endpoints: ( builder ) => ({

    getTodos: builder.query({
      query: () => '/todos'
    })

  })

})

// RTK Query convierte los reducers creados en los endpoints a custom Hooks
export const { useGetTodosQuery } = todosApi;