
import React, { useState } from "react";
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Box, Button } from "@mui/material";
import { LocalGasStation, LocationOn } from "@mui/icons-material";
import vehicle_owner_services from "../../services/api/vehicle_owner_services";
import InfoAlert from "../../alerts/infoAlert";

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: '#fff',
    border: '3px solid #d32f2f',
    boxShadow: 24,
    borderRadius: 5,
    p: 4,
};

const WithdrawAlertBox = ({ clicked, setClicked, withdrawingVehicle }) => {
    const [open, setOpen] = useState(clicked);
    const handleClose = () => {
        setOpen(false)
        setClicked(false);
    }

    const [disabled, setDisabled] = useState(false)

    const [withdrawError, setWithdrawError] = useState();
    const handleWithdraw = async () => {
        setDisabled(true)
        setWithdrawError()
        try {
            console.log("withdrawingVehicle", withdrawingVehicle);
            const response = await vehicle_owner_services.withdrawFromQueue(withdrawingVehicle.queueId, withdrawingVehicle.regNo)
            if (response.status === 200) {
                if (response.data.error) {
                    setWithdrawError(response.data.error)
                } else if (response.data.success) {
                    window.location.reload();
                }
            }
        } catch (error) {
            console.log(error)
        }
        setDisabled(false)
    }

    return (
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style}>
                {withdrawError && <InfoAlert custom_message={withdrawError} />}
                <Typography id="modal-modal-title" variant="h6" component="h2">
                    <p style={{ textAlign: 'center' }}>Withdraw from this queue?</p>
                </Typography>
                <p style={{ textAlign: 'center' }}>This cannot be undone</p>
                <Box textAlign={'center'}><Button disabled={disabled} variant="contained" color="error" onClick={handleWithdraw}>Confirm</Button></Box>


            </Box>
        </Modal>
    );
}

export default WithdrawAlertBox;