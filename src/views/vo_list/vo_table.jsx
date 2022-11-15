import * as React from 'react';
import Box from '@mui/material/Box';
import NoStations from '../fuel_stations/no_stations';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import { Card } from '@mui/material';

const columns = [
  { id: 'firstName', label: 'First Name', minWidth: 150 },
  { id: 'lastName', label: 'Last Name', minWidth: 150 },
  { id: 'epquota', label: 'Eligible Petrol Quota (L)', minWidth: 50 },
  { id: 'edquota', label: 'Eligible Diesel Quota (L)', minWidth: 50 },
  { id: 'rpquota', label: 'Remaining Petrol Quota (L)', minWidth: 50 },
  { id: 'rdquota', label: 'Remaining Diesel Quota (L)', minWidth: 50 },
];

export default function OwnersTable({vehicleOwners, search}) {

  const rows = vehicleOwners
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return(
    <Box sx={{ height: '100vh', mt: 3}} data-testid = "table">
    <Card sx={{ width: '100%', borderRadius: 5}} elevation={4} >
    {vehicleOwners.length === 0 ? <NoStations search={search} /> :
      <TableContainer >
        <Table stickyHeader aria-label="sticky table" >
          <TableHead sx={{ "& .MuiTableCell-stickyHeader": {backgroundColor: "primary.main"}}}>
            <TableRow >
              {columns.map((column) => (
                <TableCell
                  sx={{color: "rgb(255,255,255)", fontSize: "1rem"}}
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
}
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Card>
    </Box>
    

  );
}
