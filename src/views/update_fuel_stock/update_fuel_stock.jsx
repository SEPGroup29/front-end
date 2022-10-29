import React, { useState } from "react";
import { Button, Card, CardContent, Grid, TextField, Typography } from "@mui/material";
import FormInput from "../../components/form_input/FormInput";
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import MuiToggleButton from '@mui/material/ToggleButton';
import { styled } from '@mui/material/styles';
import api_validations from "../../utils/api_validations";
import Loader from '../../components/loader/loader';
import { useLocation, useNavigate } from "react-router-dom";
import fuel_station_services from "../../services/api/fuel_station_services";
import { useEffect } from "react";
import ErrorAlert from "../../alerts/errorAlert";

export default function Update_fuel_stock() {
    
    useEffect(() => {
        getStock()
    }, [])

    const location = useLocation()
    const { fs_name, fs_id } = location.state

    const [petrolStock, setPetrolStock] = useState('---')
    const [dieselStock, setDieselStock] = useState('---')
    const getStock = async () => {
        const response = await fuel_station_services.getStock(fs_id)
        setPetrolStock(response.data.petrol)
        setDieselStock(response.data.diesel)
    }

    const [fuel, setFuel] = useState('Petrol')
    const [amount, setAmount] = useState()

    const handleChange = (event, newFuel) => {
        setFuel(newFuel);
    };

    const ToggleButton = styled(MuiToggleButton)(({ selectedColor }) => ({
        '&.Mui-selected, &.Mui-selected:hover': {
            color: 'white',
            backgroundColor: selectedColor,
        },
    }));

    const [amountError, setAmountError] = useState('')
    const [updateError, setUpdateError] = useState('')
    const [loader, setLoader] = useState(false)
    const navigate = useNavigate()

    const handleUpdate = async (e) => {
        e.preventDefault();

        setAmountError('')
        console.log("Fuel Type: ", fuel);
        console.log("Amount: ", amount);
        const { error, value } = api_validations.fuelAmountValidation({ amount })
        if (error) {
            console.log(error.details);
            setAmountError(error.details[0].message)
            return;
        }

        try {
            setLoader(true)
            const response = await fuel_station_services.updateStock(fuel, parseInt(amount), fs_id)
            if(response.data.updatedStation) {
                navigate('/fs-dashboard')
            } 
            if (response.data.error) {
                setUpdateError(response.data.error)
            }
        } catch (error) {
            navigate('/503-error')
        }
        setLoader(false)
    }

    return (
        <div>
            {loader && <Loader />}
            {!loader &&
                <Grid container minHeight="100vh" justifyContent="center" alignItems="center">
                    <Grid item xs={10} md={5} paddingTop={2}>
                        <Card sx={{ alignSelf: 'center', boxShadow: 12, borderRadius: 5 }} variant={"outlined"}>
                            <CardContent>
                                <Typography variant="h4">
                                    Fuel Stock Update
                                </Typography>
                                <Typography variant="h5" color="#022B3A" fontWeight='lighter' sx={{ mb: 3 }}>
                                    {fs_name}
                                </Typography>
                                {updateError && <ErrorAlert custom_message={updateError}></ErrorAlert>}
                                <Typography variant="subtitle1" sx={{ fontWeight: 'bold', paddingTop: 2 }}>
                                    Select fuel type
                                </Typography>
                                <Grid container>
                                    <ToggleButtonGroup
                                        color="primary"
                                        value={fuel}
                                        exclusive
                                        onChange={handleChange}
                                        aria-label="Platform"
                                        variant="contained"
                                        fullWidth
                                    >
                                        <ToggleButton value="Petrol" selectedColor="#26a69a">Petrol</ToggleButton>
                                        <ToggleButton value="Diesel" selectedColor="#26a69a">Diesel</ToggleButton>
                                    </ToggleButtonGroup>

                                </Grid>
                                <Typography variant="subtitle1" sx={{ fontWeight: 'bold', paddingTop: 2 }}>
                                    Remaining Stock
                                </Typography>
                                <Grid container>
                                    <Grid item xs={12} sm={6}>
                                        <Typography variant="h6" sx={{ textAlign: 'center', color: '#1F7A8C' }}>
                                            Petrol
                                        </Typography>
                                        <Typography variant="h3" sx={{ textAlign: 'center' }}>
                                            {petrolStock} L
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={12} sm={6}>
                                        <Typography variant="h6" sx={{ textAlign: 'center', color: '#1F7A8C' }}>
                                            Diesel
                                        </Typography>
                                        <Typography variant="h3" sx={{ textAlign: 'center' }}>
                                            {dieselStock} L
                                        </Typography>
                                    </Grid>
                                </Grid>
                                {/* <FormInput label="Liters Arrived" /> */}
                                <TextField
                                    sx={{ width: '100%', mt: 2 }}
                                    id="outlined-number"
                                    label="Liters Arrived"
                                    type="number"
                                    value={amount}
                                    error={amountError !== ''}
                                    onChange={(e) => setAmount(e.target.value)}
                                // InputLabelProps={{
                                //     shrink: true,
                                // }}
                                />
                                {amountError && <Typography variant="inherit" color="#d32f2f" sx={{ mt: 1 }}>{amountError}</Typography>}
                                <Button variant="contained" color="primary" sx={{ marginTop: 2, marginBottom: 2 }} fullWidth onClick={handleUpdate}>UPDATE</Button>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            }
        </div>
    )
}