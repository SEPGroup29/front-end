import React from "react";
import {Button, Card, CardContent, Grid, MenuItem, TextField, Typography} from "@mui/material";
import FormInput from "../../components/form_input/FormInput";

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

export default function RegisterFuelStation(){

    const [town, setTown] = React.useState('Colombo 1');

    const handleChange = (event) => {
        setTown(event.target.value);
    };

    return(
        <dev>
            <Grid container minHeight="100vh" justifyContent="center" alignItems="center">
                <Grid item xs={10} md={5} paddingTop={2}>
                    <Card sx={{alignSelf : 'center' , boxShadow: 12}} variant={"outlined"}>
                        <CardContent>
                            <Typography variant="h4">
                                Register Fuel Station
                            </Typography>
                            <Typography variant="subtitle1">
                                FuelQ Management System
                            </Typography>
                            <FormInput label="Owner Name" />
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
                            <FormInput label="Display Name" />
                            <Button variant="contained" sx={{marginTop : 2 , marginBottom : 2}} fullWidth>REGISTER</Button>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </dev>
    )
}