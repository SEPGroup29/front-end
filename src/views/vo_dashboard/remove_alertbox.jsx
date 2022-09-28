
import React, { useState } from "react";
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Box, Button } from "@mui/material";
//import { LocalGasStation, LocationOn } from "@mui/icons-material";

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
                <Box textAlign={'center'}><Button variant="contained" color="error" >Confirm</Button></Box>
            </Box>
        </Modal>
    );
}

export default RemoveAlertBox;