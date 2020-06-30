import React from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

export default function Header() {
  return (
    <AppBar className="header" position="static">
      <Toolbar className="header__container">
        <Link className="header__link" to="/">Trips</Link>
        <Link className="header__link" to="/buses">Buses</Link>
      </Toolbar>
    </AppBar>
  );
}
