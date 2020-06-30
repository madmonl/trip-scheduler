import { createSlice } from '@reduxjs/toolkit';
import { useSelector } from 'react-redux';
import { selectSearchFilter } from './../header/headerSlice';

export const busesSlice = createSlice({
  name: 'buses',
  initialState: {
    value: { buses: [] }
  },
  reducers: {
    setBuses: (state, action) => {
      state.value.buses = action.payload;
    }
  }
});

export const { setBuses } = busesSlice.actions;

export const selectBuses = (state) => {
  const buses = state.buses.value.buses;
  const searchFilter = useSelector(selectSearchFilter);
  if (!searchFilter) {
    return buses;
  }

  return buses.filter((bus) => {
    return bus.id.toString().startsWith(searchFilter);
  })
}

export default busesSlice.reducer;
