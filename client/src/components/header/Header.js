import React from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import InputBase from '@material-ui/core/InputBase';
import Button from '@material-ui/core/Button';
import SearchIcon from '@material-ui/icons/Search';
import { useSelector, useDispatch } from 'react-redux';
import * as FileSaver from 'file-saver';
import * as XLSX from 'xlsx';
import {
  selectSearchFilter,
  setSearchFilter,
  resetCurrTablePage,
  resetSearchFilter
} from './headerSlice';
import { selectBuses } from '../buses/busesSlice';
import { selectTrips } from '../trips/tripsSlice';



export default function Header() {
  const fileType = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
  const fileExtension = '.xlsx';
  const dispatch = useDispatch();
  const searchFilter = useSelector(selectSearchFilter);
  const buses = useSelector(selectBuses);
  const trips = useSelector(selectTrips);

  const exportToCSV = (csvData, fileName) => {
    const ws = XLSX.utils.json_to_sheet(csvData);
    const wb = { Sheets: { 'data': ws }, SheetNames: ['data'] };
    const excelBuffer = XLSX.write(wb, { bookType: 'xlsx', type: 'array' });
    const data = new Blob([excelBuffer], { type: fileType });
    FileSaver.saveAs(data, fileName + fileExtension);
  }

  const handleSearchChange = (event) => {
    dispatch(setSearchFilter(event.target.value));
  }

  return (
    <AppBar className="header" position="static">
      <Toolbar className="header__container">
        <Link
          className="header__link"
          to="/"
          onClick={() => {
            dispatch(resetCurrTablePage())
            dispatch(resetSearchFilter())
          }}
        >Trips</Link>
        <Link
          className="header__link"
          to="/buses"
          onClick={() => {
            dispatch(resetCurrTablePage())
            dispatch(resetSearchFilter())
          }}
        >Buses</Link>
        <div className="header__search">
          <div className="search-icon">
            <SearchIcon />
          </div>
          <InputBase
            className="header__search-text"
            value={searchFilter}
            onChange={handleSearchChange}
            placeholder="Search by id"
            inputProps={{ 'aria-label': 'search' }}
          />
        </div>
        <div className="export">
          <Button
            onClick={() => exportToCSV(trips, 'trips')}
            className="button--link button--small button--export"
            variant="contained"
          >Export Trips</Button>
          <Button
            onClick={() => exportToCSV(buses, 'buses')}
            className="button--link button--small button--export"
            variant="contained"
          >Export Buses</Button>
        </div>
      </Toolbar>
    </AppBar>
  );
}
