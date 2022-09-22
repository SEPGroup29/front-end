import React, { useState } from "react";
import { Container } from "@mui/material";
import './vo_dashboard.css';
import VehicleDetails from "./vehicle_details";
import VehicleList from "./vehicle_list";
import FuelQUota from "./fuel_quota";
import StationList from "./station_list";
import QueueDetails from "./queue_details";

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
            <Container maxWidth="xl" className="mt-5">
                <div className="row">
                    <div className="col-md-6 mb-3 vehicle_list">
                        <VehicleList handleClick={handleClick} vehicles={vehicles} />
                    </div>
                    <div className="col-md-6 mb-3 fuel_quota">
                        <FuelQUota />
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6 mb-3 station_list">
                        <StationList stations={stations} />
                    </div>
                    <div className="col-md-6 mb-3 queue_details">
                        <QueueDetails queues={queues} />
                    </div>
                </div>
            </Container>
            {clicked && <VehicleDetails clicked={clicked} setClicked={setClicked} vehicleDetails={vehicleDetails} />}
        </div>
    );
}

export default VODashboard;