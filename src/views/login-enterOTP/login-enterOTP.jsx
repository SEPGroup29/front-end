import React from "react";
import {Button, Card, CardContent, Grid, Link, Typography} from "@mui/material";
import {MuiOtpInput} from "mui-one-time-password-input";

export default function Login_enterOTP(){
    const [value, setValue] = React.useState('')

    const handleChange = (newValue) => {
        setValue(newValue)
    }

    return(
        <div>
            <Grid container minHeight="100vh" justifyContent="center" alignItems="center">
                <Grid item xs={10} md={5} paddingTop={2}>
                    <Card sx={{alignSelf : 'center' , boxShadow: 12}} variant={"outlined"}>
                        <CardContent>
                            <Typography variant="h4">
                                Log in
                            </Typography>
                            <Typography variant="subtitle1">
                                FuelQ 
                            </Typography>
                            <Typography variant="subtitle1" sx={{paddingTop:2}}>
                                Enter OTP sent to 077*******2
                            </Typography>
                            <MuiOtpInput length={6} value={value} onChange={handleChange}/>
                            <Button variant="contained" sx={{marginTop : 2 , marginBottom : 2}} fullWidth>PROCEED</Button>
                            <Link to="/register-user">Register</Link>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </div>
    )

}