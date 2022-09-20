import React from "react";
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';

const fs_dashboard = () => {
    return (
        <div className="fs_dashboard">
            <Container>
                <h1>Fuel Station Dashboard</h1>
                <Paper sx={{ width: '100%'}} elevation={4}>
                </Paper>
            </Container>
        </div>
    );
}

export default fs_dashboard;