import React, { useState } from "react";
import { Button, Card, CardContent, Grid, Link, Typography } from "@mui/material";
import { MuiOtpInput } from "mui-one-time-password-input";
import FormInput from "../../components/form_input/FormInput";
import auth_services from "../../services/auth_services";
import ErrorAlert from "../../alerts/errorAlert";
import { useNavigate } from "react-router-dom";
import InfoAlert from "../../alerts/infoAlert";
import Loader from '../../components/loader/loader'
import auth_validation from "../../utils/auth_validation";

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
    const [loader, setLoader] = useState(false)

    const [otpContent, setOtpContent] = useState()
    const [exists, setExists] = useState()
    const [allowed, setAllowed] = useState(true)
    const [disabled, setDisabled] = useState(false)

    const [emailError, setEmailError] = useState('')
    const [nicError, setNICError] = useState('')
    const [otpError, setOtpError] = useState('')
    const [firstNameError, setFirstNameError] = useState('')
    const [lastNameError, setLastNameError] = useState('')

    const sendOTP = async (e) => {
        e.preventDefault()

        // Handle validations here
        setEmailError('')
        setNICError('')
        var { error, value } = auth_validation.emailValidation({ email })
        if (error) {
            setEmailError(error.details[0].message)
            return
        }
        var { error, value } = auth_validation.nicValidation({ NIC })
        if (error) {
            setNICError(error.details[0].message)
            return
        }

        setOtpContent(null)
        setExists(null)
        try {
            setLoader(true)
            const response = await auth_services.emailExistance(email)
            console.log(response.data)
            if (response.status === 200) {
                if (response.data.result === 'Sent') {
                    setDisabled(true)
                    setAllowed(false)
                    setOtpContent('Enter the OTP sent to ' + email.slice(0, 3) + '***' + email.slice(email.indexOf('@')) + '. OTP will expire in 10 minutes')
                    setTimeout(() => {
                        setDisabled(false)
                    }, 60000)
                } else if (response.data.result === 'Email already exists') {
                    setExists('Email you entered already exists')
                } else if (response.data.result === 'OTP generation error') {
                    setExists('OTP generation error. Please try again')
                }
            }
        } catch (error) {
            navigate('/503-error')
        }
        setLoader(false)
    }

    const handleRegister = async (e) => {
        e.preventDefault()

        // Handle validations here
        setOtpError('')
        setFirstNameError('')
        setLastNameError('')
        if (otp === '') {
            setOtpError('OTP is required')
        }
        var {error, value} = auth_validation.nameValidation({firstName}, 'firstName')
        console.log(error)
        if (error) {
            setFirstNameError(error.details[0].message)
            return
        }
        var {error, value} = auth_validation.nameValidation({lastName}, 'lastName')
        if (error) {
            setLastNameError(error.details[0].message)
            return
        }
        try {
            setLoader(true)
            const response = await auth_services.registerUser(NIC, email, otp, firstName, lastName)
            console.log(response)
            if (response.data.error) {
                setError(response.data.error)
            } else {
                navigate('/register-vehicle')
            }
        } catch (error) {
            navigate('/503-error')
        }
        setLoader(false)
    }

    return (
        <div className="register-user">
            {loader && <Loader />}
            {!loader &&
                <Grid container minHeight="100vh" justifyContent="center" alignItems="center">
                    <Grid item xs={10} md={5} paddingTop={1}>
                        <Card sx={{ alignSelf: 'center', boxShadow: 12, borderRadius: 5 }} variant={"outlined"}>
                            <CardContent>
                                <Typography variant="h4">
                                    Register Vehicle Owner
                                </Typography>
                                <Typography variant="subtitle1">
                                    FuelQ
                                </Typography>

                                {exists && <ErrorAlert custom_message={exists}></ErrorAlert>}
                                {error && <ErrorAlert custom_message={error}></ErrorAlert>}

                                <FormInput label="E-mail" name="Email" value={email} setValue={setEmail} isValid={emailError ? true : false} />
                                {emailError && <Typography variant="inherit" color="#d32f2f" sx={{ mt: 1 }}>{emailError}</Typography>}
                                <FormInput label="NIC Number" name="NIC" value={NIC} setValue={setNIC} isValid={nicError ? true : false} />
                                {nicError && <Typography variant="inherit" color="#d32f2f" sx={{ mt: 1 }}>{nicError}</Typography>}

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
                                {otpError && <Typography variant="inherit" color="#d32f2f" sx={{ mt: 1 }}>{otpError}</Typography>}
                                <FormInput label="First Name" name="firstname" value={firstName} setValue={setFirstName} isValid={firstNameError ? true : false} />
                                {firstNameError && <Typography variant="inherit" color="#d32f2f" sx={{ mt: 1 }}>{firstNameError}</Typography>}
                                <FormInput label="Last Name" name="lastname" value={lastName} setValue={setLastName} isValid={lastNameError ? true : false} />
                                {lastNameError && <Typography variant="inherit" color="#d32f2f" sx={{ mt: 1 }}>{lastNameError}</Typography>}
                                <Button
                                    variant="contained"
                                    sx={{ marginTop: 2, marginBottom: 2 }}
                                    fullWidth
                                    onClick={handleRegister}
                                    disabled={allowed}
                                >
                                    PROCEED
                                </Button>
                                <Link sx={{ textDecoration: 'none' }} href="/login" color="secondary">Log in</Link>

                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            }
        </div>
    )

}