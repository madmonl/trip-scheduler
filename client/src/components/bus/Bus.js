import React from 'react';
import DataTable from '../dataTable/DataTable';
import { selectSearchFilter } from './../header/headerSlice';
import { selectTripsHeader, selectTrips } from './../trips/tripsSlice';
import { useSelector } from 'react-redux';

export default function Bus({ match }) {
  const { busId } = match.params;
  const searchFilter = useSelector(selectSearchFilter);
  const trips = useSelector((event) => selectTrips(event, searchFilter, busId));
  const tripsHeader = useSelector(selectTripsHeader);

  return <DataTable header={tripsHeader} rows={trips} />;
}
