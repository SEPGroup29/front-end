import React from "react";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button, TableHead } from "@mui/material";
import './vo_dashboard.css';

const vehicles = [
    { reg_no: 'XQ - 6799', type: 'Bike', fuel: 'Petrol' },
    { reg_no: 'CAB - 4067', type: 'Car', fuel: 'Petrol' },
    { reg_no: 'TL - 3353', type: 'Bike', fuel: 'Petrol' },
];

const stations = [
    { name: 'AK Filling Station', city: 'Walasmulla', petrol: 'Bike', diesel: 'Petrol' },
    { name: 'EDS Holdings', city: 'Walasmulla', petrol: 'Car', diesel: 'Petrol' },
    { name: 'Abeysekara Filling Station', city: 'Galle', petrol: 'Bike', diesel: 'Petrol' },
];

const queues = [
    { vehicle: 'XQ - 6799', token: 205, ongoing: 124 },
    { vehicle: 'CAB - 4067', token: 123, ongoing: 14 },
];

const VODashboard = () => {
    return (
        <div className="container vo_dashboard mt-5">

            <div className="row">
                <div className="col-md-6 mb-5 vehicle_list">
                    <h3 className="text-center vehicle_list_heading">VEHICLE LIST</h3>
                    <TableContainer component={Paper}>
                        <Table sx={{ minWidth: 650 }} aria-label="simple table">
                            {/* <TableHead>
                            <TableRow>
                                <TableCell>Dessert (100g serving)</TableCell>
                                <TableCell align="right">Calories</TableCell>
                                <TableCell align="right">Fat&nbsp;(g)</TableCell>
                                <TableCell align="right">Carbs&nbsp;(g)</TableCell>
                                <TableCell align="right">Protein&nbsp;(g)</TableCell>
                            </TableRow>
                        </TableHead> */}
                            <TableBody>
                                {vehicles.map((row) => (
                                    <TableRow
                                        key={row.reg_no}
                                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                    >
                                        <TableCell component="th" scope="row">
                                            {row.reg_no}
                                        </TableCell>
                                        <TableCell align="center">{row.type}</TableCell>
                                        <TableCell align="center">{row.fuel}</TableCell>
                                        <TableCell align="center"><Button variant="contained">Details</Button></TableCell>
                                        <TableCell align="center"><Button variant="contained" color="error">Remove</Button></TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                    <div className="mt-3">
                        <Button className="add_vehicle_btn" variant="contained">Add a vehicle</Button>
                    </div>
                </div>
                <div className="col-md-6 mb-5 fuel_quota">
                    <div className="row">
                        <div className="col-md-8 qr">
                            <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/QR_code_for_mobile_English_Wikipedia.svg/1200px-QR_code_for_mobile_English_Wikipedia.svg.png' alt="" height="300px" width="300px" />
                        </div>
                        <div className="col-md-4">
                            <p><b>Remaining Petrol Quota</b></p>
                            <p className="quota">6.50L</p>
                            <p><b>Eligible Petrol Quota</b></p>
                            <p className="quota">10.00L</p>
                            <p><b>Remaining Diesel Quota</b></p>
                            <p className="quota">16.20L</p>
                            <p><b>Eligible Diesel Quota</b></p>
                            <p className="quota">20.00L</p>
                        </div>
                    </div>
                    <div className="mt-3">
                        <Button className="add_vehicle_btn" variant="contained" color="warning">Add a vehicle</Button>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-6 mb-5 station_list">
                    <h3 className="text-center vehicle_list_heading">FUEL STATIONS</h3>
                    <p className="recent"><b>Recently joined fuel stations</b></p>
                    <TableContainer component={Paper}>
                        <Table sx={{ minWidth: 650 }} aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <TableCell align="center"><b>Fuel Station</b></TableCell>
                                    <TableCell align="center"><b>Near city</b></TableCell>
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
                                        <TableCell align="center"><Button variant="contained">Add to queue</Button></TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                    <div className="mt-3">
                        <Button className="add_vehicle_btn" variant="contained">Search fuel stations</Button>
                    </div>
                </div>
                <div className="col-md-6 mb-5 queue_details">
                    <h3 className="text-center vehicle_list_heading">QUEUE DETAILS</h3>
                    <TableContainer component={Paper}>
                        <Table sx={{ minWidth: 650 }} aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <TableCell align="center"><b>Vehicle Number</b></TableCell>
                                    <TableCell align="center"><b>Token Number</b></TableCell>
                                    <TableCell align="center"><b>Ongoing Number</b></TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {queues.map((row) => (
                                    <TableRow
                                        key={row.vehicle}
                                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                    >
                                        <TableCell component="th" scope="row">
                                            {row.vehicle}
                                        </TableCell>
                                        <TableCell align="center">{row.token}</TableCell>
                                        <TableCell align="center">{row.ongoing}</TableCell>
                                        <TableCell align="center"><Button variant="contained">Details</Button></TableCell>
                                        <TableCell align="center"><Button variant="contained" color="error">Withdraw</Button></TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </div>
            </div>




        </div>
    );
}

export default VODashboard;