import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function Buses() {
  const [buses, setBuses] = useState({});

  useEffect(() => {
    (async () => {
      const { data } = await axios.get('/api/buses');
      setBuses(data);
    })();
  });

  return (
    <div>{buses}</div>
  );
}
