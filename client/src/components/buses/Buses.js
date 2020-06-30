import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import axios from 'axios';
import DataTable from '../dataTable/DataTable';

export default function Buses() {
  const [buses, setBuses] = useState({});
  const busesHeader = ['id', 'busType', 'trips'];
  const busesRows = Object.values(buses).map(({ id, busType }) => {
    return ({
      id,
      busType,
      trips: <Link className="link" to={`/buses/${id}`}><Button
        color="secondary"
        className="button--link button--small"
        variant="contained"
      >View Trips</Button></Link>
    });
  });

  useEffect(() => {
    (async () => {
      const { data } = await axios.get('/api/buses');
      setBuses(data);
      // const loader = document.getElementById('loader');
      // if (loader) {
      //   loader.remove();
      // }
    })();
  }, []);

  return <DataTable header={busesHeader} rows={busesRows} />;
}
