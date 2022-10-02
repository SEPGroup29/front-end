import React, { useState } from "react";
import { Button, Card, CardContent, Grid, Link, Typography } from "@mui/material";
import { MuiOtpInput } from "mui-one-time-password-input";
import FormInput from "../../components/form_input/FormInput";
import auth_services from "../../services/auth_services";
import ErrorAlert from "../../alerts/errorAlert";
import { useNavigate } from "react-router-dom";
import InfoAlert from "../../alerts/infoAlert";

export default function Register_user() {
    const [otp, setOtp] = useState('')
    const navigate = useNavigate();
    const handleChange = (newValue) => {
        setOtp(newValue)
    }

    const [NIC, setNIC] = useState('')
    const [email, setEmail] = useState('')
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [error, setError] = useState()

    // const countdown = () => {
    //     var seconds = 59;
    //     function tick() {
    //         var counter = document.getElementById("counter");
    //         seconds--;
    //         counter.innerHTML = "0:" + (seconds < 10 ? "0" : "") + String(seconds);
    //         if (seconds > 0) {
    //             setTimeout(tick, 1000);
    //         } else {
    //             // document.getElementById("timer").style.color = "#d32f2f";
    //             // document.getElementById("timer").innerHTML = "OTP expired!";
    //         }
    //     }
    //     tick();
    // }

    const [otpContent, setOtpContent] = useState()
    const [exists, setExists] = useState()
    const [allowed, setAllowed] = useState(true)
    const [disabled, setDisabled] = useState(false)
    
    const sendOTP = async (e) => {
        e.preventDefault()

        // Handle validations here

        setOtpContent(null)
        setExists(null)
        const response = await auth_services.emailExistance(email)
        console.log(response.data)
        if (response.status === 200) {
            if (response.data.result === 'Sent') {
                setDisabled(true)
                setAllowed(false)
                setOtpContent('Enter the OTP sent to ' + email.slice(0, 3) + '***' + email.slice(email.indexOf('@')) + '. OTP will expire in 1 minute')
                setTimeout(() => {
                    setDisabled(false)
                }, 60000)
            } else if (response.data.result === 'Email already exists') {
                setEmail('')
                setExists('Email you entered already exists')
            } else if (response.data.result === 'OTP generation error') {
                setEmail('')
                setExists('OTP generation error. Please try again')
            }
        }
        console.log("Error", error)
    }

    const handleRegister = async (e) => {
        e.preventDefault()

        // Handle validations here

        try {
            const response = await auth_services.registerUser(NIC, email, otp, firstName, lastName)
            console.log(response)
            if (response.data.error) {
                setError(response.data.error)
            } else {
                navigate('/register-vehicle')
            }
        } catch (error) {
            console.log(error)
        }


    }


    return (
        <dev>
            <Grid container minHeight="100vh" justifyContent="center" alignItems="center">
                <Grid item xs={10} md={5} paddingTop={1}>
                    <Card sx={{ alignSelf: 'center', boxShadow: 12 }} variant={"outlined"}>
                        <CardContent>
                            <Typography variant="h4">
                                Register Vehicle Owner
                            </Typography>
                            <Typography variant="subtitle1">
                                FuelQ
                            </Typography>
                            {exists && <ErrorAlert custom_message={exists}></ErrorAlert>}
                            {error && <ErrorAlert custom_message={error}></ErrorAlert>}
                            <FormInput label="NIC Number" setValue={setNIC} />
                            <FormInput label="E-mail" setValue={setEmail} />
                            <Button
                                variant="contained"
                                color="secondary"
                                sx={{ marginTop: 2, marginBottom: 2 }}
                                fullWidth
                                onClick={sendOTP}
                                id="send"
                                disabled={disabled}
                            >{otpContent ? 'RESEND OTP' : 'SEND OTP'}</Button>
                            {otpContent && <InfoAlert custom_message={otpContent}></InfoAlert>}
                            <MuiOtpInput length={6} value={otp} onChange={handleChange} />
                            <FormInput label="First Name" setValue={setFirstName} />
                            <FormInput label="Last Name" setValue={setLastName} />
                            <Button
                                variant="contained"
                                sx={{ marginTop: 2, marginBottom: 2 }}
                                fullWidth
                                onClick={handleRegister}
                                disabled={allowed}
                            >
                                PROCEED
                            </Button>
                            <Link to="/login">Log in</Link>

                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </dev>
    )

}