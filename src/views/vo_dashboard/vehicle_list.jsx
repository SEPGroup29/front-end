import React from "react";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Box, Button } from "@mui/material";
import { Delete, InfoOutlined, AddCircle, FormatListNumbered } from '@mui/icons-material';
import { Link } from "react-router-dom";


const VehicleList = ({ handleClick, handleRemoveVehicle, vehicles }) => {
    return (
        <Box component="span" sx={{ p: 2, boxShadow: 5, background: '#fff' }} className="vlb">
            {
                vehicles.length > 0 ?
                    <div className="list_content">
                        <h3 className="text-center heading"><FormatListNumbered />&ensp;VEHICLE LIST</h3>
                        <TableContainer component={Paper}>
                            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                                <TableBody>
                                    {vehicles.map((row) => (
                                        <TableRow
                                            key={row.regNo}
                                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                        >
                                            <TableCell component="th" scope="row">
                                                {row.regNo}
                                            </TableCell>
                                            <TableCell align="center">{(row.vehicleType.type).charAt(0).toUpperCase() + (row.vehicleType.type).slice(1)}</TableCell>
                                            <TableCell align="center">{(row.fuelType).charAt(0).toUpperCase() + (row.fuelType).slice(1)}</TableCell>
                                            <TableCell align="left"><Button id={row._id} variant="contained" onClick={handleClick}><InfoOutlined />&ensp;Details</Button></TableCell>
                                            <TableCell align="left"><Button id={row._id} variant="contained" color="error" onClick={handleRemoveVehicle}><Delete />&ensp;Remove</Button></TableCell>
                                        </TableRow>

                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </div>
                    :
                    <div>
                        <h4>No vehicles to show</h4>
                    </div>
            }
            <Link to={'/register-vehicle'}><Button className="add_vehicle_btn" variant="contained"><AddCircle />&ensp;Add a vehicle</Button></Link>
        </Box>

    );
}

export default VehicleList;