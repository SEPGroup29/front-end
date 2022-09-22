import React from "react";
import Table from '@mui/material/Table';
import TableHead from "@mui/material/TableHead";
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Box, Button } from "@mui/material";
import { FollowTheSigns, LocalGasStation, LocationOn, Search } from '@mui/icons-material';

const StationList = ({stations}) => {
    return (
        <Box component="span" sx={{ p:2, boxShadow: 5 }}>
            <h3 className="text-center heading"><LocalGasStation />&ensp;FUEL STATIONS</h3>
            <p className="recent" style={{ color: '#ed6c02' }}><b>Recently joined fuel stations: </b></p>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell align="center"><b>Fuel Station</b></TableCell>
                            <TableCell align="center"><LocationOn style={{ color: 'crimson', fontSize: '15px' }} />&ensp;<b>Near city</b></TableCell>
                            <TableCell align="center"><b>Petrol Stock</b></TableCell>
                            <TableCell align="center"><b>Diesel Stock</b></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {stations.map((row) => (
                            <TableRow
                                key={row.name}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    {row.name}
                                </TableCell>
                                <TableCell align="center">{row.city}</TableCell>
                                <TableCell align="center">{row.petrol}</TableCell>
                                <TableCell align="center">{row.diesel}</TableCell>
                                <TableCell align="center"><Button variant="contained"><FollowTheSigns />Add to queue</Button></TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <div className="mt-3">
                <Button className="add_vehicle_btn" variant="contained"><Search />&ensp;Search fuel stations</Button>
            </div>
        </Box>
    );
}

export default StationList;