
import React, { useState } from "react";
import Modal from '@mui/material/Modal';
import { Box, Button, Grid, ToggleButton, ToggleButtonGroup, Typography } from "@mui/material";
import Loader from "../../components/loader/loader";
import vehicle_owner_services from "../../services/api/vehicle_owner_services";
import ErrorAlert from "../../alerts/errorAlert";
import SuccessAlert from "../../alerts/successAlert";
import { Container } from "@mui/system";
import { useNavigate } from "react-router-dom";
import FormInput from "../../components/form_input/FormInput";
import api_validations from "../../utils/api_validations";
import { CarCrashOutlined } from "@mui/icons-material";

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: '#fff',
    border: '3px solid #1F7A8C',
    boxShadow: 24,
    borderRadius: 5,
    p: 4,
};

const JoinQueue = ({ vehicles, clicked, setClicked, stationId }) => {
    const navigate = useNavigate()

    const [open, setOpen] = useState(clicked);
    const [loader, setLoader] = useState(false)
    const handleClose = () => {
        setOpen(false)
        setClicked(false);
    }

    const [fuel, setFuel] = useState('petrol')
    const [vehicle, setVehicle] = useState(vehicles[0] ? vehicles[0].regNo : null)
    const [amount, setAmount] = useState()
    const handleChange = (event, newFuel) => {
        setFuel(newFuel);
    };
    const handleChangeTwo = (event, newVehicle) => {
        setFuel(newVehicle);
    };

    const handleAmount = (value) => {
        if (parseInt(value) > 9999) {
            setAmount("9999")
        }
        else if (parseInt(value) < 0) {
            setAmount("0")
        }
        else {
            setAmount(value)
        }
    }

    const [confirmError, setConfirmError] = useState()
    const [amountError, setAmountError] = useState()
    const [joinError, setJoinError] = useState()
    const [joinSuccess, setJoinSuccess] = useState()
    const [buttonDisable, setButtonDisable] = useState(false)
    const handleConfirm = async () => {
        setButtonDisable(true)
        setConfirmError()
        setAmountError()
        setJoinError()
        setJoinSuccess()
        if (fuel) {
            if (vehicle) {
                const val = api_validations.fuelAmountValidation({ amount })
                if (val.error) {
                    console.log(val.error.details[0].message)
                    setAmountError(val.error.details[0].message)
                    setButtonDisable(false)
                    return
                }
                try {
                    const response = await vehicle_owner_services.joinQueue(stationId, fuel, vehicle, amount)
                    if (response.data.error) {
                        setJoinError(response.data.error)
                        setButtonDisable(false)
                        return
                    }
                    if (response.data.success) {
                        setJoinSuccess(response.data.success)
                        setButtonDisable(false)
                        return
                    }
                } catch (error) {
                    navigate('/503-error')
                }

            } else {
                setConfirmError('Vehicle is required')
            }
        } else {
            setConfirmError('Fuel type is required')
        }
        setButtonDisable(false)
    }

    return (
        <div className="Join-queue">
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >

                <Box sx={style} >
                    <Box textAlign={'center'}>
                        <Typography variant="h4">
                            Join Queue
                        </Typography>

                        {vehicle !== null ?
                            <Container>
                                <Container maxWidth="lg" sx={{ mt: 2 }}>
                                    {joinError && <ErrorAlert custom_message={joinError} />}
                                    {joinSuccess && <SuccessAlert custom_message={joinSuccess} />}
                                </Container>

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
                                        <ToggleButton data-testId="select-fuel-type-petrol" value="petrol" selectedColor="#26a69a">Petrol</ToggleButton>
                                        <ToggleButton data-testId="select-fuel-type-diesel" value="diesel" selectedColor="#26a69a">Diesel</ToggleButton>
                                    </ToggleButtonGroup>
                                </Grid>
                                {confirmError === 'Fuel type is required' && <Typography variant="inherit" color="#d32f2f" sx={{ mt: 1 }}>{confirmError}</Typography>}

                                <Typography variant="subtitle1" sx={{ fontWeight: 'bold', paddingTop: 2 }}>
                                    Select vehicle
                                </Typography>
                                <Grid container>
                                    <ToggleButtonGroup
                                        color="primary"
                                        value={vehicle}
                                        exclusive
                                        onChange={handleChangeTwo}
                                        aria-label="Platform"
                                        variant="contained"
                                        fullWidth
                                    >
                                        {
                                            vehicles.map(vehicle => (
                                                <ToggleButton data-testId={`select-vehicle-${vehicle.regNo}`} value={vehicle.regNo} selectedColor="#26a69a">{vehicle.regNo}</ToggleButton>
                                            ))
                                        }
                                    </ToggleButtonGroup>
                                </Grid>
                                {confirmError === 'Vehicle is required' && <Typography variant="inherit" color="#d32f2f" sx={{ mt: 1 }}>{confirmError}</Typography>}

                                <Typography variant="subtitle1" sx={{ fontWeight: 'bold', paddingTop: 2 }}>
                                    Enter expected fuel amount
                                </Typography>
                                <Grid>
                                    <FormInput label="1234" setValue={handleAmount} type="number" value={amount} />
                                </Grid>
                                {setAmountError && <Typography variant="inherit" color="#d32f2f" sx={{ mt: 1 }}>{amountError}</Typography>}

                                <Button disabled={buttonDisable} sx={{ mt: 3 }} variant="contained" color="secondary" onClick={handleConfirm}>Confirm</Button>
                            </Container>
                            :
                            <Container>
                                <div className="content">
                                    <h3 style={{ textAlign: 'center', marginBottom: '3px', marginTop: '10px', color: '#1F7A8C' }} class="notfound_header">No vehicles yet</h3>
                                    <p style={{ textAlign: 'center', color: '#022B3A' }}>
                                        Add one or more vehicles to your vehicle list and join your selected queue
                                    </p>
                                </div>
                                <div className="image">
                                    <CarCrashOutlined
                                        sx={{
                                            fontSize: {
                                                xs: "10rem",
                                                lg: "12rem"
                                            },
                                            color: '#1F7A8C',
                                            lineHeight: 1
                                        }} />
                                </div>
                            </Container>
                        }
                    </Box>
                </Box>
            </Modal >
        </div>
    );
}

export default JoinQueue;