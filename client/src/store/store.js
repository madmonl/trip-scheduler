import { configureStore } from '@reduxjs/toolkit';
// import tripsReducer from '../components/trips/tripsSlice';
import busesReducer from '../components/buses/busesSlice';
import headerReducer from '../components/header/headerSlice';

export default configureStore({
  reducer: {
    // trips: tripsReducer,
    buses: busesReducer,
    header: headerReducer
  }
});
