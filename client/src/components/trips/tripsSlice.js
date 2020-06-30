import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import store from '../../store/store';

export const tripsSlice = createSlice({
  name: 'trips',
  initialState: {
    value: { trips: [] }
  },
  reducers: {
    setTrips: (state, action) => {
      state.value.trips = action.payload;
    }
  }
});

export const { setTrips } = tripsSlice.actions;

export function selectTrips(state, searchFilter, busId = '') {
  const trips = state.trips.value.trips;
  return trips.filter((trip) => {
    if (!searchFilter && !busId) {
      return true;
    } else if (busId && !searchFilter) {
      return (trip.busId.toString() === busId);
    } else if (!busId && searchFilter) {
      return trip.tripId.toString().startsWith(searchFilter);
    } else {
      return (
        trip.tripId.toString().startsWith(searchFilter) &&
        trip.busId.toString() === busId
      );
    }
  });
}

export async function fetchTrips() {
  const { data } = await axios.get('/api/trips');
  store.dispatch(setTrips(data));
}

export function selectTripsHeader(state) {
  const areTripsFetched = state.trips.value.trips.length;
  return (areTripsFetched ? Object.keys(state.trips.value.trips[0]) : []);
}

export default tripsSlice.reducer;
