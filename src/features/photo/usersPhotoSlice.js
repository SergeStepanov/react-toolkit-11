import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  usersPhoto: [],
};

const photoSlice = createSlice({
  name: 'usersPhoto',
  initialState,
  reducers: {
    addUsersPhoto: (state, action) => {
      console.log(action);
    }
  }
});

export const {addUsersPhoto} = photoSlice.actions;
export default photoSlice.reducer;