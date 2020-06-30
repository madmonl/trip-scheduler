import React from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';

export default function Header() {
  return (
    <AppBar className="header" position="static">
      <Toolbar className="header__container">
        <Link className="header__link" to="/">Trips</Link>
        <Link className="header__link" to="/buses">Buses</Link>
        <div className="header__search">
          <div className="search-icon">
            <SearchIcon />
          </div>
          <InputBase
            className="header__search-text"
            placeholder="Search by id"
            inputProps={{ 'aria-label': 'search' }}
          />
        </div>
      </Toolbar>
    </AppBar>
  );
}
