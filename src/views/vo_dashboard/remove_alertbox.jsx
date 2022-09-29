
import React, { useState } from "react";
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Box, Button } from "@mui/material";
import vehicle_owner_services from '../../services/api/vehicle_owner_services';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: '#fff',
    border: '5px solid #d32f2f',
    boxShadow: 24,
    p: 4,
};

const RemoveAlertBox = ({ clicked, setClicked, vehicleDetails }) => {
    const [open, setOpen] = useState(clicked);
    const handleClose = () => {
        setOpen(false)
        setClicked(false);
    }

    const handleDelete = async () => {
        try {
            const response = await vehicle_owner_services.deleteVehicle(vehicleDetails._id)
            if (response.status === 200) {
                console.log(response);
                window.location.reload();
            }
        } catch (error) {
            console.log(error)
        }
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
                    <p style={{ textAlign: 'center' }}>Withdraw the vehicle - {vehicleDetails.regNo}? </p>
                </Typography>
                    <p style={{ textAlign: 'center' }}>This cannot be undone</p>
                <Box textAlign={'center'}><Button variant="contained" color="error" onClick={handleDelete}>Confirm</Button></Box>
            </Box>
        </Modal>
    );
}

export default RemoveAlertBox;