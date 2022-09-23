import React from "react";
import {Button, Card, CardContent, Grid, MenuItem, TextField, Typography} from "@mui/material";
import FormInput from "../../components/form_input/FormInput";

const vehicle_types = [
    {
        value: 'Motor Bike',
        label: 'Motor Bike',
    },
    {
        value: 'Car',
        label: 'Car',
    },
    {
        value: 'Van',
        label: 'Van',
    },
    {
        value: 'Lorry',
        label: 'Lorry',
    },
];

export default function RegisterVehicle(){

    const [vehicle, setVehicle] = React.useState('Motor Bike');

    const handleChange = (event) => {
        setVehicle(event.target.value);
    };

    return(
        <dev>
            <Grid container minHeight="100vh" justifyContent="center" alignItems="center">
                <Grid item xs={10} md={5} paddingTop={2}>
                    <Card sx={{alignSelf : 'center' , boxShadow: 12}} variant={"outlined"}>
                        <CardContent>
                            <Typography variant="h4">
                                Register Vehicle
                            </Typography>
                            <Typography variant="subtitle1">
                                FuelQ Management System
                            </Typography>
                            <Typography sx={{paddingTop : 2}}>
                                Vehicle Number
                            </Typography>
                            <Grid container spacing={2} sx={{marginBottom : 2}}>
                                <Grid item xs={4}>
                                    <FormInput label="ABC" />
                                </Grid>
                                <Grid item xs={8}>
                                    <FormInput label="1234" />
                                </Grid>
                            </Grid>
                            <FormInput label="Chassis Number" />
                            <TextField
                                id="select_vehicle"
                                select
                                label="Select vehicle type"
                                value={vehicle}
                                onChange={handleChange}
                                helperText="Please select your vehicle type"
                                sx={{marginTop : 2}}
                                fullWidth
                            >
                                {vehicle_types.map((option) => (
                                    <MenuItem key={option.value} value={option.value}>
                                        {option.label}
                                    </MenuItem>
                                ))}
                            </TextField>
                            <Grid container spacing={2}>
                                <Grid item xs={6}>
                                    <Button variant="contained" color="warning" sx={{marginTop : 2}} fullWidth> Petrol </Button>
                                </Grid>
                                <Grid item xs={6}>
                                    <Button variant="contained" color="warning" sx={{marginTop : 2}} fullWidth disabled={true}> Diesel </Button>
                                </Grid>
                            </Grid>
                            <Button variant="contained" color="secondary" sx={{marginTop : 2}} fullWidth>Add another vehicle</Button>
                            <Button variant="contained" color="success" sx={{marginTop : 2}} fullWidth>Done</Button>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </dev>
    )
}