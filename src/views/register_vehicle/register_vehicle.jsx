import React, { useEffect } from "react";
import { Button, Card, CardContent, FormControl, Grid, InputLabel, MenuItem, Select, Typography } from "@mui/material";
import FormInput from "../../components/form_input/FormInput";
import MuiToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { styled } from '@mui/material/styles';
import vehicle_owner_services from '../../services/api/vehicle_owner_services'
import { useLocation, useNavigate } from "react-router-dom";
import ErrorAlert from "../../alerts/errorAlert";
// import SuccessAlert from "../../alerts/successAlert";
import Loader from "../../components/loader/loader";
import { useState } from "react";
import SuccessAlert from "../../alerts/successAlert";
import api_validations from "../../utils/api_validations";

export default function RegisterVehicle() {
    const [vehicleTypes, setVehicleTypes] = useState([]);
    const [vehicleCount, setVehicleCount] = useState(0);

    useEffect(() => {
        getVehicleTypes()
        getRegisteredVehicleCount()
        // checkAddSuccess()
    }, [])

    const location = useLocation()
    const [addSuccess, setAddSuccess] = useState()
    // const checkAddSuccess = () => {
    //     // Hanlde successful registration redirects
    //     const search = location.search;
    //     const vehicleAdded = new URLSearchParams(search).get('vehicle_add');
    //     console.log('vehicleAdded', vehicleAdded);
    //     if (vehicleAdded === 'success')
    //         setAddSuccess('Vehicle added successfully')
    // }

    console.log("addSuccess", addSuccess);

    const getRegisteredVehicleCount = async () => {
        try {
            const response = await vehicle_owner_services.showVehicles()
            if (response) {
                if (response.status === 200) {
                    setVehicleCount(response.data.vehicles.length)
                }
                else if (response.status === 401) {
                    setError("Internal Server Error")
                }
            }
            else {
                setError("Unknown Error Occurred")
            }
        }
        catch (error) {
            console.log(error)
        }
    }

    const getVehicleTypes = async () => {
        try {
            const response = await vehicle_owner_services.getVehicleTypes()
            if (response) {
                if (response.status === 200) {
                    setVehicleTypes(response.data.vehicleTypes)
                }
                else if (response.status === 400) {
                    setError("Internal Server Error")
                }
            }
            else {
                setError("Unknown Error Occurred")
            }
        }
        catch (error) {
            console.log(error)
        }
    }

    const [letters, setLetters] = useState('')
    const [vehicleNo, setVehicleNo] = useState('')
    let regNo = ''
    const [chassisNo, setChassisNo] = useState('')
    const [vehicle, setVehicle] = useState('');

    const [loader, setLoader] = useState(false)

    const handleChangeVehicle = (event) => {
        setVehicle(event.target.value);
    };

    const handleLetterChange = (value) => {
        const result = value.replace(/[^a-zA-Z]/g, '');
        setLetters(result)
    }

    const handleVehicleNumber = (value) => {
        if (parseInt(value) > 9999) {
            setVehicleNo("9999")
        }
        else if (parseInt(value) < 0) {
            setVehicleNo("0")
        }
        else {
            setVehicleNo(value)
        }
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

    const [empty, setEmpty] = useState({
        letters: false,
        vehicleNo: false,
        chassisNo: false,
        vehicle: false,
        fuel: false
    })

    const handleAddVehicle = async (e) => {
        e.preventDefault()
        setAddSuccess()

        regNo = letters.toUpperCase() + ' ' + vehicleNo

        const validation = api_validations.registerVehicleValidation({ letters, vehicleNo, chassisNo, vehicle, fuel })
        setEmpty({ ...empty, ...validation })

        if (validation.letters || validation.vehicleNo || validation.chassisNo || validation.vehicle || validation.fuel) {
            return
        } else {
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
    }

    const handleAddAnother = async (e) => {
        e.preventDefault()
        setAddSuccess()

        regNo = letters.toUpperCase() + ' ' + vehicleNo

        const validation = api_validations.registerVehicleValidation({ letters, vehicleNo, chassisNo, vehicle, fuel })
        setEmpty({ ...empty, ...validation })

        if (validation.letters || validation.vehicleNo || validation.chassisNo || validation.vehicle || validation.fuel) {
            return
        } else {
            try {
                setLoader(true)
                console.log([regNo, chassisNo, vehicle, fuel])
                const response = await vehicle_owner_services.registerVehicle(regNo, chassisNo, vehicle, fuel)
                console.log(response)
                if (response.data.error) {
                    setError(response.data.error)
                } else {
                    setAddSuccess('Vehicle added successfully. You can add next vehicle')
                    navigate('/register-vehicle?vehicle_add=success')
                }
            } catch (error) {
                console.log(error)
                navigate('/503-error')
            }
            setLoader(false)
        }
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
                                    FuelQ
                                </Typography>
                                {error && <ErrorAlert custom_message={error}></ErrorAlert>}
                                {addSuccess && <SuccessAlert custom_message={addSuccess}></SuccessAlert>}
                                <Typography sx={{ paddingTop: 2 }}>
                                    Vehicle Number
                                </Typography>
                                <Grid container spacing={2} sx={{ marginBottom: 2 }}>
                                    <Grid item xs={4}>
                                        <FormInput isValid={empty.letters} name="letters" label="ABC" type="text" setValue={handleLetterChange} isUpper={true} maxLength={3} value={letters} />
                                        {empty.letters && <Typography variant="inherit" color="#d32f2f" sx={{ mt: 1 }}>Field cannot be empty</Typography>}
                                    </Grid>
                                    <Grid item xs={8}>
                                        <FormInput isValid={empty.vehicleNo} name="vehicleNo" label="1234" setValue={handleVehicleNumber} type="number" value={vehicleNo} />
                                        {empty.vehicleNo && <Typography variant="inherit" color="#d32f2f" sx={{ mt: 1 }}>Field cannot be empty</Typography>}
                                    </Grid>
                                </Grid>
                                <FormInput isValid={empty.chassisNo} label="Chassis Number" setValue={setChassisNo} />
                                {empty.chassisNo && <Typography variant="inherit" color="#d32f2f" sx={{ mt: 1 }}>Field cannot be empty</Typography>}
                                <FormControl sx={{ mt: 2, mb: 2 }} fullWidth>
                                    <InputLabel id="demo-simple-select-label">Select vehicle type</InputLabel>
                                    <Select
                                        error={empty.vehicle}
                                        labelId="select_vehicle"
                                        id="select_vehicle"
                                        value={vehicle}
                                        label="Select vehicle type"
                                        onChange={handleChangeVehicle}
                                    >
                                        {vehicleTypes.map((option) => (
                                            <MenuItem key={option.id} value={option.type}>
                                                {option.type.toUpperCase()}
                                            </MenuItem>
                                        ))}
                                    </Select>
                                    {empty.vehicle && <Typography variant="inherit" color="#d32f2f" sx={{ mt: 1 }}>Field cannot be empty</Typography>}
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
                                    {empty.fuel && <Typography variant="inherit" color="#d32f2f" sx={{ mt: 1 }}>Field cannot be empty</Typography>}

                                </Grid>

                                <Button variant="contained" color="secondary" sx={{ marginTop: 2 }} fullWidth onClick={handleAddAnother} disabled={vehicleCount > 1}>Add another vehicle</Button>
                                <Button variant="contained" sx={{ marginTop: 2 }} fullWidth onClick={handleAddVehicle} disabled={vehicleCount > 2}>Done</Button>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            }
        </dev>
    )
}
