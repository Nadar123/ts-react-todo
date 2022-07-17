import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface TodoState {
  value: string[];
}
const initialState: TodoState = {
  value: [],
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addToDo: (state, action: PayloadAction<string>) => {
      state.value.push(action.payload);
    },
    removeToDo: (state, action: PayloadAction<number>) => {
      state.value.splice(action.payload, 1);
    },
  },
});

export const { addToDo, removeToDo } = todoSlice.actions;
export default todoSlice.reducer;
