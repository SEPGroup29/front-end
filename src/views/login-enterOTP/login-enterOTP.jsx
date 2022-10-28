import React from "react";
import { Button, Card, CardContent, Grid, Link, Typography } from "@mui/material";
import { MuiOtpInput } from "mui-one-time-password-input";
import { useState } from "react";
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import InfoAlert from "../../alerts/infoAlert";
import AuthServices from "../../services/auth_services";
import ErrorAlert from "../../alerts/errorAlert";
import Loader from "../../components/loader/loader";

export default function Login_enterOTP() {
    const location = useLocation()
    const navigate = useNavigate()
    const [value, setValue] = React.useState('')
    const [email, setEmail] = useState('')
    const [loginError, setLoginError] = useState('')
    const [emptyError, setEmptyError] = useState('')
    const [loader, setLoader] = useState(false)

    useEffect(() => {
        setEmail(location.state)
    }, [])

    const handleChange = (newValue) => {
        setValue(newValue)
    }

    const handleLogin = async (e) => {
        e.preventDefault()

        setLoginError('')
        setEmptyError('')

        if (value === '') {
            setEmptyError('OTP is required')
        }
        else {
            setLoader(true)
            try {
                const response = await AuthServices.voLoginAfterOtp(email, value)
                console.log(response)
                if (response.status === 200) {
                    if (response.data.message === "Login successful") {
                        navigate('/vo-dashboard')
                    }
                    if (response.data.error) {
                        setLoginError(response.data.error)
                    }
                }
            } catch (error) {
                setLoginError("Unknown error occured. Login failed")
            }
        }
        setLoader(false)
    }

    return (
        <div>
            {loader && <Loader />}
            {!loader &&
                <Grid container minHeight="100vh" justifyContent="center" alignItems="center">
                    <Grid item xs={10} md={5} paddingTop={2}>
                        <Card sx={{ alignSelf: 'center', boxShadow: 12 }} variant={"outlined"}>
                            <CardContent>
                                <Typography variant="h4">
                                    Log in
                                </Typography>
                                <Typography variant="subtitle1">
                                    FuelQ
                                </Typography>
                                {loginError && <ErrorAlert custom_message={loginError}></ErrorAlert>}
                                <Typography variant="subtitle1" sx={{ paddingTop: 2 }}>
                                    {!loginError && email && <InfoAlert custom_message={'Enter OTP sent to ' + email.slice(0, 3) + '***' + email.slice(email.indexOf('@')) + '. OTP will expire in 1 minute'} />}
                                </Typography>
                                <MuiOtpInput style={{ outlineColor: 'blue' }} length={6} value={value} onChange={handleChange} />
                                {emptyError && <Typography variant="inherit" color="#d32f2f" sx={{ mt: 1 }}>{emptyError}</Typography>}
                                <Button variant="contained" sx={{ marginTop: 2, marginBottom: 2 }} fullWidth onClick={handleLogin}>PROCEED</Button>
                                <Link sx={{ textDecoration: 'none' }} href="/register-user" color="secondary">Register</Link>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            }
        </div>
    )

}