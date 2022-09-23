import React from "react";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Box, Button } from "@mui/material";
import { Delete, InfoOutlined, AddCircle, FormatListNumbered } from '@mui/icons-material';


const VehicleList = ({ handleClick, vehicles }) => {
    return (

        <Box component="span" sx={{ p: 2, boxShadow: 5, background: '#fff' }} className="vlb">
            <div className="list_content">
                <h3 className="text-center heading"><FormatListNumbered />&ensp;VEHICLE LIST</h3>
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableBody>
                            {vehicles.map((row) => (
                                <TableRow
                                    key={row.reg_no}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell component="th" scope="row">
                                        {row.reg_no}
                                    </TableCell>
                                    <TableCell align="center">{(row.type).charAt(0).toUpperCase() + (row.type).slice(1)}</TableCell>
                                    <TableCell align="center">{row.fuel}</TableCell>
                                    <TableCell align="left"><Button variant="contained" onClick={handleClick}><InfoOutlined />&ensp;Details</Button></TableCell>
                                    <TableCell align="left"><Button variant="contained" color="error"><Delete />&ensp;Remove</Button></TableCell>
                                </TableRow>

                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
            <Button className="add_vehicle_btn" variant="contained"><AddCircle />&ensp;Add a vehicle</Button>

        </Box>

    );
}

export default VehicleList;