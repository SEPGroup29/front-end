import React, { useState } from "react";
import { Button, Card, CardContent, Grid, Link, Typography } from "@mui/material";
import FormInput from "../../components/form_input/FormInput";
import AuthValidation from "../../utils/auth_validation";
import { useLocation, useNavigate } from "react-router-dom";
import AuthServices from "../../services/auth_services";
import ErrorAlert from "../../alerts/errorAlert";

const Login = () => {

    const [email, setEmail] = useState('')
    const [emailError, setEmailError] = useState('')
    const navigate = useNavigate()
    const [loginError, setLoginError] = useState('')

    const handleLogin = async (e) => {
        e.preventDefault()

        setLoginError('')
        setEmailError('')

        const { error, value } = AuthValidation.emailValidation({ email })
        if (error) {
            setEmailError(error.details[0].message)
        } else {
            setEmailError()
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

            }
        }
    }

        return (
            <div className="login">
                <Grid container minHeight="100vh" justifyContent="center" alignItems="center">
                    <Grid item xs={10} md={5} paddingTop={2}>
                        <Card sx={{ alignSelf: 'center', boxShadow: 12, borderRadius: 5 }} variant={"outlined"}>
                            <CardContent>
                                <Typography variant="h4">
                                    Log in
                                </Typography>
                                <Typography variant="subtitle1">
                                    FuelQ
                                </Typography>
                                {loginError && <ErrorAlert custom_message={loginError}></ErrorAlert>}
                                <FormInput label="Email" name="Email" setValue={setEmail} isValid={emailError} />
                                {emailError && <Typography variant="inherit" color="#d32f2f" sx={{ mt: 1 }}>{emailError}</Typography>}
                                <Button variant="contained" sx={{ marginTop: 2, marginBottom: 2 }} fullWidth onClick={handleLogin} >PROCEED</Button>
                                <Link sx={{ textDecoration: 'none' }} href="/register-user" color="secondary">Register</Link>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </div>
        );
    }

    export default Login;
