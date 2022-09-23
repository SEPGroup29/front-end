import React from "react";
import {Button, Card, CardContent, Grid, Typography} from "@mui/material";
import FormInput from "../../components/form_input/FormInput";

export default function Update_fuel_stock(){
    return(
        <div>
            <Grid container minHeight="100vh" justifyContent="center" alignItems="center">
                <Grid item xs={10} md={5} paddingTop={2}>
                    <Card sx={{alignSelf : 'center' , boxShadow: 12}} variant={"outlined"}>
                        <CardContent>
                            <Typography variant="h4">
                                Fuel Stock Update
                            </Typography>
                            <Typography variant="subtitle1">
                                FuelQ 
                            </Typography>
                            <Grid container spacing={2}>
                                <Grid item xs={6}>
                                    <Button variant="contained" color="warning" sx={{marginTop : 2}} fullWidth> Petrol </Button>
                                </Grid>
                                <Grid item xs={6}>
                                    <Button variant="contained" color="warning" sx={{marginTop : 2}} fullWidth disabled={true}> Diesel </Button>
                                </Grid>
                            </Grid>
                            <Typography variant="subtitle1" sx={{fontWeight : 'bold' ,  paddingTop : 2}}>
                                Remaining Stock
                            </Typography>
                            <Typography variant="h1" sx={{textAlign : 'center'}}>
                                15.5L
                            </Typography>
                            <FormInput label="Liters Arrived" />
                            <Button variant="contained" color="success" sx={{marginTop : 2 , marginBottom : 2}} fullWidth>UPDATE</Button>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>

        </div>
    )
}