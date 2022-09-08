import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit';
import { Todo } from '../../types/Todo';
export interface TodoState {
    allTodos: Todo[];
}

const initialState: TodoState = {
    allTodos: [],
};

export const todoSlice = createSlice({
    name: "todo",
    initialState,
    reducers: {
        add: (state, action: PayloadAction<string>) => {
            state.allTodos.push({ id: 1, content: action.payload, completed: false });
        },
        removeTodoById: (state, action: PayloadAction<number>) => {
            state.allTodos.filter(todo => todo.id !== action.payload)
        }
    }
});

export const { add, removeTodoById } = todoSlice.actions;
export default todoSlice.reducer;