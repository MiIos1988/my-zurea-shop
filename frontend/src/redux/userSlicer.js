import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
};

const userSlicer = createSlice({
  name: "userAcc",
  initialState,

  reducers: {
    saveUser(state, data) {
      state.user = data.payload;
    },
    removeUser(state) {
      state.user = null;
    },
  },
});

export const { saveUser, removeUser } = userSlicer.actions;
export default userSlicer.reducer;
