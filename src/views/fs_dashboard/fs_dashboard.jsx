import React, { useEffect } from "react";
import Container from '@mui/material/Container';
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import StockDetails from "./fs_pbar";
import PropTypes from 'prop-types';
import Typography from '@mui/material/Typography';
import CardHeader from '@mui/material/CardHeader';
import { Button, CardContent, Link, Table, TableBody, TableCell, TableContainer, TableRow } from "@mui/material";
import { Add, Email, LocalGasStation, Person, PhoneAndroid } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import fuel_station_services from "../../services/api/fuel_station_services";
import Loader from "../../components/loader/loader";
import ErrorAlert from "../../alerts/errorAlert"
import Paper from "@mui/material/Paper";
import Empty from "./empty";
import PoTable from "./po_table";
import moment from "moment/moment";

function Item({ name, value }) {

    return (
        <Box>
            <h5 align="center">{name}</h5>
            <h1 align="center" style={{ color: '#00897b' }}>{value} </h1>
        </Box>

    );
}

Item.propTypes = {
    /**
     * The system prop that allows defining system overrides as well as additional CSS styles.
     */
    sx: PropTypes.oneOfType([
        PropTypes.arrayOf(
            PropTypes.oneOfType([PropTypes.func, PropTypes.object, PropTypes.bool]),
        ),
        PropTypes.func,
        PropTypes.object,
    ]),
};



const FsDashboard = () => {
    const [fuelStation, setFuelStation] = useState()
    const [pumpOperators, setPumpOperators] = useState()
    const [petrolTokens, setPetrolTokens] = useState()
    const [dieselTokens, setDieseltokens] = useState()
    const [error, setError] = useState()
    const [loader, setLoader] = useState(false)
    const [date, setDate] = useState(moment())
    useEffect(() => {
        getFuelStation()
        // getQueueDetails()
    }, [])

    const getFuelStation = async () => {
        setLoader(true)
        try {
            const response = await fuel_station_services.showFuelStation()
            if (response.data.error) {
                setError(response.data.error)
            }
            setFuelStation(response.data.fs)
            setPumpOperators(response.data.pumpOperators)

            // Get queue details
            const res = await fuel_station_services.getQueueCount(response.data.fs.fuelStationId._id)
            if (res.data.error) {
                setError(res.data.error)
            }
            setPetrolTokens(res.data.petrolTokens)
            setDieseltokens(res.data.dieselTokens)
        } catch (error) {
            console.log("error:",error)
            navigate('/503-error')
        }
        setLoader(false)
    }

    const navigate = useNavigate()

    const handleAddPo = () => {
        navigate('/register-po', { state: { fs_name: fuelStation.fuelStationId.name, fs_id: fuelStation.fuelStationId._id } }) // Should send actual fuel station id and name
    }

    const handleUpdateStock = () => {
        navigate('/update-fuel-stock', { state: { fs_name: fuelStation.fuelStationId.name, fs_id: fuelStation.fuelStationId._id } }) // Should send actual fuel station id and name
    }

    return (
        <div className="fs_dashboard">
            {loader && <Loader />}
            {!loader && fuelStation &&
                <Container sx={{ mt: 3, mb: 15 }}>
                    {error && <ErrorAlert custom_message={error}></ErrorAlert>}
                    <Typography variant="h3" color="#022B3A" fontWeight='lighter'>
                        {fuelStation.fuelStationId.name}, {fuelStation.fuelStationId.nearCity}
                    </Typography>
                    <Card
                        sx={{
                            mt: 3,
                            alignSelf: 'center',
                            borderRadius: 5,
                        }}
                        variant={"outlined"}
                    >
                        <CardHeader
                            sx={{ backgroundColor: 'primary.main', color: 'white' }}
                            title={
                                <Typography
                                    variant="h5"
                                    sx={{
                                        textAlign: "center",
                                        fontWeight: "medium"
                                    }}
                                >
                                    Remaining Stocks - {date.format('D/MM/YYYY kk:mm ')}
                                </Typography>
                            }
                        />
                        <StockDetails fuelStation={fuelStation} />
                        <Typography sx={{ textAlign: 'center', mb: 3 }}>
                            {(0 <= parseInt(date.format('kk')) && parseInt(date.format('kk')) <= 3) ?
                                <Button sx={{ paddingLeft: 5, paddingRight: 5 }} variant="contained" color="secondary" onClick={handleUpdateStock}><Add /> Update Stock </Button>
                                :
                                <Typography variant="h6" sx={{ color: 'crimson' }}>Stock update only available from 00.00 to 03.00</Typography>
                            }
                        </Typography>
                        <Button sx={{ paddingLeft: 5, paddingRight: 5 }} variant="contained" color="secondary" onClick={handleUpdateStock}><Add /> Update Stock </Button>
                    </Card>


                    <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', borderRadius: 5 }} mt={2}>

                        <Card sx={{ mr: 3, borderRadius: 5 }}>
                            <CardHeader
                                sx={{ backgroundColor: 'primary.main', color: 'white', mb: 3 }}
                                title={
                                    <Typography
                                        variant="h5"
                                        sx={{
                                            textAlign: "center",
                                            fontWeight: "medium"
                                        }}
                                    >
                                        Petrol Queue
                                    </Typography>
                                }
                            />
                            <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)' }}>
                                <Item name={"Tokens Given"} value={petrolTokens.allTokens}></Item>
                                <Item name={"Maximum Tokens for Today"} value={petrolTokens.todayTokens}></Item>
                            </Box>
                        </Card>
                        <Card sx={{ ml: 3, borderRadius: 5 }}>
                            <CardHeader
                                sx={{ backgroundColor: 'primary.main', color: 'white', mb: 3 }}
                                title={
                                    <Typography
                                        variant="h5"
                                        sx={{
                                            textAlign: "center",
                                            fontWeight: "medium"
                                        }}
                                    >
                                        Diesel Queue
                                    </Typography>
                                }
                            />
                            <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)' }}>
                                <Item name={"Tokens Given"} value={dieselTokens.allTokens} ></Item>
                                <Item name={"Maximum Tokens for Today"} value={dieselTokens.todayTokens}></Item>
                            </Box>
                        </Card>
                    </Box>

                    <Card
                        sx={{
                            mt: 3,
                            alignSelf: 'center',
                            borderRadius: 5,
                        }}
                        variant={"outlined"}
                    >
                        <CardHeader
                            sx={{ backgroundColor: 'primary.main', color: 'white' }}
                            title={
                                <Typography
                                    variant="h5"
                                    sx={{
                                        textAlign: "center",
                                        fontWeight: "medium"
                                    }}
                                >
                                    Pump Operators
                                </Typography>
                            }
                        />
                        <CardContent>
                            {pumpOperators.length > 0 ?
                                <PoTable pumpOperators={pumpOperators} />
                                :
                                <Empty subject={'No pump operators assigned to this fuel station yet'} description={'Add one or more pump operator to continue fuel refilling process and using the system'} />
                            }
                        </CardContent>
                        <Typography sx={{ textAlign: 'center', mt: 3, mb: 3 }}>
                            <Button sx={{ paddingLeft: 5, paddingRight: 5 }} variant="contained" color="secondary" onClick={handleAddPo}><Add /> Add Pump Operator </Button>
                        </Typography>
                    </Card>

                </Container>
            }
        </div>
    );
}

export default FsDashboard;