import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const todoItemService = createApi({
    reducerPath: 'todoItemService',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3004/items' }),
    endpoints: (builder) => ({
        getAlltodoItems: builder.query({
            query: () => '/',
            providesTags: () => [{ type: 'Items', id: 'LIST' }]
        }),

        addItems: builder.mutation({
            query(body) {
                return {
                    url: '/',
                    method: 'POST',
                    body,
                };
            },
            invalidatesTags: () => [{ type: 'Items', id: 'LIST' }]
        }),
        deleteItems: builder.mutation({
            query(id) {
                return {
                    url: `/${id}`,
                    method: 'DELETE',
                };
            },
            invalidatesTags: () => [{ type: 'Items', id: 'LIST' }]
        }),
    })
});

export const { useGetAlltodoItemsQuery, useAddItemsMutation, useDeleteItemsMutation } = todoItemService;