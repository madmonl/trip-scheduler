import React, { useState, useEffect } from 'react';
import axios from 'axios';
import DataTable from '../dataTable/DataTable';

export default function Trips() {
  const [trips, setTrips] = useState([]);
  const [tripsHeader, setTripsHeader] = useState([]);

  useEffect(() => {
    (async () => {
      const { data } = await axios.get('/api/trips');
      setTrips(data);
      setTripsHeader(Object.keys(data[0]));
      const loader = document.getElementById('loader');
      if (loader) {
        loader.remove();
      }
    })();
  }, []);

  return <DataTable header={tripsHeader} rows={trips} />;
}
