import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import { Button, Card } from '@mui/material';
import { FollowTheSigns, LocationOn } from '@mui/icons-material';
import NoStations from './no_stations';
import JoinQueue from '../vo_dashbord_new/join_queue';

const columns = [
    { id: 'name', label: "Name", minWidth: 150 },
    { id: 'nearCity', label: 'Near City', minWidth: 150 },
    { id: 'rpstock', label: 'Remaining Petrol Stock (L)', minWidth: 50 },
    { id: 'rdstock', label: 'Remaining Diesel Stock (L)', minWidth: 50 },
];

export default function FuelStationTable({ fuelStations, search, handleAddQueue }) {

    const rows = fuelStations
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    return (
        <Box sx={{ height: '100vh', mt: 3 }}>
            <Card sx={{ width: '100%', borderRadius: 5 }} elevation={4} >

                <Box
                    component="form"
                    sx={{
                        '& .MuiTextField-root': { m: 1, width: '25ch' },
                    }}
                    noValidate
                    autoComplete="off"
                >

                </Box>
                {fuelStations.length === 0 ? <NoStations search={search} /> :
                    <TableContainer>
                        <Table stickyHeader aria-label="sticky table" >
                            <TableHead sx={{ "& .MuiTableCell-stickyHeader": { backgroundColor: "primary.main" }, borderRadius: 5 }}>
                                <TableRow >
                                    {columns.map((column) => (
                                        <TableCell
                                            sx={{ color: "rgb(255,255,255)", fontSize: "1rem" }}
                                            key={column.id}
                                            align={'center'}
                                            style={{ minWidth: column.minWidth }}
                                        >
                                            {column.label === 'Near City' && <span><LocationOn style={{ color: 'crimson', fontSize: '15px' }} />&ensp;</span>}
                                            {column.label}
                                        </TableCell>
                                    ))}
                                    <TableCell align="center"></TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {rows
                                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                    .map((row) => {
                                        return (
                                            <TableRow hover role="checkbox" tabIndex={-1} key={row}>
                                                {columns.map((column) => {
                                                    const value = row[column.id];
                                                    return (
                                                        <TableCell
                                                            key={column.id}
                                                            align={'center'}
                                                            sx={column.id === 'rpstock' || column.id === 'rdstock' ? { fontSize: '20px', color: '#673ab7' } : {}}
                                                        >
                                                            {column.format && typeof value === 'number'
                                                                ? column.format(value)
                                                                : value}
                                                        </TableCell>
                                                    );
                                                })}
                                                <TableCell><Button id={row._id} variant="contained" color='secondary' onClick={handleAddQueue}><FollowTheSigns />Join</Button></TableCell>
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
