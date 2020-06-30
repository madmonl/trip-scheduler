import { createSlice } from '@reduxjs/toolkit';
import { useSelector } from 'react-redux';
import axios from 'axios';
import { selectSearchFilter } from './../header/headerSlice';
import store from '../../store/store';

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

export async function fetchBuses() {
  const { data } = await axios.get('/api/buses')
  store.dispatch(setBuses(data));
}

export function selectBuses(state) {
  const buses = state.buses.value.buses;
  const searchFilter = useSelector(selectSearchFilter);
  if (!searchFilter) {
    return buses;
  }

  return buses.filter((bus) => {
    return bus.busId.toString().startsWith(searchFilter);
  })
}

export default busesSlice.reducer;
