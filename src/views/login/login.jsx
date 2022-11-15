import React, { useState } from "react";
import { Button, Card, CardContent, Grid, Link, Typography } from "@mui/material";
import FormInput from "../../components/form_input/FormInput";
import AuthValidation from "../../utils/auth_validation";
import { useLocation, useNavigate } from "react-router-dom";
import AuthServices from "../../services/auth_services";
import ErrorAlert from "../../alerts/errorAlert";
import Loader from '../../components/loader/loader';
import SuccessAlert from "../../alerts/successAlert";
import { useEffect } from "react";

const Login = () => {

    useEffect(() => {
        checkRegSuccess()
    }, [])

    const [email, setEmail] = useState('')
    const [emailError, setEmailError] = useState('')
    const navigate = useNavigate()
    const [loginError, setLoginError] = useState('')
    const [loader, setLoader] = useState(false)
    const [regSuccess, setRegSuccess] = useState()
    const location = useLocation()

    const checkRegSuccess = () => {
        // Hanlde successful registration redirects
        const search = location.search;
        const register = new URLSearchParams(search).get('register');
        if (register === 'success')
            setRegSuccess('Successfully registered to FuelQ as a vehicle owner. Please login to continue')
    }

    const handleLogin = async (e) => {
        e.preventDefault()

        setLoginError('')
        setEmailError('')

        const { error, value } = AuthValidation.emailValidation({ email })
        if (error) {
            setEmailError(error.details[0].message)
        } else {
            setLoader(true)
            setEmailError('')
            try {
                const response = await AuthServices.voLoginBeforeOtp(email)
                console.log(response.data)
                if (response.status === 200) {
                    if (response.data.result === 'sent') {
                        navigate("/login-enter-otp", { state: email })
                    }
                    if (response.data.error) {
                        setLoginError(response.data.error)
                    }
                }
            } catch (error) {
                setLoginError("Unknown error occured. Login failed")
            }
        }
        setEmail('')
        setLoader(false)
    }

    return (
        <div className="login">
            {loader && <Loader />}
            {!loader &&
                <Grid container minHeight="100vh" justifyContent="center" alignItems="center">
                    <Grid item xs={10} md={5} paddingTop={2}>
                        <Card sx={{ alignSelf: 'center', boxShadow: 12, borderRadius: 5 }} variant={"outlined"}>
                            <CardContent>
                                {regSuccess && <SuccessAlert custom_message={regSuccess} />}
                                <Typography variant="h4">
                                    Log in
                                </Typography>
                                <Typography variant="subtitle1">
                                    FuelQ
                                </Typography>
                                {loginError && <ErrorAlert custom_message={loginError}></ErrorAlert>}
                                <FormInput label="Email" name="Email" setValue={setEmail} isValid={emailError ? true : false} />
                                {emailError && <Typography variant="inherit" color="#d32f2f" sx={{ mt: 1 }}>{emailError}</Typography>}
                                <Button variant="contained" sx={{ marginTop: 2, marginBottom: 2 }} fullWidth onClick={handleLogin} >PROCEED</Button>
                                <Link sx={{ textDecoration: 'none' }} href="/register-user" color="secondary">Register</Link>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            }
        </div>
    );
}

export default Login;
