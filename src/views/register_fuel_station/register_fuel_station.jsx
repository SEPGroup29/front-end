import React from "react";
import { Autocomplete, Button, Card, CardContent, Grid, MenuItem, TextField, Typography } from "@mui/material";
import FormInput from "../../components/form_input/FormInput";
import auth_validation from "../../utils/auth_validation";
import { SetMealOutlined } from "@mui/icons-material";

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

    const [town, setTown] = React.useState('Colombo 1');
    const [ownerName, setOwnerName] = React.useState('');
    const [name, setName] = React.useState('');

    const [townError, setTownError] = React.useState('');
    const [ownerNameError, setOwnerNameError] = React.useState('');
    const [nameError, setNameError] = React.useState('');

    const handleChange = (event) => {
        setTown(event.target.value);
    };

    const handleFSRegister = async(e) => {
        e.preventDefault()
        setOwnerNameError('')
        setNameError('')

        const { error, value } = auth_validation.nameValidation({ ownerName, name })
        if (error) {
            setOwnerNameError(error.details[0].message)
            error.details[1] && setNameError(error.details[1].message)
            return
        }

        try{
            setLoader(true)
            const response = await auth_services.registerUser({ email, firstName, lastName, NIC, otp })
        }
    }

    return (
        <dev>
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
                            <FormInput label="Owner Name" />
                            <Autocomplete
                                disablePortal
                                id="select_tow"
                                options={towns}
                                onChange={handleChange}
                                sx={{ mt: 2, mb: 2 }}
                                fullWidth
                                renderInput={(params) => <TextField {...params} label="Select Town Nearby" />}
                            />
                            <FormInput label="Display Name" />
                            <Button variant="contained" sx={{ marginTop: 2, marginBottom: 2 }} fullWidth>REGISTER</Button>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </dev>
    )
}