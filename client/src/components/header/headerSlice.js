import { createSlice } from '@reduxjs/toolkit';

export const headerSlice = createSlice({
  name: 'header',
  initialState: {
    value: { searchFilter: '' }
  },
  reducers: {
    setSearchFilter: (state, action) => {
      state.value.searchFilter = action.payload;
    }
  }
});

export const selectSearchFilter = (state) => state.header.value.searchFilter;

export const { setSearchFilter } = headerSlice.actions;

export default headerSlice.reducer;
