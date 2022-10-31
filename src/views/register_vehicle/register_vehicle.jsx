import React from "react";
import { Button, Card, CardContent, FormControl, Grid, InputLabel, MenuItem, Select, Typography } from "@mui/material";
import FormInput from "../../components/form_input/FormInput";
import MuiToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { styled } from '@mui/material/styles';
import vehicle_owner_services from '../../services/api/vehicle_owner_services'
import { useNavigate } from "react-router-dom";
import ErrorAlert from "../../alerts/errorAlert";
// import SuccessAlert from "../../alerts/successAlert";
import Loader from "../../components/loader/loader";
import { useState } from "react";

const vehicle_types = [
    {
        value: 'bike',
        label: 'Motor Bike',
    },
    {
        value: 'car',
        label: 'Car',
    },
    {
        value: 'van',
        label: 'Van',
    },
    {
        value: 'lorry',
        label: 'Lorry',
    },
];

export default function RegisterVehicle() {

    const [letters, setLetters] = useState('')
    const [vehicleNo, setVehicleNo] = useState('')
    let regNo = ''
    const [chassisNo, setChassisNo] = useState('')
    const [vehicle, setVehicle] = useState('');

    const [loader, setLoader] = useState(false)

    const handleChangeVehicle = (event) => {
        setVehicle(event.target.value);
    };

    const handleVehicleNumber = (value) => {
        console.log(value)
        if(parseInt(value) > 9999){
            setVehicleNo("9999")
        }
        else if (parseInt(value) < 0){
            setVehicleNo("0")
        }
        else{
            setVehicleNo(value)
        }
        console.log(vehicleNo)
    }

    const [fuel, setFuel] = React.useState('petrol')
    const [error, setError] = React.useState('')
    const navigate = useNavigate();

    const handleChange = (event, newFuel) => {
        setFuel(newFuel);
    };

    const ToggleButton = styled(MuiToggleButton)(({ selectedColor }) => ({
        '&.Mui-selected, &.Mui-selected:hover': {
            color: 'white',
            backgroundColor: selectedColor,
        },
    }));

    const handleAddVehicle = async (e) => {
        e.preventDefault()
        
        console.log(letters, vehicleNo)
        regNo = letters + ' ' + vehicleNo
        try {
            setLoader(true)
            console.log([regNo, chassisNo, vehicle, fuel])
            const response = await vehicle_owner_services.registerVehicle(regNo, chassisNo, vehicle, fuel)
            console.log(response)
            if (response.data.error) {
                setError(response.data.error)
            } else {
                navigate('/vo-dashboard')
            }
        } catch (error) {
            console.log(error)
            navigate('/503-error')
        }
        setLoader(false)
    }

    return (
        <dev>
            {loader && <Loader />}
            {!loader &&
                <Grid container minHeight="100vh" justifyContent="center" alignItems="center">
                    <Grid item xs={10} md={5} paddingTop={2}>
                        <Card sx={{ alignSelf: 'center', boxShadow: 12, borderRadius: 5 }} variant={"outlined"}>
                            <CardContent>
                                <Typography variant="h4">
                                    Register Vehicle
                                </Typography>
                                <Typography variant="subtitle1">
                                    FuelQ Management System
                                </Typography>
                                {error && <ErrorAlert custom_message={error}></ErrorAlert>}
                                {/* {success && <SuccessAlert custom_message={success}></SuccessAlert>} */}
                                <Typography sx={{ paddingTop: 2 }}>
                                    Vehicle Number
                                </Typography>
                                <Grid container spacing={2} sx={{ marginBottom: 2 }}>
                                    <Grid item xs={4}>
                                        <FormInput label="ABC" setValue={setLetters} isUpper = {true} maxLength = {3} />
                                    </Grid>
                                    <Grid item xs={8}>
                                        <FormInput label="1234" setValue={handleVehicleNumber} type = "number" value = {vehicleNo} />
                                    </Grid>
                                </Grid>
                                <FormInput label="Chassis Number" setValue={setChassisNo} />
                                <FormControl sx={{ mt: 2, mb: 2 }} fullWidth>
                                    <InputLabel id="demo-simple-select-label">Select vehicle type</InputLabel>
                                    <Select
                                        labelId="select_vehicle"
                                        id="select_vehicle"
                                        value={vehicle}
                                        label="Select vehicle type"
                                        onChange={handleChangeVehicle}
                                    >
                                        {vehicle_types.map((option) => (
                                            <MenuItem key={option.value} value={option.value}>
                                                {option.label}
                                            </MenuItem>
                                        ))}
                                    </Select>
                                </FormControl>
                                <Grid container>
                                    <ToggleButtonGroup
                                        color="primary"
                                        value={fuel}
                                        exclusive
                                        onChange={handleChange}
                                        aria-label="Platform"
                                        variant="contained"
                                        fullWidth
                                    >
                                        <ToggleButton value="petrol" selectedColor="#26a69a">Petrol</ToggleButton>
                                        <ToggleButton value="diesel" selectedColor="#26a69a">Diesel</ToggleButton>
                                    </ToggleButtonGroup>

                                </Grid>

                                <Button variant="contained" color="secondary" sx={{ marginTop: 2 }} fullWidth>Add another vehicle</Button>
                                <Button variant="contained" sx={{ marginTop: 2 }} fullWidth onClick={handleAddVehicle}>Done</Button>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            }
        </dev>
    )
}
