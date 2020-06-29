import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function Buses() {
  const [buses, setBuses] = useState({});

  useEffect(() => {
    (async () => {
      const { data } = await axios.get('/api/buses');
      setBuses(data);
      const loader = document.getElementById('loader');
      if (loader) {
        loader.remove();
      }
    })();
  });

  return (
    <div>{buses}</div>
  );
}
