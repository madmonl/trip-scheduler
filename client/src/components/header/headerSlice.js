import { createSlice } from '@reduxjs/toolkit';

export const headerSlice = createSlice({
  name: 'header',
  initialState: {
    value: { searchFilter: '', currTablePage: 0 }
  },
  reducers: {
    setSearchFilter: (state, action) => {
      state.value.searchFilter = action.payload;
      state.value.currTablePage = 0;
    },
    setCurrTablePage: (state, action) => {
      state.value.currTablePage = action.payload;
    },
    resetCurrTablePage: (state) => {
      state.value.currTablePage = 0;
    },
    resetSearchFilter: (state) => {
      state.value.searchFilter = '';
    }
  }
});

export const selectCurrTablePage = (state) => state.header.value.currTablePage;
export const selectSearchFilter = (state) => state.header.value.searchFilter;

export const {
  setSearchFilter,
  setCurrTablePage,
  resetCurrTablePage,
  resetSearchFilter
} = headerSlice.actions;

export default headerSlice.reducer;
