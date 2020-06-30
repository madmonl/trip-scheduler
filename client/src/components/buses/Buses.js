import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import { useSelector, useDispatch } from 'react-redux';
import { selectBuses } from './busesSlice';
import DataTable from '../dataTable/DataTable';
import {
  resetSearchFilter,
  selectSearchFilter,
  resetCurrTablePage
} from './../header/headerSlice';

export default function Buses() {
  const dispatch = useDispatch();
  const searchFilter = useSelector(selectSearchFilter);
  const buses = useSelector((event) => selectBuses(event, searchFilter));
  const busesHeader = ['busId', 'busType', 'trips'];
  const busesRows = buses.map(({ busId, busType }) => {
    return ({
      busId,
      busType,
      trips: (
        <Link
          onClick={() => {
            dispatch(resetCurrTablePage());
            dispatch(resetSearchFilter());
          }}
          className="link"
          to={`/buses/${busId}`}
        ><Button
          color="secondary"
          className="button--link button--small"
          variant="contained"
        >View Trips</Button>
        </Link>
      )
    });
  });

  return <DataTable header={busesHeader} rows={busesRows} />;
}
