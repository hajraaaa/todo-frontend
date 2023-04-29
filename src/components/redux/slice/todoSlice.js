import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    todo: []
}

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTask: (state, action) => {
            state.todo.push(action.payload)
            return state
        },
    },
})

export const { addTask } = todoSlice.actions

export default todoSlice.reducer