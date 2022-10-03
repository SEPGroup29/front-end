
import React, { useState } from "react";
import Modal from '@mui/material/Modal';
import { Box, Button, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup } from "@mui/material";

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

const JoinQueue = ({ clicked, setClicked }) => {
    const [open, setOpen] = useState(clicked);
    const handleClose = () => {
        setOpen(false)
        setClicked(false);
    }
    
    const [queueType, setQueuetype] = useState(null)
    const handleSubmit = () => {
        
    }

    return (
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style} >
                <Box textAlign={'center'}>
                    <FormControl>
                        <FormLabel id="demo-row-radio-buttons-group-label"><p  style={{color: '#1F7A8C'}}>Select queue type</p></FormLabel>
                        <RadioGroup
                            row
                            aria-labelledby="demo-row-radio-buttons-group-label"
                            name="row-radio-buttons-group"
                        >
                            <FormControlLabel value="petrol" control={<Radio color="primary" />} label="Petrol" onChange={(e) => setQueuetype(e.target.value)} />
                            <FormControlLabel value="diesel" control={<Radio color="primary" />} label="Diesel" onChange={(e) => setQueuetype(e.target.value)} />
                        </RadioGroup>

                        <div style={{ float: 'right' }}>
                            <Button variant="contained" color="secondary" onClick={handleSubmit}>Confirm</Button>
                        </div>
                    </FormControl>
                </Box>
            </Box>
        </Modal >
    );
}

export default JoinQueue;