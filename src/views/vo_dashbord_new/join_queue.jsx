
import React, { useState } from "react";
import Modal from '@mui/material/Modal';
import { Box, Button, Grid, ToggleButton, ToggleButtonGroup, Typography } from "@mui/material";
import Loader from "../../components/loader/loader";


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

const JoinQueue = ({ vehicles, clicked, setClicked }) => {
    const [open, setOpen] = useState(clicked);
    const [loader, setLoader] = useState(false)
    const handleClose = () => {
        setOpen(false)
        setClicked(false);
    }

    const [fuel, setFuel] = useState('petrol')
    const [vehicle, setVehicle] = useState(vehicles[0].regNo)
    const handleChange = (event, newFuel) => {
        setFuel(newFuel);
    };
    const handleChangeTwo = (event, newVehicle) => {
        setFuel(newVehicle);
    };

    const [confirmError, setConfirmError] = useState()
    const handleConfirm = () => {
        if (fuel) {
            if (vehicle) {
                
            } else {
                setConfirmError('Vehicle is required')
            }
        } else {
            setConfirmError('Fuel type is required')
        }
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
                        <Button sx={{ mt: 3 }} variant="contained" color="secondary" onClick={handleConfirm}>Confirm</Button>
                    </Box>
                </Box>
            </Modal >
        </div>
    );
}

export default JoinQueue;