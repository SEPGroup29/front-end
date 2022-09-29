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
            <FuelStationTable fuelStations={fuelStations} />
        </div>
    );
}

export default FuelStations;