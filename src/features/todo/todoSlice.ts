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
            state.allTodos = state.allTodos.filter(todo => todo.id !== action.payload);
        },
        setTodoCompletionById: (state, action: PayloadAction<{ id: number, completed: boolean }>) => {
            const todo = state.allTodos.find(todo => todo.id === action.payload.id);
            if (todo) {
                todo.completed = action.payload.completed;
            }
        },
    }
});

export const { createNewTodo, removeTodoById, setTodoCompletionById } = todoSlice.actions;
export default todoSlice.reducer;