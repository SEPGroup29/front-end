import React from "react";
import {Card, CardContent, Grid, Typography} from "@mui/material";
import VehicleListComponent from "./vehicle_list_component";
import "../vo_dashbord_new/vo_dashbord.css"

const Vo_Dashboard_new = () => {
    return (
        <div className="vo-dashboard">
            <Typography variant="h3">
                Welcome, Yasiru,
            </Typography>
        <Grid container maxWidth="xl" spacing={2} paddingTop={3}>
            <Grid item xs={12} lg={7} paddingTop={2}>
                <VehicleListComponent />
            </Grid>
            <Grid item xs={12} lg={5} paddingTop={2}>
                <Card sx={{ alignSelf : 'center' , boxShadow: 12}} variant={"outlined"}>
                    <CardContent>

                    </CardContent>
                </Card>
            </Grid>
        </Grid>

        </div>
    )
}

export default Vo_Dashboard_new;