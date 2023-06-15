import { createSlice } from "@reduxjs/toolkit";

// Начальное значение
const initialState = { value: [] };

const newsSlice = createSlice({
  name: "news",
  initialState,
  reducers: {
    getNews: (state, action) => {
      state.value = action.payload;
    },
    removeNews: (state, action) => {
        state.value = state.value.filter((item) => action.payload !== item.id);
    },
    addNews: (state, action) => {
        // state.value = action.payload;
        state.value.push(action.payload);
      },
  },
});

export const { addNews, removeNews, getNews } = newsSlice.actions;
export const newsSelector = (state) => state.newsReducer;
export default newsSlice.reducer;
