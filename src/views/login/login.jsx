import React, {useState} from "react";
import {Button, Card, CardContent, Grid, Link, Typography} from "@mui/material";
import FormInput from "../../components/form_input/FormInput";

const Login = () => {

    const [email,setEmail] =useState('');

    const handleEmailChange = e => {
        setEmail(e.target.value);
    }

    const handleSubmit = e => {
        e.preventDefault()
        if (validate()[1])
            window.alert('Error')
    }

    const validate= () => {
        let error = ""
        let valid = !(/$^|.+@.+..+/).test(email)
        if (valid)
            error = "Email is not valid"

        return [error , valid]
    }


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
                            <FormInput label="Email" name="Email" value={email}  onChange = {handleEmailChange}  />
                            <Button variant="contained" sx={{marginTop : 2 , marginBottom : 2}} fullWidth onClick={handleSubmit} >PROCEED</Button>
                            <Link to="/register-user">Register</Link>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </div>
    );
}

export default Login;
