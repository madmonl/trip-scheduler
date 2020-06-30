import React from 'react';
import DataTable from '../dataTable/DataTable';
import { selectTrips, selectTripsHeader } from './tripsSlice';
import { useSelector } from 'react-redux';
import { selectSearchFilter } from './../header/headerSlice';

export default function Trips() {
  const searchFilter = useSelector(selectSearchFilter);
  const trips = useSelector((event) => selectTrips(event, searchFilter));
  const tripsHeader = useSelector(selectTripsHeader);

  return <DataTable header={tripsHeader} rows={trips} />;
}
