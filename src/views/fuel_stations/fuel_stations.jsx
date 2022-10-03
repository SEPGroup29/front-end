import { Typography } from "@mui/material";
import { Container } from "@mui/system";
import React, { useEffect, useState } from "react";
import fuel_station_services from "../../services/api/fuel_station_services";
import FuelStationTable from "./fuel_station_table";

const FuelStations = () => {

    useEffect(() => {
        getFuelStations()
    }, [])

    const [fuelStations, setFuelStations] = useState([])
    const getFuelStations = async () => {
        console.log("Inside getFuelStations")
        try {
            const response = await fuel_station_services.showAllFuelStations()
            if (response.status === 200) {
                setFuelStations(response.data.stations)
                console.log(response)
                // console.log('fs', fuelStations);
            }
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className="fuelStationList">
            <Container sx={{ mt: 3, mb: 15 }}>
                <Typography variant="h3" color="#022B3A" fontWeight='lighter'>
                    Fuel Stations
                </Typography>
                <FuelStationTable fuelStations={fuelStations} />
            </Container>
        </div>
    );
}

export default FuelStations;