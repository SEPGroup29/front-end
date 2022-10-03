import React from "react";
import {Container} from "@mui/system";
import {Grid} from "@mui/material";
import InfoCard from "./info_card";
import DriverImage from "./images/Driver.jpg";
import FuelStationImage from "./images/FuelStation.jpg";
import QueueImage from "./images/Queue.jpg";
import VehicleImage from "./images/Vehicle.jpg"
import ButtonCard from "./button_card";

export default function AdminDashboard() {
    return(
        <Container maxWidth="xl">
            <Grid container spacing={2} paddingTop={2}>
                <Grid item xs={3}>
                    <InfoCard
                        image={DriverImage}
                        cardTitle="Registered Users"
                        amount="125493"
                    />
                </Grid>
                <Grid item xs={3}>
                    <InfoCard
                        image={VehicleImage}
                        cardTitle="Registered Vehicles"
                        amount="125493"
                    />
                </Grid>
                <Grid item xs={3}>
                    <InfoCard
                        image={FuelStationImage}
                        cardTitle="Registered Fuel Stations"
                        amount="125493"
                    />
                </Grid>
                <Grid item xs={3}>
                    <InfoCard
                        image={QueueImage}
                        cardTitle="Active Queues"
                        amount="125493"
                    />
                </Grid>
                <Grid item xs={3}>
                    <ButtonCard text="Register Fuel Station"/>
                </Grid>
                <Grid item xs={3}>
                    <ButtonCard text="Register Manager"/>
                </Grid>
                <Grid item xs={3}>
                    <ButtonCard text="View Vehicle Owners" />
                </Grid>
                <Grid item xs={3}>
                    <ButtonCard text="View Fuel Stations"/>
                </Grid>
            </Grid>
        </Container>
    )
}