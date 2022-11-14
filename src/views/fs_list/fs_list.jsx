import StationTable from "./fs_table";
import { Container, Grid, Typography } from "@mui/material";
import Loader from "../../components/loader/loader";
import { useNavigate } from "react-router-dom";
import SearchBar from "../../components/searchbar/searchbar";
import fuel_station_services from "../../services/api/fuel_station_services";
import { useEffect, useState } from "react";

const FuelStationList = () => {
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
        if (search === '') {
            search = null
        }
        try {
            setLoader(true)
            const response = await fuel_station_services.showAllFuelStations(search)
            if (response.status === 200) {
                setFuelStations(response.data.stations)
                console.log("Stations",response.data.stations)
            }
        } catch (error) {
            navigate('/503-error')
        }
        setLoader(false)
    }

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
                    <StationTable fuelStations={fuelStations} search />
                </Container>
            }
        </div>
    );
}

export default FuelStationList;