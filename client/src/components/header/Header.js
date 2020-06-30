import React from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import { useSelector, useDispatch } from 'react-redux';
import {
  selectSearchFilter,
  setSearchFilter,
  resetCurrTablePage,
  resetSearchFilter
} from './headerSlice';


export default function Header() {
  const dispatch = useDispatch();
  const searchFilter = useSelector(selectSearchFilter);

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
      </Toolbar>
    </AppBar>
  );
}
