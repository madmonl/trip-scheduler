import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { trackPromise } from 'react-promise-tracker';
import DataTable from '../dataTable/DataTable';
import { selectTrips, setTrips } from './tripsSlice';
import { useSelector, useDispatch } from 'react-redux';
import { selectSearchFilter } from './../header/headerSlice';

export default function Trips() {
  const dispatch = useDispatch();
  const searchFilter = useSelector(selectSearchFilter);
  const trips = useSelector((event) => selectTrips(event, searchFilter));
  const [tripsHeader, setTripsHeader] = useState([]);

  useEffect(() => {
    (async () => {
      const { data } = await trackPromise(axios.get('/api/trips'));
      dispatch(setTrips(data));
      setTripsHeader(Object.keys(data[0]));
    })();
  }, []);

  return <DataTable header={tripsHeader} rows={trips} />;
}
