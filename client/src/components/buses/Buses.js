import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import { useDispatch, useSelector } from 'react-redux';
import { setBuses, selectBuses } from './busesSlice';
import axios from 'axios';
import { trackPromise } from 'react-promise-tracker';
import DataTable from '../dataTable/DataTable';
import { selectSearchFilter } from './../header/headerSlice';

export default function Buses() {
  const dispatch = useDispatch();
  const searchFilter = useSelector(selectSearchFilter);
  const buses = useSelector((event) => selectBuses(event, searchFilter));
  const busesHeader = ['id', 'busType', 'trips'];
  const busesRows = buses.map(({ id, busType }) => {
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
      const { data } = await trackPromise(axios.get('/api/buses'));
      dispatch(setBuses(data));
    })();
  }, []);

  return <DataTable header={busesHeader} rows={busesRows} />;
}
