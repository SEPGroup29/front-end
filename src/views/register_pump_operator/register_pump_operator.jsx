import React, { useState } from "react";
import { Button, Card, CardContent, Grid, Link, TextField, Typography } from "@mui/material";
import auth_services from "../../services/auth_services";
import { useNavigate } from "react-router-dom";
import Loader from '../../components/loader/loader'
import Password from './password'
import AuthValidation from "../../utils/auth_validation";

export default function RegisterPumpOperator() {

    const [values, setValues] = useState({
        email: '',
        firstName: '',
        lastName: '',
        contactNo: '',
        password: '',
        rePassword: '',
        showPassword: false,
    })
    const [errors, setErrors] = useState({
        email: '',
        firstName: '',
        lastName: '',
        contactNo: '',
        password: '',
        rePassword: '',
    })

    const navigate = useNavigate();
    const [loader, setLoader] = useState(false)

    const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
    };

    const handleRegister = async (e) => {
        e.preventDefault()

        // Handle validations here
        const { error, value } = AuthValidation.registerPovalidation({
            email: values.email,
            firstName: values.firstName,
            lastName: values.lastName,
            contactNo: values.contactNo,
            password: values.password,
            rePassword: values.rePassword
        })

        let err = {}
        error.details.map((det) => {
            err[det.context.label] = det.message
            // console.log(det.path[0])
            // console.log(det.message)
            // console.log(errors)
        })
        setErrors({ ...errors, ...err })
        console.log(errors)

        // try {
        //     setLoader(true)
        //     const response = await auth_services.registerUser(values.email, values.firstName, values.lastName, values.contactNo, values.password)
        //     console.log(response)
        //     if (response.data.error) {
        //         setError(response.data.error)
        //     } else {
        //         navigate('/register-vehicle')
        //     }
        // } catch (error) {
        //     navigate('/503-error')
        // }
        // setLoader(false)
    }

    return (
        <dev>
            {loader && <Loader />}
            {!loader &&
                <Grid container minHeight="100vh" justifyContent="center" alignItems="center">
                    <Grid item xs={10} md={5} paddingTop={1}>
                        <Card sx={{ alignSelf: 'center', boxShadow: 12, borderRadius: 5 }} variant={"outlined"}>
                            <CardContent>
                                <Typography variant="h4">
                                    Register Pump Operator
                                </Typography>
                                <Typography variant="h5" color="#022B3A" fontWeight='lighter' sx={{ mb: 3 }}>
                                    Maco Filling Station, Kalegana
                                </Typography>
                                {/* {exists && <ErrorAlert custom_message={exists}></ErrorAlert>} */}
                                {/* {error && <ErrorAlert custom_message={error}></ErrorAlert>} */}

                                <TextField sx={{ marginTop: 1 }}
                                    name='email'
                                    label='Email'
                                    variant="outlined"
                                    // value={value}
                                    fullWidth
                                    error={errors.email !== ''}
                                    onChange={handleChange('email')}
                                />
                                {errors.email !== '' && <Typography variant="inherit" color="#d32f2f" sx={{ mt: 1 }}>{errors.email}</Typography>}

                                <TextField sx={{ marginTop: 1 }}
                                    name='firstName'
                                    label='First Name'
                                    variant="outlined"
                                    // value={value}
                                    fullWidth
                                    error={errors.firstName !== ''}
                                    onChange={handleChange('firstName')}
                                />
                                {errors.firstName !== '' && <Typography variant="inherit" color="#d32f2f" sx={{ mt: 1 }}>{errors.firstName}</Typography>}

                                <TextField sx={{ marginTop: 1 }}
                                    name='lastName'
                                    label='Last Name'
                                    variant="outlined"
                                    // value={value}
                                    fullWidth
                                    error={errors.lastName !== ''}
                                    onChange={handleChange('lastName')}
                                />
                                {errors.lastName !== '' && <Typography variant="inherit" color="#d32f2f" sx={{ mt: 1 }}>{errors.lastName}</Typography>}

                                <TextField sx={{ marginTop: 1 }}
                                    name='contactNo'
                                    label='Contact Number'
                                    variant="outlined"
                                    // value={value}
                                    fullWidth
                                    error={errors.contactNo !== ''}
                                    onChange={handleChange('contactNo')}
                                />
                                {errors.contactNo !== '' && <Typography variant="inherit" color="#d32f2f" sx={{ mt: 1 }}>{errors.contactNo}</Typography>}

                                <Grid container spacing={1} sx={{ mt: 1 }}>
                                    <Grid item xs={6}>
                                        <Password name={'password'} label={'Password'} value={values.password} values={values} setValues={setValues} handleChange={handleChange} error={errors.password} />
                                    </Grid>

                                    <Grid item xs={6}>
                                        <Password name={'rePassword'} label={'Re-enter password'} value={values.rePassword} values={values} setValues={setValues} handleChange={handleChange} error={errors.rePassword} />
                                    </Grid>
                                    {errors.rePassword !== '' && <Typography variant="inherit" color="#d32f2f" sx={{ mt: 1 }}>{errors.rePassword}</Typography>}

                                </Grid>
                                <Button
                                    variant="contained"
                                    sx={{ marginTop: 2, marginBottom: 2 }}
                                    fullWidth
                                    onClick={handleRegister}
                                >
                                    Register
                                </Button>
                                <Link sx={{ textDecoration: 'none' }} href="/fs-login" color="secondary">Log in</Link>

                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            }
        </dev>
    )

}