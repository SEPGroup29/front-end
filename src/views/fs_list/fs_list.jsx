 import React from "react";
import StationTable from "./fs_table";
import { Container, Typography } from "@mui/material";

const fuelStationList = () => {

    return (
        <div className="fuelStationList">
            <Container sx={{ mt: 3, mb: 15 }}>
                <Typography variant="h3" color="#022B3A" fontWeight='lighter'>
                    Fuel Stations
                </Typography>
                <StationTable/>
            </Container>
        </div>
    );
}

export default fuelStationList;