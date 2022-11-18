import React from "react";
import { useState, useEffect } from "react";
import {Container} from "@mui/system";
import {Grid, Link, Typography} from "@mui/material";
import AdminServices from "../../services/api/admin_services";
import InfoCard from "./info_card";
import DriverImage from "./images/Driver.jpg";
import FuelStationImage from "./images/FuelStation.jpg";
import QueueImage from "./images/Queue.jpg";
import VehicleImage from "./images/Vehicle.jpg"
import ButtonCard from "./button_card";
import GroupIcon from '@mui/icons-material/Group';
import CommuteIcon from '@mui/icons-material/Commute';
import LocalGasStationIcon from '@mui/icons-material/LocalGasStation';
import FormatListNumberedRtlIcon from '@mui/icons-material/FormatListNumberedRtl';
import Loader from "../../components/loader/loader";



export default function AdminDashboard() {
        const [loader, setLoader] = useState(false)
        const [voCount, setVoCount] = useState(0)
        const [vehicle, setVehicle] = useState(0)
        const [fsCount, setFsCount] = useState(0)
        const [qCount, setQCount] = useState(0)

    useEffect(()=>{
        dashboardData()
    },[])

    const dashboardData = async() => {
        setLoader(true)
        try{
            const response = await  AdminServices.showDashboard()
            if(response){
                console.log(response)
                if (response.status === 200){
                        if (response.data.error) {
                           console.log(response.data.error)
                           return
                        }
                    }
                    setVoCount(response.data.vehicleOwnerCount)
                    setVehicle(response.data.vehicleCount)
                    setFsCount(response.data.fuelStationCount)
                    setQCount(response.data.queueCount)
                    console.log(response)
            }
        }catch(error){
            console.log(error)
        }
        setLoader(false)
    }


    return(
        <div>
            {loader && <Loader />}
            {!loader && 
            <Container maxWidth="xl" sx={{mt:3}}>
                <Typography variant="h3" color="#022B3A" fontWeight='lighter'>FuelQ - Admin Dashboard </Typography>
            <Grid container spacing={2} paddingTop={5}>
            
                <Grid item xs={3}>
                    <InfoCard
                        image={DriverImage}
                        cardTitle="Registered Vehicle Owners"
                        amount={voCount}
                        icon={<GroupIcon fontSize="large" />}
                    />
                </Grid>
                <Grid item xs={3}>
                    <InfoCard
                        image={VehicleImage}
                        cardTitle="Registered Vehicles"
                        amount={vehicle}
                        icon={<CommuteIcon fontSize="large" />}
                    />
                </Grid>
                <Grid item xs={3}>
                    <InfoCard
                        image={FuelStationImage}
                        cardTitle="Registered Fuel Stations"
                        amount={fsCount}
                        icon={<LocalGasStationIcon fontSize="large" />}
                    />
                </Grid>
                <Grid item xs={3}>
                    <InfoCard
                        image={QueueImage}
                        cardTitle="Active Queues"
                        amount={qCount}
                        icon={<FormatListNumberedRtlIcon fontSize="large" />}
                    />
                </Grid>
                <Grid item xs={4}>
                    <Link href="/register-fuel-station" sx={{textDecoration: 'none'}}><ButtonCard text="Register Fuel Station"/></Link>
                </Grid>
                
                <Grid item xs={4}>
                    <Link href="/vo-list" sx={{textDecoration: 'none'}}><ButtonCard text="View Vehicle Owners" /></Link>
                </Grid>
                <Grid item xs={4}>
                    <Link href="/fs-list" sx={{textDecoration: 'none'}}><ButtonCard text="View Fuel Stations"/></Link>
                </Grid>
            </Grid>
        </Container>
            }
        </div>
        
    )
}