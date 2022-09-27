import React, { useState } from "react";
import {Button, Card, CardContent, Grid, Link, Typography} from "@mui/material";
import {MuiOtpInput} from "mui-one-time-password-input";
import FormInput from "../../components/form_input/FormInput";
import auth_services from "../../services/auth_services";
import ErrorAlert from "../../alerts/errorAlert";
import { useNavigate } from "react-router-dom";

export default function Register_user(){
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

    const sendOTP = async (e) => {
        e.preventDefault()
        const response = await auth_services.emailExistance(email)
        console.log(response)
    }

    const handleRegister = async (e) => {
        e.preventDefault()
        try{
            const response = await auth_services.registerUser(NIC, email, otp, firstName, lastName)
            console.log(response)
            if(response.data.error){
                setError(response.data.error)
            } else{
                navigate('/vo-dashboard')
            }
        } catch(error){
            console.log(error)
        }
        

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
                            {error && <ErrorAlert custom_message={error}></ErrorAlert>}
                            {/* {success && <SuccessAlert custom_message={success}></SuccessAlert>} */}
                            <FormInput label="NIC Number" setValue = {setNIC} />
                            <FormInput label="E-mail" setValue={setEmail}/>
                            <Button 
                                variant="contained" 
                                color="secondary" 
                                sx={{marginTop : 2 , marginBottom : 2}} 
                                fullWidth
                                onClick={sendOTP}
                                
                            >SEND OTP</Button>
                            <MuiOtpInput length={6} value={otp} onChange={handleChange}/>
                            <FormInput label="First Name" setValue={setFirstName}/>
                            <FormInput label="Last Name" setValue={setLastName} />
                            <Button variant="contained" sx={{marginTop : 2 , marginBottom : 2}} fullWidth 
                            onClick={handleRegister}>PROCEED</Button>
                            <Link to="/login">Log in</Link>
                            
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </dev>
    )

}