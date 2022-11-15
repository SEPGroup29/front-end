
import OwnersTable from "./vo_table";
import { Container, Typography, Grid } from "@mui/material";
import admin_services from "../../services/api/admin_services";
import SearchBar from "../../components/searchbar/searchbar";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Loader from "../../components/loader/loader";

const VehicleOwnersList = () => {

    //fetch vehicle owners from the backend
    const [search, setSearch] = useState()

    useEffect(() => {
        getVehicleOwners()
    },[])

    const [vehicleOwners, setVehicleOwners] = useState([])
    const [loader, setLoader] = useState(false)
    const navigate = useNavigate()

    const handleSearch = () => {
        getVehicleOwners(search)
    }

    const getVehicleOwners = async (search = null) => {
        if (search === '') {
            search = null
        }
        try {
            setLoader(true)
            const response = await admin_services.getVehicleOwnersList(search)
            if (response.status === 200) {
                setVehicleOwners(response.data.vehicleOwners)
                console.log("Vehicle Owners",response.data.vehicleOwners)
            }
        } catch (error) {
            navigate('/503-error')
        }
        setLoader(false)
    }

    return (
        <div className="vehicleOwnersList">
            {loader && <Loader />}
            {!loader &&
            <Container sx={{ mt: 3, mb: 15 }}>
                <Typography variant="h3" color="#022B3A" fontWeight='lighter'>
                    Vehicle Owners
                </Typography>
                <Grid container>
                        <Grid item xs={12} sm={6} >
                            <SearchBar search={search} setSearch={setSearch} handleSearch={handleSearch} />
                        </Grid>
                    </Grid>
                <OwnersTable vehicleOwners={vehicleOwners} key="table"/>
            </Container>
            }
        </div>
    );
}

export default VehicleOwnersList;