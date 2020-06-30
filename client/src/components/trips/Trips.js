import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { trackPromise } from 'react-promise-tracker';
import DataTable from '../dataTable/DataTable';

export default function Trips() {
  const [trips, setTrips] = useState([]);
  const [tripsHeader, setTripsHeader] = useState([]);

  useEffect(() => {
    (async () => {
      const { data } = await trackPromise(axios.get('/api/trips'));
      setTrips(data);
      setTripsHeader(Object.keys(data[0]));
    })();
  }, []);

  return <DataTable header={tripsHeader} rows={trips} />;
}
