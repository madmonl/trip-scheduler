import React, { useState } from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TablePagination from '@material-ui/core/TablePagination';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';

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

export default function DataTable({ header, rows }) {
  const rowsPerPage = 10;
  const [currPage, setCurrPage] = useState(0);

  const handleChangePage = (event, newPageNumber) => {
    setCurrPage(newPageNumber);
  }

  return (
    <Paper>
      <TableContainer className="table-container" component={Paper}>
        <Table className="table" aria-label="customized table">
          <TableHead>
            <TableRow>
              {header.map((name, index) => (
                <StyledTableCell
                  key={index}
                  className="table__header table__cell"
                >{name}</StyledTableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.slice(currPage * rowsPerPage, (currPage + 1) * rowsPerPage).map((row) => (
              <StyledTableRow key={row.id}>
                {header.map((name, index) => {
                  return (
                    <StyledTableCell key={index} component="th" scope="row">
                      {row[name]}
                    </StyledTableCell>
                  )
                })}
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        className="table__pagination"
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={currPage}
        onChangePage={handleChangePage}
        rowsPerPageOptions={[rowsPerPage]}
      />
    </Paper >
  );
}
