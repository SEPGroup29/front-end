import React from "react";
import {Button, Card, CardContent, Grid, Link, TextField, Typography} from "@mui/material";

export default function Update_fuel_stock(){
    return(
        <div>
            <Grid container minHeight="100vh" justifyContent="center" alignItems="center">
                <Grid item paddingTop={2}>
                    <Card sx={{width : 408 , alignSelf : 'center' , boxShadow: 12}} variant={"outlined"}>
                        <CardContent>
                            <Typography variant="h4">
                                Log in
                            </Typography>
                            <Typography variant="subtitle1">
                                National Fuel Queue Management System
                            </Typography>
                            <TextField id="outlined-basic" label="Email" variant="outlined" sx={{marginTop : 2}} fullWidth />
                            <Button variant="contained" sx={{marginTop : 2 , marginBottom : 2}} fullWidth>PROCEED</Button>
                            <Link href="#">Register</Link>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>

        </div>
    )
}