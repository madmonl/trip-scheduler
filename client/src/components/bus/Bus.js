import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { trackPromise } from 'react-promise-tracker';
import DataTable from '../dataTable/DataTable';

export default function Bus({ match }) {
  const { busId } = match.params
  const [trips, setTrips] = useState([]);
  const [tripsHeader, setTripsHeader] = useState([]);

  useEffect(() => {
    (async () => {
      const { data } = await trackPromise(axios.get(`/api/buses/${busId}`));
      const busTrips = Object.values(data);
      setTrips(busTrips);
      setTripsHeader(Object.keys(busTrips[0]));
    })();
  }, []);

  return <DataTable header={tripsHeader} rows={trips} />;
}
