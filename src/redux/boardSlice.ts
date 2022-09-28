import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  board: [
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
  ],
  position: 0, // position of letter
  row: 0, // redux row - row corresponding letter
  correctWord: "CONES",
};

const boardSlice = createSlice({
  name: "board",
  initialState,
  reducers: {
    setBoard: (state, action) => {
      state.board = action.payload;
    },
    increasePosition: (state) => {
      state.position++;
    },
    decreasePosition: (state) => {
      state.position--;
    },
    increaseRow: (state) => {
      state.row++;
    },
  },
});

export const { setBoard, increasePosition, decreasePosition, increaseRow } =
  boardSlice.actions;

export default boardSlice.reducer;
