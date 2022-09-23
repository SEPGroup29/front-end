import React from "react";
import {Button, Card, CardContent, Grid, Link, TextField, Typography} from "@mui/material";
import {MuiOtpInput} from "mui-one-time-password-input";

export default function Register_user(){
    const [value, setValue] = React.useState('')

    const handleChange = (newValue) => {
        setValue(newValue)
    }

    return(
        <dev>
            <Grid container minHeight="100vh" justifyContent="center" alignItems="center">
                <Grid item xs={10} md={5} paddingTop={2}>
                    <Card sx={{alignSelf : 'center' , boxShadow: 12}} variant={"outlined"}>
                        <CardContent>
                            <Typography variant="h4">
                                Register User
                            </Typography>
                            <Typography variant="subtitle1">
                                FuelQ 
                            </Typography>
                            <TextField id="outlined-basic" label="NIC number" variant="outlined" sx={{marginTop : 2}} fullWidth />
                            <TextField id="outlined-basic" label="E-mail" variant="outlined" sx={{marginTop : 2}} fullWidth />
                            <Button variant="contained" color="secondary" sx={{marginTop : 2 , marginBottom : 2}} fullWidth>SEND OTP</Button>
                            <MuiOtpInput length={6} value={value} onChange={handleChange}/>
                            <TextField id="outlined-basic" label="First Name" variant="outlined" sx={{marginTop : 2}} fullWidth />
                            <TextField id="outlined-basic" label="Last Name" variant="outlined" sx={{marginTop : 2}} fullWidth />
                            <Button variant="contained" sx={{marginTop : 2 , marginBottom : 2}} fullWidth>PROCEED</Button>
                            <Link href="#">Log in</Link>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </dev>
    )

}