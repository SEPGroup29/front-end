import { Grid, Typography } from "@mui/material";
import { Container } from "@mui/system";
import React, { useEffect, useState } from "react";
import fuel_station_services from "../../services/api/fuel_station_services";
import FuelStationTable from "./fuel_station_table";
import Loader from "../../components/loader/loader";
import { useLocation, useNavigate } from "react-router-dom";
import SearchBar from "./searchbar"
import JoinQueue from "../vo_dashbord_new/join_queue";

const FuelStations = () => {

    const [search, setSearch] = useState()

    useEffect(() => {
        getFuelStations()
    }, [])

    const [fuelStations, setFuelStations] = useState([])
    const [loader, setLoader] = useState(false)
    const navigate = useNavigate()

    const handleSearch = () => {
        getFuelStations(search)
    }

    const getFuelStations = async (search = null) => {
        console.log(search)
        if (search === '') {
            search = null
        }
        try {
            setLoader(true)
            const response = await fuel_station_services.showAllFuelStations(search)
            if (response.status === 200) {
                setFuelStations(response.data.stations)
            }
        } catch (error) {
            console.log(error)
            navigate('/503-error')
        }
        setLoader(false)
    }

    const [clickedAdd, setClickAdd] = useState(false)
    const [stationId, setStationId] = useState()
    const handleAddQueue = (event) => {
        fuelStations.map(s => {
            if (s._id === event.target.id) {
                setStationId(s._id)
            }
        })
        setClickAdd(true)
    }

    const location = useLocation()
    if(!location.state){
        navigate('/404-error')
        return
    } 
    const { vehicles } = location.state

    return (
        <div className="fuelStationList">
            {loader && <Loader />}
            {!loader &&
                <Container sx={{ mt: 3, mb: 15 }}>
                    <Typography variant="h3" color="#022B3A" fontWeight='lighter'>
                        Fuel Stations
                    </Typography>
                    <Grid container>
                        <Grid item xs={12} sm={6} >
                            <SearchBar search={search} setSearch={setSearch} handleSearch={handleSearch} />
                        </Grid>
                    </Grid>
                    <FuelStationTable fuelStations={fuelStations} search={search} handleAddQueue={handleAddQueue} />
                    {clickedAdd && <JoinQueue vehicles={vehicles} clicked={clickedAdd} setClicked={setClickAdd} stationId={stationId} />}
                </Container>
            }
        </div>
    );
}

export default FuelStations;