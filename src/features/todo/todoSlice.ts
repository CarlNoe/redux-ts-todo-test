import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit';

export interface TodoState {
    todoList: [{id:number, content:string, completed:boolean}];
}

const initialState: TodoState = {
    todoList: [{id:0, content:"test", completed:false}],
}

export const todoSlice = createSlice({
    name: "todo",
    initialState,
    reducers: {
        add: (state, action: PayloadAction<string>) => {
            state.todoList.push({ id: 1, content: action.payload, completed: false });
        },
        remove: (state, action: PayloadAction<number>) => {
            state.todoList.filter(todo => todo.id !== action.payload)
        }
    }
});

export const { add, remove } = todoSlice.actions;
export default todoSlice.reducer;