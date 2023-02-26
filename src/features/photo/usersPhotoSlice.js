import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  usersPhotoArr: [],
};

const photoSlice = createSlice({
  name: 'usersPhoto',
  initialState,
  reducers: {
    addUsersPhoto: (state, action) => {
      // console.dir(action.payload);
      state.usersPhotoArr.push(action.payload);
    }
  }
});

export const {addUsersPhoto} = photoSlice.actions;
export default photoSlice.reducer;