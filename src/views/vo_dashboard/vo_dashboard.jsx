import React, { useEffect, useState } from "react";
import { Container } from "@mui/material";
import './vo_dashboard.css';
import VehicleDetails from "./vehicle_details";
import VehicleList from "./vehicle_list";
import FuelQUota from "./fuel_quota";
import StationList from "./station_list";
import QueueDetails from "./queue_details";
import QueueDet from "./queue_det";
import WithdrawAlertBox from "./withdraw_alertbox";
import RemoveAlertBox from "./remove_alertbox";
import JoinQueue from "./join_queue";
import vehicle_owner_services from '../../services/api/vehicle_owner_services';
import ErrorAlert from '../../alerts/errorAlert';

// let vehicles = [
//     { regNo: 'XQ - 6799', chassisNo: 'XXXXXXXX', vehicleType: 'bike', fuelType: 'Petrol' },
//     { regNo: 'CAB - 4067', chassisNo: 'XXXXXXXX', vehicleType: 'car', fuelType: 'Petrol' },
//     { regNo: 'TL - 3353', chassisNo: 'XXXXXXXX', vehicleType: 'bike', fuelType: 'Petrol' },
// ];

const VODashboard = () => {
    const [vehicles, setVehicles] = useState([])

    const stations = [
        { name: 'AK Filling Station', city: 'Walasmulla', petrol: 60549, diesel: 24769 },
        { name: 'EDS Holdings', city: 'Walasmulla', petrol: 600, diesel: 14000 },
        { name: 'Abeysekara Filling Station', city: 'Galle', petrol: 600, diesel: 12567 },
    ];

    const queues = [
        { vehicle: 'XQ - 6799', token: 124, ongoing: 205 },
        { vehicle: 'CAB - 4067', token: 14, ongoing: 123 },
    ];

    useEffect(() => {
        getVehicles()
    }, [])

    const [error, setError] = useState()
    const getVehicles = async () => {
        try {
            const response = await vehicle_owner_services.showVehicles()
            if (response) {
                if (response.status === 200)
                    setVehicles(response.data.vehicles)
                else if (response.status === 400)
                    setError("Internal server error")
            } else
                setError("Unkonown error occured.")
        } catch (error) {

        }
    }

    const [clickedVehicles, setClickedVehicles] = useState(false)
    const [vehicleDetails, setVehicleDetails] = useState(null)
    const handleClickVehicles = (event) => {
        vehicles.map(v => {
            if (v.id === event.target.id) {
                setVehicleDetails(v)
                // console.log(v);
            }
        })
        // setVehicleDetails({ regNo: 'CAA - 1234', chassisNo: 123456789, type: 'Car', fuel: 'Petrol' })   // Get from database
        setClickedVehicles(true)
    }

    const [clickedQueues, setClickedQueues] = useState(false)
    const [queueDetails, setQueueDetails] = useState(null)
    const handleClickQueues = () => {
        setQueueDetails({ regNo: 'CAA - 1234', tokenNo: 124, totalTokens: 205, type: 'Petrol', fsName: 'Abeysekara Filling Station', city: 'Galle' })   // Get from database
        setClickedQueues(true)
    }

    const [clickedWithdraw, setClickedWithdraw] = useState(false)
    const handleWithdrawQueues = () => {
        setQueueDetails({ regNo: 'CAA - 1234', tokenNo: 124, totalTokens: 205, type: 'Petrol', fsName: 'Abeysekara Filling Station', city: 'Galle' })   // Get from database
        setClickedWithdraw(true)
    }

    const [clickedRemove, setClickedRemove] = useState(false)
    const handleRemoveVehicle = () => {
        setVehicleDetails({ regNo: 'CAA - 1234', chassisNo: 123456789, type: 'Car', fuel: 'Petrol' })   // Get from database
        setClickedRemove(true)
    }

    const [clickedAdd, setClickAdd] = useState(false)
    const handleAddQueue = () => {
        setClickAdd(true)
    }

    return (
        <div className="vo_dashboard">
            <h1 align="center" style={{ marginTop: '5px' }}>Dashboard</h1>
            {error && <ErrorAlert custom_message={error} />}
            <Container maxWidth="xl" className="mt-3">
                <div className="row">
                    <div className="col-md-6 mb-3 vehicle_list">
                        <VehicleList handleClick={handleClickVehicles} handleRemoveVehicle={handleRemoveVehicle} vehicles={vehicles} />
                    </div>
                    <div className="col-md-6 mb-3 fuel_quota">
                        <FuelQUota />
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6 mb-3 station_list">
                        <StationList handleClick={handleAddQueue} stations={stations} />
                    </div>
                    <div className="col-md-6 mb-3 queue_details">
                        <QueueDetails handleClick={handleClickQueues} handleWithdrawQueues={handleWithdrawQueues} queues={queues} />
                    </div>
                </div>
            </Container>

            {/* Popup components */}
            {clickedVehicles && <VehicleDetails clicked={clickedVehicles} setClicked={setClickedVehicles} vehicleDetails={vehicleDetails} />}
            {clickedQueues && <QueueDet clicked={clickedQueues} setClicked={setClickedQueues} queueDetails={queueDetails}></QueueDet>}
            {clickedWithdraw && <WithdrawAlertBox clicked={clickedWithdraw} setClicked={setClickedWithdraw} queueDetails={queueDetails}></WithdrawAlertBox>}
            {clickedRemove && <RemoveAlertBox clicked={clickedRemove} setClicked={setClickedRemove} vehicleDetails={vehicleDetails}></RemoveAlertBox>}
            {clickedAdd && <JoinQueue clicked={clickedAdd} setClicked={setClickAdd} />}
        </div>
    );
}

export default VODashboard;