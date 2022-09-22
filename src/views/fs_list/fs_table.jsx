import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
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
  { id: 'city', label: 'Near City', minWidth: 150 },
  { id: 'owner', label: "Owner's Name", minWidth: 150 },
  { id: 'pstock', label: 'Petrol Stock (L)', minWidth: 50 },
  { id: 'dstock', label: 'Diesel Stock (L)', minWidth: 50 },
  { id: 'rpstock', label: 'Remaining Petrol Stock (L)', minWidth: 50 },
  { id: 'rdstock', label: 'Remaining Diesel Stock (L)', minWidth: 50 },
];

function createData(id, city, owner, pstock, dstock, rpstock, rdstock) {
  return { id, city, owner, pstock, dstock, rpstock, rdstock };
}

const rows = [
  createData(1, 'John', 'Doe', 15000,  20000,6000, 4000),
  createData(2, 'Jane', 'Doe', 20000,  30000,9000, 4000),
  createData(3, 'John', 'Smith', 26000,  24000,16000, 6000),
  createData(4, 'Jane', 'Smith', 30000,  30000,7770, 4030),
  createData(5, 'Yasiru', 'Doe', 35000,  40000, 16000, 3900),
  createData(6, 'Theshan', 'Doe', 30000,20000, 0.00,  0.00),
  createData(7, 'Deshan', 'Smith', 30000, 20000, 6000, 2000),
  createData(8, 'Dilshan', 'Smith', 40000, 32000, 5000, 6500),
  createData(9, 'Pasan', 'Doe', 23000, 90000, 3700, 43000),
  createData(10, 'Nuwan', 'Doe', 26000, 16000, 24000, 6000),
  createData(11, 'John', 'Doe', 15000,  20000,6000, 4000),
  createData(12, 'Jane', 'Doe', 20000,  30000,9000, 4000),
  createData(13, 'John', 'Smith', 26000,  24000,16000, 6000),
  createData(14, 'Jane', 'Smith', 30000,  30000,7770, 4030),
  createData(15, 'Yasiru', 'Doe', 35000,  40000, 16000, 3900),
  createData(16, 'Theshan', 'Doe', 30000,20000, 0.00,  0.00),
  createData(17, 'Deshan', 'Smith', 30000, 20000, 6000, 2000),
  createData(18, 'Dilshan', 'Smith', 40000, 32000, 5000, 6500),
  createData(19, 'Pasan', 'Doe', 23000, 90000, 3700, 43000),
  createData(20, 'Nuwan', 'Doe', 26000, 16000, 24000, 6000)
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

  return(
    <Container maxWidth="lg">
    <Box sx={{ height: '100vh'}}>
    <Paper sx={{ width: '100%'}} elevation={4} >
      <h1 align= "center">Fuel Stations</h1>
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
    </Box>
    
  </Container>

  );
}
