import React from "react";
import {Button, Card, CardContent, Grid, Link, Typography} from "@mui/material";
import FormInput from "../../components/form_input/FormInput";


const Login = () => {

    return (
        <div className="login">
            <Grid container minHeight="100vh" justifyContent="center" alignItems="center">
                <Grid item xs={10} md={5} paddingTop={2}>
                    <Card sx={{ alignSelf : 'center' , boxShadow: 12}} variant={"outlined"}>
                        <CardContent>
                            <Typography variant="h4">
                                Log in
                            </Typography>
                            <Typography variant="subtitle1">
                                FuelQ Management System
                            </Typography>
                            <FormInput label="Email" />
                            <Button variant="contained" sx={{marginTop : 2 , marginBottom : 2}} fullWidth>PROCEED</Button>
                            <Link to="/register-user">Register</Link>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </div>
    );
}

export default Login;
