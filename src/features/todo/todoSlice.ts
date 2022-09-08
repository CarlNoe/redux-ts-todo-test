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
        createNewTodo: (state, action: PayloadAction<{ id: number, content: string }>) => {
            state.allTodos.push
                ({ id: action.payload.id, content: action.payload.content, completed: false });
        },
        removeTodoById: (state, action: PayloadAction<number>) => {
            state.allTodos.filter(todo => todo.id !== action.payload)
        }
    }
});

export const { createNewTodo, removeTodoById } = todoSlice.actions;
export default todoSlice.reducer;