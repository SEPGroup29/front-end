import { MenuItem, Button, Card, CardContent, Grid, Select, Typography, FormControl, InputLabel } from "@mui/material";
import FormInput from "../../components/form_input/FormInput";
import auth_validation from "../../utils/auth_validation";
import fuel_station_services from "../../services/api/fuel_station_services";
import Loader from '../../components/loader/loader'
import SuccessAlert from "../../alerts/successAlert";
import ErrorAlert from "../../alerts/errorAlert";
import { useState } from "react";
import { useNavigate } from "react-router-dom";


const towns = [
    {
        value: 'Colombo 1',
        label: 'Colombo 1',
    },
    {
        value: 'Colombo 2',
        label: 'Colombo 2',
    },
    {
        value: 'Colombo 3',
        label: 'Colombo 3',
    },
    {
        value: 'Weeraketiya',
        label: 'Weeraketiya',
    },
    {
        value: 'Matara',
        label: 'Matara',
    },
    {
        value: 'Galle',
        label: 'Galle',
    },
];

export default function RegisterFuelStation() {

    const navigate = useNavigate();
    const [loader, setLoader] = useState(false);
    const [town, setTown] = useState('Colombo 1');
    const [ownerName, setOwnerName] = useState('');
    const [name, setName] = useState('');
    const [error, setError] = useState('');
    
    const [ownerNameError, setOwnerNameError] = useState('');
    const [nameError, setNameError] = useState('');

    const [firstName, setFirstName] = useState('');
    const [firstNameError, setFirstNameError] = useState('');
    const [lastName, setLastName] = useState('');
    const [lastNameError, setLastNameError] = useState('');
    const [email, setEmail] = useState('');
    const [emailError, setEmailError] = useState('');
    const [contactNo, setContactNo] = useState('');
    const [contactNoError, setContactNoError] = useState('');

    const [updateSuccess, setUpdateSuccess] = useState('')

    const handleChange = (event) => {
        setTown(event.target.value);
    };

    const handleFSRegister = async(e) => {
        e.preventDefault()
        setError('')
        setUpdateSuccess('')
        setOwnerNameError('')
        setNameError('')
        setFirstNameError('')
        setLastNameError('')
        setEmailError('')
        setContactNoError('')

        var {error, value} = auth_validation.nameValidation({ownerName}, 'ownerName')
        if (error) {
            setOwnerNameError(error.details[0].message)
            return
        }
        var {error, value} = auth_validation.nameValidation({name}, 'name')
        if (error) {
            setNameError(error.details[0].message)
            return
        }
        var {error, value} = auth_validation.nameValidation({firstName}, 'firstName')
        if (error) {
            setFirstNameError(error.details[0].message)
            return
        }
        var {error, value} = auth_validation.nameValidation({lastName}, 'lastName')
        if (error) {
            setLastNameError(error.details[0].message)
            return
        }
        var {error, value} = auth_validation.emailValidation({email})
        if (error) {
            setEmailError(error.details[0].message)
            return
        }
        var {error, value} = auth_validation.contactNumberValidation({contactNo})
        if (error) {
            console.log(error)
            setContactNoError(error.details[0].message)
            return
        }


        try{
            setLoader(true)
            const response = await fuel_station_services.fsRegister( name,town,ownerName,firstName,lastName,email,contactNo)
            console.log(response.data.error)
            if (response.data.error) {
                setError(response.data.error)
            } else {
                setUpdateSuccess('Fuel Station registered successfully. Manager password is sent to ' + email.slice(0, 3) + '***' + email.slice(email.indexOf('@')))
                setOwnerName('')
                setName('')
                setTown('Colombo 1')
                setFirstName('')
                setLastName('') 
                setEmail('')
                setContactNo('')
            }
            setLoader(false)
        }catch(err){
            console.log(err)
            navigate('/503-error')
        }
        
    }

    return (
        <dev>
            {loader && <Loader />}
            {!loader &&
            <Grid container minHeight="100vh" justifyContent="center" alignItems="center">
                <Grid item xs={10} md={5} paddingTop={2}>
                    <Card sx={{ alignSelf: 'center', boxShadow: 12, borderRadius:5 }} variant={"outlined"}>
                        <CardContent>
                            <Typography variant="h4">
                                Register Fuel Station
                            </Typography>
                            <Typography variant="subtitle1">
                                FuelQ Management System
                            </Typography>
                            {error && <ErrorAlert custom_message={error} />}
                            {updateSuccess && <SuccessAlert custom_message={updateSuccess}></SuccessAlert>}
                            <FormInput label="Owner Name" name="Owner Name" value={ownerName} setValue={setOwnerName} isValid={ownerNameError ? true : false} />
                            {ownerNameError && <Typography variant="inherit" color="#d32f2f" sx={{ mt: 1 }}>{ownerNameError}</Typography>}
                            {/* <Autocomplete
                                disablePortal
                                id="select_tow"
                                options={towns}
                                onChange={handleChange}
                                // value={town}
                                sx={{ mt: 2, mb: 2 }}
                                fullWidth
                                renderInput={(params) => <TextField {...params} label="Select Town Nearby" />}
                            /> */}
                                <FormControl sx={{ mt: 2, mb: 2 }}
                                fullWidth >
                                    <InputLabel id="near-town">Nearby Town</InputLabel>
                                    <Select
                                        labelId="near-town"
                                        id="near-town"
                                        value={town}
                                        label="Nearby Town"
                                        onChange={handleChange}
                                    >
                                        {towns.map((town) => (
                                            <MenuItem key={town.label} value={town.value}>
                                                {town.value}
                                            </MenuItem>
                                        ))}
                                    </Select>
                                </FormControl>
                            <FormInput label="Display Name"name="Display Name" value={name} setValue={setName} isValid={nameError ? true : false}  />
                            {nameError && <Typography variant="inherit" color="#d32f2f" sx={{ mt: 1 }}>{nameError}</Typography>}
                            <Typography variant="subtitle1" sx={{ mt: 3, mb: 1 }}>
                                Fuel Station Manager Details
                            </Typography>
                            <FormInput label="First Name" name="First Name" value={firstName} setValue={setFirstName} isValid={firstNameError ? true : false} />
                            {firstNameError && <Typography variant="inherit" color="#d32f2f" sx={{ mt: 1 }}>{firstNameError}</Typography>}
                            <FormInput label="Last Name" name="Last Name" value={lastName} setValue={setLastName} isValid={lastNameError ? true : false} />
                            {lastNameError && <Typography variant="inherit" color="#d32f2f" sx={{ mt: 1 }}>{lastNameError}</Typography>}
                            <FormInput label="Email" name="Email" value={email} setValue={setEmail} isValid={emailError ? true : false} />
                            {emailError && <Typography variant="inherit" color="#d32f2f" sx={{ mt: 1 }}>{emailError}</Typography>}
                            <FormInput label="Contact Number" name="Contact Number" value={contactNo} setValue={setContactNo} isValid={contactNoError ? true : false} />
                            {contactNoError && <Typography variant="inherit" color="#d32f2f" sx={{ mt: 1 }}>{contactNoError}</Typography>}
                            <Button 
                            variant="contained" sx={{ marginTop: 2, marginBottom: 2 }} fullWidth
                            onClick={handleFSRegister}
                            >REGISTER</Button>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
            }
        </dev>
    )
}