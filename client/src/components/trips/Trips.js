import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function Trips() {
  const [trips, setTrips] = useState([]);

  useEffect(() => {
    (async () => {
      const { data } = await axios.get('/api/trips');
      setTrips(data);
      const loader = document.getElementById('loader');
      if (loader) {
        loader.remove();
      }
    })();
  });

  return (
    <div>{trips[0] && trips[0].startTime}</div>
  );
}
