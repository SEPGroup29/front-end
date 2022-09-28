import React from "react";
import { Button, Card, CardContent, Grid, MenuItem, TextField, Typography } from "@mui/material";
import FormInput from "../../components/form_input/FormInput";
import MuiToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { styled } from '@mui/material/styles';
import vehicle_owner_services from '../../services/api/vehicle_owner_services'
import { useNavigate } from "react-router-dom";
import ErrorAlert from "../../alerts/errorAlert";
// import SuccessAlert from "../../alerts/successAlert";

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

    const [letters, setLetters] = React.useState('')
    const [vehicleNo, setVehicleNo] = React.useState('')
    let regNo = ''
    const [chassisNo, setChassisNo] = React.useState('')
    const [vehicle, setVehicle] = React.useState('Motor Bike');

    const handleChangeVehicle = (event) => {
        setVehicle(event.target.value);
    };

    const [fuel, setFuel]= React.useState('petrol')
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
            console.log([regNo,chassisNo,vehicle,fuel])
            const response = await vehicle_owner_services.registerVehicle(regNo,chassisNo,vehicle,fuel)
            console.log(response)
            if(response.data.error){
                setError(response.data.error)
            } else{
                navigate('/vo-dashboard')
            }
        } catch (error) {
            console.log(error) 
        }
    }

    return (
        <dev>
            <Grid container minHeight="100vh" justifyContent="center" alignItems="center">
                <Grid item xs={10} md={5} paddingTop={2}>
                    <Card sx={{ alignSelf: 'center', boxShadow: 12 }} variant={"outlined"}>
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
                                    <FormInput label="ABC" setValue={setLetters} />
                                </Grid>
                                <Grid item xs={8}>
                                    <FormInput label="1234" setValue={setVehicleNo} />
                                </Grid>
                            </Grid>
                            <FormInput label="Chassis Number" setValue={setChassisNo}/>
                            <TextField
                                id="select_vehicle"
                                select
                                label="Select vehicle type"
                                value={vehicle}
                                onChange={handleChangeVehicle}
                                helperText="Please select vehicle fuel type"
                                sx={{ marginTop: 2 }}
                                fullWidth
                            >
                                {vehicle_types.map((option) => (
                                    <MenuItem key={option.value} value={option.value}>
                                        {option.label}
                                    </MenuItem>
                                ))}
                            </TextField>
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
                                    <ToggleButton value="petrol" selectedColor="orange">Petrol</ToggleButton>
                                    <ToggleButton value="diesel"selectedColor="orange">Diesel</ToggleButton>
                                </ToggleButtonGroup>

                            </Grid>
                            <Button variant="contained" color="secondary" sx={{ marginTop: 2 }} fullWidth>Add another vehicle</Button>
                            <Button variant="contained" color="success" sx={{ marginTop: 2 }} fullWidth onClick={handleAddVehicle}>Done</Button>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </dev>
    )
}