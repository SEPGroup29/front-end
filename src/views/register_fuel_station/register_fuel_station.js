import React from "react";
import {Button, Card, CardContent, Grid, MenuItem, TextField, Typography} from "@mui/material";

const towns = [
    {
        value: 'Colombo 1',
        label: 'Colombo 1',
    },
    {
        value: 'Weeraketiya',
        label: 'Weeraketiya',
    },
    {
        value: 'Matara',
        label: 'Matara',
    },
    {
        value: 'Galle',
        label: 'Galle',
    },
];

export default function Register_fuel_station(){

    const [town, setTown] = React.useState('Colombo 1');

    const handleChange = (event) => {
        setTown(event.target.value);
    };

    return(
        <dev>
            <Grid container minHeight="100vh" justifyContent="center" alignItems="center">
                <Grid item paddingTop={2}>
                    <Card sx={{width : 408 , alignSelf : 'center' , boxShadow: 12}} variant={"outlined"}>
                        <CardContent>
                            <Typography variant="h4">
                                Register Fuel Station
                            </Typography>
                            <Typography variant="subtitle1">
                                National Fuel Queue Management System
                            </Typography>
                            <TextField id="outlined-basic" label="Owner Name" variant="outlined" sx={{marginTop : 2}} fullWidth />
                            <TextField
                                id="select_tow"
                                select
                                label="Select Town Nearby"
                                value={town}
                                onChange={handleChange}
                                sx={{marginTop : 2}}
                                fullWidth
                            >
                                {towns.map((option) => (
                                    <MenuItem key={option.value} value={option.value}>
                                        {option.label}
                                    </MenuItem>
                                ))}
                            </TextField>
                            <TextField id="outlined-basic" label="Display Name" variant="outlined" sx={{marginTop : 2}} fullWidth />
                            <Button variant="contained" sx={{marginTop : 2 , marginBottom : 2}} fullWidth>REGISTER</Button>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </dev>
    )
}