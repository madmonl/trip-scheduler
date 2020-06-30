import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import TablePagination from '@material-ui/core/TablePagination';
import { withStyles } from '@material-ui/core/styles';
import { useSelector, useDispatch } from 'react-redux';
import { selectCurrTablePage, setCurrTablePage } from './../header/headerSlice';

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white
  },
  body: {
    fontSize: 14
  }
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover
    }
  }
}))(TableRow);

function capitalizeFirstChar(word) {
  return `${word.charAt(0).toUpperCase()}${word.slice(1)}`;
}

function headerCellFormat(word) {
  const capitalizedWord = capitalizeFirstChar(word);
  const splitedByCapitals = capitalizedWord.match(/[A-Z][a-z]+/g);

  return splitedByCapitals.join(' ');
}

export default function DataTable({ header, rows }) {
  const rowsPerPage = 10;
  const muiRowSize = 64;
  const dispatch = useDispatch();
  const currTablePage = useSelector(selectCurrTablePage);
  const emptyRows = rowsPerPage - Math.min(rowsPerPage, rows.length - (currTablePage * rowsPerPage));

  const handleChangePage = (_, newPageNumber) => {
    dispatch(setCurrTablePage(newPageNumber));
  }

  return (
    <div>
      <TableContainer className="table-container" component={Paper}>
        <Table className="table" aria-label="customized table">
          <TableHead>
            <TableRow>
              {header.map((name, index) => (
                <StyledTableCell
                  key={index}
                  className="table__header table__cell"
                >{headerCellFormat(name)}</StyledTableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.slice(currTablePage * rowsPerPage, (currTablePage + 1) * rowsPerPage).map((row) => (
              <StyledTableRow key={row.id}>
                {header.map((name, index) => {
                  return (
                    <StyledTableCell
                      key={index}
                      component="th"
                      scope="row"
                      className="table__cell"
                    >
                      {row[name]}
                    </StyledTableCell>
                  )
                })}
              </StyledTableRow>
            ))}
            {(emptyRows > 0) && (
              <TableRow style={{ height: muiRowSize * emptyRows }}>
                <TableCell colSpan={6} />
              </TableRow>
            )}
          </TableBody>
        </Table>
        <TablePagination
          className="table__pagination"
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={currTablePage}
          onChangePage={handleChangePage}
          rowsPerPageOptions={[rowsPerPage]}
        />
      </TableContainer>
    </div>
  );
}
