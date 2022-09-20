import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';

const columns = [
  { id: 'id', label: 'ID', minWidth: 50 },
  { id: 'firstName', label: 'First Name', minWidth: 150 },
  { id: 'lastName', label: 'Last Name', minWidth: 150 },
  { id: 'epquota', label: 'Eligible Petrol Quota (L)', minWidth: 50 },
  { id: 'edquota', label: 'Eligible Diesel Quota (L)', minWidth: 50 },
  { id: 'rpquota', label: 'Remaining Petrol Quota (L)', minWidth: 50 },
  { id: 'rdquota', label: 'Remaining Diesel Quota (L)', minWidth: 50 },
];

function createData(id, firstName, lastName, epquota, edquota, rpquota, rdquota) {
  return { id, firstName, lastName, epquota, edquota, rpquota, rdquota };
}

const rows = [
  createData(1, 'John', 'Doe', 15.00, 6.00, 20.00, 4.00),
  createData(2, 'Jane', 'Doe', 20.00, 9.00, 30.00, 4.00),
  createData(3, 'John', 'Smith', 26.00, 16.00, 24.00, 6.00),
  createData(4, 'Jane', 'Smith', 30.00, 3.70, 30.00, 4.30),
  createData(5, 'Yasiru', 'Doe', 35.00, 16.00, 40.00, 3.90),
  createData(6, 'Theshan', 'Doe', 30.00, 0.00, 20.00, 0.00),
  createData(7, 'Deshan', 'Smith', 30.00, 20.00, 60.00, 20.0),
  createData(8, 'Dilshan', 'Smith', 40.00, 3.20, 50.00, 6.50),
  createData(9, 'Pasan', 'Doe', 23.00, 9.00, 37.00, 4.30),
  createData(10, 'Nuwan', 'Doe', 26.00, 16.00, 24.00, 6.00),
  createData(11, 'John', 'Doe', 15.00, 6.00, 20.00, 4.00),
  createData(12, 'Jane', 'Doe', 20.00, 9.00, 30.00, 4.00),
  createData(13, 'John', 'Smith', 26.00, 16.00, 24.00, 6.00),
  createData(14, 'Jane', 'Smith', 30.00, 3.70, 30.00, 4.30),
  createData(15, 'Yasiru', 'Doe', 35.00, 16.00, 40.00, 3.90),
  createData(16, 'Theshan', 'Doe', 30.00, 0.00, 20.00, 0.00),
  createData(17, 'Deshan', 'Smith', 30.00, 20.00, 60.00, 20.0),
  createData(18, 'Dilshan', 'Smith', 40.00, 3.20, 50.00, 6.50),
  createData(19, 'Pasan', 'Doe', 23.00, 9.00, 37.00, 4.30),
  createData(20, 'Nuwan', 'Doe', 26.00, 16.00, 24.00, 6.00),
]


export default function OwnersTable() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const tableContainerSx: SxProps = {
    border: "1px solid rgba(128,128,128,0.4)",
    width: "max-content",
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: 4,
    borderRadius: 2,
    maxHeight: 400
  };

  return(
    
    <Paper sx={{ width: '100%', overflow: 'hidden' }}>
      <h1 className='heading mt 5'>Vehicle Owners</h1>
      <TableContainer sx={{ tableContainerSx }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead sx={{ "& .MuiTableCell-stickyHeader": {backgroundColor: "primary.main"} }}>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell key={column.id} align={column.align}>
                          {column.format && typeof value === 'number'
                            ? column.format(value)
                            : value}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}
