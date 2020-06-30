import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import { useSelector } from 'react-redux';
import { selectBuses } from './busesSlice';
import DataTable from '../dataTable/DataTable';
import { selectSearchFilter } from './../header/headerSlice';

export default function Buses() {
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

  return <DataTable header={busesHeader} rows={busesRows} />;
}
