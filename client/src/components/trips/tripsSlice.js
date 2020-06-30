import { createSlice } from '@reduxjs/toolkit';

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

export const selectTrips = (state, searchFilter, driverId = '') => {
  const trips = state.trips.value.trips;
  return trips.filter((trip) => {
    if (!searchFilter && !driverId) {
      return true;
    } else if (driverId && !searchFilter) {
      return (trip.driverId.toString() === driverId);
    } else if (!driverId && searchFilter) {
      return trip.id.toString().startsWith(searchFilter);
    } else {
      return (
        trip.id.toString().startsWith(searchFilter) &&
        trip.driverId.toString() === driverId
      );
    }
  });
}

export const selectTripsHeader = (state) => {
  const areTripsFetched = state.trips.value.trips.length;
  return (areTripsFetched ? Object.keys(state.trips.value.trips[0]) : []);
}

export default tripsSlice.reducer;
