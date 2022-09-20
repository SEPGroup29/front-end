import React, { useState } from "react";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button, TableHead } from "@mui/material";
import './vo_dashboard.css';
import Navbar from "../../components/navbar/navbar";
import Footers from "../../components/footer/footer";
import { Delete, InfoOutlined, AddCircle, Download, FollowTheSigns, Logout, LocalGasStation, FormatListNumbered, LocationOn, Search } from '@mui/icons-material';
import { Box } from "@mui/system";

import VehicleDetails from "./vehicle_details";
import Footer from "../../components/footer/footer";

const vehicles = [
    { reg_no: 'XQ - 6799', chassis_no: 'XXXXXXXX', type: 'bike', fuel: 'Petrol' },
    { reg_no: 'CAB - 4067', chassis_no: 'XXXXXXXX', type: 'car', fuel: 'Petrol' },
    { reg_no: 'TL - 3353', chassis_no: 'XXXXXXXX', type: 'bike', fuel: 'Petrol' },
];

const stations = [
    { name: 'AK Filling Station', city: 'Walasmulla', petrol: 60549, diesel: 24769 },
    { name: 'EDS Holdings', city: 'Walasmulla', petrol: 600, diesel: 14000 },
    { name: 'Abeysekara Filling Station', city: 'Galle', petrol: 600, diesel: 12567 },
];

const queues = [
    { vehicle: 'XQ - 6799', token: 205, ongoing: 124 },
    { vehicle: 'CAB - 4067', token: 123, ongoing: 14 },
];

const VODashboard = () => {
    const [clicked, setClicked] = useState(false)
    const [vehicleDetails, setVehicleDetails] = useState(null)
    const handleClick = () => {
        setVehicleDetails({ regNo: 'CAA - 1234', chassisNo: 123456789, type: 'Car', fuel: 'Petrol' })   // Get from database
        setClicked(true)
    }

    return (
        <div className="vo_dashboard">
            <Navbar />
            <div className="container mt-5">
                <div className="row">
                    <div className="col-md-6 mb-3 vehicle_list">
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
                        <div className="mt-3">
                            <Button className="add_vehicle_btn" variant="contained"><AddCircle />&ensp;Add a vehicle</Button>
                        </div>
                    </div>
                    <div className="col-md-6 mb-3 fuel_quota">
                        <div className="row">
                            <div className="col-md-8 qr">
                                <Box component="span" sx={{ p: 2 }}>
                                    <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/QR_code_for_mobile_English_Wikipedia.svg/1200px-QR_code_for_mobile_English_Wikipedia.svg.png' alt="" height="300px" width="300px" />
                                </Box>
                            </div>
                            <div className="col-md-4">
                                <p><b>Remaining Petrol Quota</b></p>
                                <p className="quota" style={{ color: 'rgb(14, 210, 46)' }}><span className="magnify">6.50</span>&nbsp;L</p>
                                <p><b>Eligible Petrol Quota</b></p>
                                <p className="quota"><span className="magnify">10.00</span>&nbsp;L</p>
                                <p><b>Remaining Diesel Quota</b></p>
                                <p className="quota" style={{ color: 'rgb(14, 210, 46)' }}><span className="magnify">16.20</span>&nbsp;L</p>
                                <p><b>Eligible Diesel Quota</b></p>
                                <p className="quota"><span className="magnify">20.00</span>&nbsp;L</p>
                            </div>
                        </div>
                        <div className="mt-3">
                            <Button className="add_vehicle_btn" variant="contained" color="warning"><Download />&ensp;Download QR</Button>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6 mb-3 station_list">
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
                    </div>
                    <div className="col-md-6 mb-3 queue_details">
                        <h3 className="text-center heading"><FollowTheSigns />&ensp;QUEUE DETAILS</h3>
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
                                            <TableCell align="center" style={{ color: 'rgb(14, 210, 46)' }}><b>{row.token}</b></TableCell>
                                            <TableCell align="center">{row.ongoing}</TableCell>
                                            <TableCell align="center"><Button variant="contained"><InfoOutlined />&nbsp;Details</Button></TableCell>
                                            <TableCell align="center"><Button variant="contained" color="error"><Logout />Withdraw</Button></TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </div>
                </div>
            </div>
            {clicked && <VehicleDetails clicked={clicked} setClicked={setClicked} vehicleDetails={vehicleDetails} />}
            <Footer />
        </div>
    );
}

export default VODashboard;