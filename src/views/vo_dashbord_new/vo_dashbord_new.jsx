import React from "react";
import {Grid, Typography} from "@mui/material";
import VehicleListComponent from "./vehicle_list_component";
import "../vo_dashbord_new/vo_dashbord.css"
import QRComponent from "./qr_component";
import FuelStationListComponent from "./fuel_stations_list_componennt";
import QueueDetailComponent from "./queue_details_component";

const Vo_Dashboard_new = () => {
    return (
        <div className="vo-dashboard">
            <Typography variant="h3" color="#022B3A" fontWeight='lighter'>
                Welcome, Yasiru,
            </Typography>
        <Grid container maxWidth="xl" spacing={2} paddingTop={3} alignItems="center">
            <Grid item xs={12} md={8} lg={7} paddingTop={2}>
                <VehicleListComponent />
            </Grid>
            <Grid item xs={12} md={4} lg={5} paddingTop={2}>
                <QRComponent />
            </Grid>
            <Grid item xs={12} md={8} lg={7} paddingTop={2}>
                <FuelStationListComponent />
            </Grid>
            <Grid item xs={12} md={4} lg={5} paddingTop={2}>
                <QueueDetailComponent />
            </Grid>
        </Grid>

        </div>
    )
}

export default Vo_Dashboard_new;