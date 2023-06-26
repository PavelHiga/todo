import { createSlice } from '@reduxjs/toolkit'

const initialState = []
const option = {
  time: {
    hour: 'numeric',
    minute: 'numeric',
    hour12: true,
  },
  day: {
    day: 'numeric',
    weekday: 'short',
  }
}

export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    add: (state, action) => {
      state.push({
        text: action.payload.text,
        comp: true,
        date: {
          dateTime: new Date().toLocaleString('en-US', option.time),
          dateDay: new Date().toLocaleDateString('en-GB', option.day),
        }
      })
    },
    complete: (state, action) => {
      const toggledTodo = state.find((_, index) => index === action.payload);
      toggledTodo.comp = !toggledTodo.comp;
    },
    remove: (state, action) => {
      return state.filter((_, index) => index !== action.payload)
    },
    removeAll: (state) => {
      return state = []
    },
  },
})


export const { add, remove, complete, removeAll } = todoSlice.actions

export default todoSlice.reducer