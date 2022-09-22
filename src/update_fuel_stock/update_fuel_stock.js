import React from "react";
import {Button, Card, CardContent, Grid, TextField, Typography} from "@mui/material";

export default function Update_fuel_stock(){
    return(
        <div>
            <Grid container minHeight="100vh" justifyContent="center" alignItems="center">
                <Grid item paddingTop={2}>
                    <Card sx={{width : 408 , alignSelf : 'center' , boxShadow: 12}} variant={"outlined"}>
                        <CardContent>
                            <Typography variant="h4">
                                Fuel Stock Update
                            </Typography>
                            <Typography variant="subtitle1">
                                National Fuel Queue Management System
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
                            <TextField id="outlined-basic" label="Liters Arrived" variant="outlined" sx={{marginTop : 2}} fullWidth />
                            <Button variant="contained" color="success" sx={{marginTop : 2 , marginBottom : 2}} fullWidth>UPDATE</Button>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>

        </div>
    )
}