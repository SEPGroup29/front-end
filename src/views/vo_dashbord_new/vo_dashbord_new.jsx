import React, { useEffect, useState } from "react";
import { Grid, Typography } from "@mui/material";
import VehicleListComponent from "./vehicle_list_component";
import "../vo_dashbord_new/vo_dashbord.css"
import QRComponent from "./qr_component";
import FuelStationListComponent from "./fuel_stations_list_componennt";
import QueueDetailComponent from "./queue_details_component";
import vehicle_owner_services from "../../services/api/vehicle_owner_services";
import ErrorAlert from "../../alerts/errorAlert";
import { Container } from "@mui/system";
import VehicleDetails from "./vehicle_details";
import QueueDet from "./queue_det";
import WithdrawAlertBox from "./withdraw_alertbox"
import RemoveAlertBox from "./remove_alertbox";
import JoinQueue from "./join_queue";
import Loader from "../../components/loader/loader";
import { useNavigate } from "react-router-dom";
import fuel_station_services from "../../services/api/fuel_station_services";

const Vo_Dashboard_new = () => {
    const [vehicles, setVehicles] = useState([])
    const [error, setError] = useState()
    const [voName, setVoName] = useState('')
    const [qrData, setQrData] = useState()
    const [remainingQuota, setRemainingQuota] = useState()
    const [loader, setLoader] = useState(false)
    const navigate = useNavigate()

    const [stations, setStations] = useState([
        // { name: 'AK Filling Station', city: 'Walasmulla', petrol: 60549, diesel: 24769, petrolQueue: 110, dieselQueue: 100 },
        // { name: 'EDS Holdings', city: 'Walasmulla', petrol: 600, diesel: 14000, petrolQueue: 200, dieselQueue: 189 },
        // { name: 'Abeysekara Filling Station', city: 'Galle', petrol: 600, diesel: 12567, petrolQueue: 96, dieselQueue: 90 },
    ])

    const queues = [
        { vehicle: 'XQ - 6799', token: 124, ongoing: 205 },
        { vehicle: 'CAB - 4067', token: 14, ongoing: 123 },
    ];

    useEffect(() => {
        getVo()
        getVehicles()
        getFuelStations()
    }, [])

    const getVo = async () => {
        setLoader(true)
        try {
            const response = await vehicle_owner_services.getVehicleOwner()
            if (response) {
                if (response.status === 200)
                    if (response.data.error) {
                        navigate('/logout')
                        return
                    }
                setVoName(response.data.vo.user.firstName)
                setQrData({
                    id: response.data.vo._id,
                    NIC: response.data.vo.NIC
                })
                setRemainingQuota(response.data.remainingQuota)
            }
            else {
                setError("Unknown Error Occured")
            }
        }
        catch (error) {
            navigate('/503-error')
        }
        setLoader(false)
    }

    const getVehicles = async () => {
        setLoader(true)
        try {
            const response = await vehicle_owner_services.showVehicles()
            if (response.data.error) {
                navigate('/logout')
                return
            }
            if (response.data.vehicles) {
                setVehicles(response.data.vehicles)
            }
        }
        catch (error) {
            // setError("Unknown Error Occured")
            navigate('/503-error')
        }
        setLoader(false)
    }

    const getFuelStations = async () => {
        setLoader(true)
        try {
            const response = await fuel_station_services.getThreeFuelStations()
            if (response.data.error) {
                navigate('/logout')
                return
            }
            if (response.data.result) {
                const fs = response.data.result
                const tempStations = []
                fs.map(station => (
                    tempStations.push({ id: station._id, name: station.name, city: station.nearCity, petrol: station.rpstock ? station.rpstock : 0, diesel: station.rdstock ? station.rdstock : 0 })
                ))
                setStations(tempStations)
            }
        }
        catch (error) {
            navigate('/503-error')
        }
        setLoader(false)
    }

    const [clickedVehicles, setClickedVehicles] = useState(false)
    const [vehicleDetails, setVehicleDetails] = useState()
    const handleClickVehicles = (event) => {
        vehicles.map(v => {
            if (v._id === event.target.id) {
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
    const handleRemoveVehicle = (event) => {
        // setVehicleDetails({ regNo: 'CAA - 1234', chassisNo: 123456789, type: 'Car', fuel: 'Petrol' })   // Get from database
        // console.log(event.target.id)
        vehicles.map(v => {
            if (v._id === event.target.id) {
                setVehicleDetails(v)
                // console.log(v);
            }
        })
        setClickedRemove(true)
    }

    const [clickedAdd, setClickAdd] = useState(false)
    const [stationId, setStationId] = useState()
    const handleAddQueue = (event) => {
        stations.map(s => {
            if (s.id === event.target.id) {
                setStationId(s.id)
            }
        })
        setClickAdd(true)
    }

    return (
        <div className="vo-dashboard">
            {loader && <Loader />}
            {!loader &&
                <Container maxWidth="xl">
                    <Typography variant="h3" color="#022B3A" fontWeight='lighter'>
                        Welcome, {voName}
                    </Typography>
                    {error && <ErrorAlert custom_message={error} />}
                    <Grid container spacing={2} paddingTop={3} justifyContent="center" alignItems="center">
                        <Grid item xs={12} md={8} lg={7} paddingTop={2}>
                            <VehicleListComponent handleClick={handleClickVehicles} handleRemoveVehicle={handleRemoveVehicle} vehicles={vehicles} />
                        </Grid>
                        <Grid item xs={12} md={4} lg={5} paddingTop={2}>
                            <QRComponent qrData={qrData} remainingQuota={remainingQuota} />
                        </Grid>
                        <Grid item xs={12} md={8} lg={7} paddingTop={2}>
                            <FuelStationListComponent handleClick={handleAddQueue} stations={stations} vehicles={vehicles} />
                        </Grid>
                        <Grid item xs={12} md={4} lg={5} paddingTop={2}>
                            <QueueDetailComponent handleClick={handleClickQueues} handleWithdrawQueues={handleWithdrawQueues} queues={queues} />
                        </Grid>
                    </Grid>

                    {/* Popup components */}
                    {clickedVehicles && <VehicleDetails clicked={clickedVehicles} setClicked={setClickedVehicles} vehicleDetails={vehicleDetails} />}
                    {clickedQueues && <QueueDet clicked={clickedQueues} setClicked={setClickedQueues} queueDetails={queueDetails}></QueueDet>}
                    {clickedWithdraw && <WithdrawAlertBox clicked={clickedWithdraw} setClicked={setClickedWithdraw} queueDetails={queueDetails}></WithdrawAlertBox>}
                    {clickedRemove && <RemoveAlertBox clicked={clickedRemove} setClicked={setClickedRemove} vehicleDetails={vehicleDetails}></RemoveAlertBox>}
                    {clickedAdd && <JoinQueue vehicles={vehicles} clicked={clickedAdd} setClicked={setClickAdd} stationId={stationId} />}
                </Container>
            }
        </div>
    )
}

export default Vo_Dashboard_new;