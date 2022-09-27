
import React, { useState } from "react";
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Box } from "@mui/material";
import { LocalGasStation } from "@mui/icons-material";

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: '#fff',
    border: '5px solid #1976d2',
    boxShadow: 24,
    p: 4,
};

const VehicleDetails = ({clicked, setClicked, vehicleDetails}) => {
    const [open, setOpen] =  useState(clicked);
    const handleClose = () => {
        setOpen(false)
        setClicked(false);
    }

    return (
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style}>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                    {vehicleDetails.regNo}
                    <span style={{ float: 'right', padding: '5px', color: 'white', backgroundColor: '#1976d2', borderRadius: '5px' }}><LocalGasStation />&ensp;{vehicleDetails.fuelType}</span>
                </Typography>
                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                    Chassis No: {vehicleDetails.chassisNo}
                </Typography>
                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                    {vehicleDetails.type}
                </Typography>
            </Box>
        </Modal>
    );
}

export default VehicleDetails;