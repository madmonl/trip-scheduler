import React, { useState, useEffect } from 'react';
import axios from 'axios';
import DataTable from '../dataTable/DataTable';

export default function Bus({ match }) {
  const { busId } = match.params
  const [trips, setTrips] = useState([]);
  const [tripsHeader, setTripsHeader] = useState([]);

  useEffect(() => {
    (async () => {
      const { data } = await axios.get(`/api/buses/${busId}`);
      const busTrips = Object.values(data);
      setTrips(busTrips);
      setTripsHeader(Object.keys(busTrips[0]));
      // const loader = document.getElementById('loader');
      // if (loader) {
      //   loader.remove();
      // }
    })();
  }, []);

  return <DataTable header={tripsHeader} rows={trips} />;
}
