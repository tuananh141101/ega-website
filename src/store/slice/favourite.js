import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  favourite: [],
};

export const favouriteSlice = createSlice({
  name: "favourite",
  initialState,
  reducers: {
    addToFav(state, action) {
      //* Lấy id của dữ liệu mà mình dispatch từ UI vào state
      const { id } = action.payload;

      //* Kiểm tra vị trí id trong state
      //* Nếu tìm thấy nó sẽ trả về index hiện tại của nó
      //* Nếu không được tìm thấy index sẽ có giá trị -1
      const index = state.favourite.indexOf(id);

      state.favourite.push(action.payload);
    },
  },
});

export const { addToFav } = favouriteSlice.actions;
export default favouriteSlice.reducer;
