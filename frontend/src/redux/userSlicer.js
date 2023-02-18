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
  },
});

export const { saveUser } = userSlicer.actions;
export default userSlicer.reducer;
