import React from "react";
import OwnersTable from "./vo_table";
import { Container, Typography } from "@mui/material";

const vehicleOwnersList = () => {

    //fetch vehicle owners from the backend

    return (
        <div className="vehicleOwnersList">
            <Container sx={{ mt: 3, mb: 15 }}>
                <Typography variant="h3" color="#022B3A" fontWeight='lighter'>
                    Vehicle Owners
                </Typography>
                <OwnersTable />
            </Container>
            
        </div>
    );
}

export default vehicleOwnersList;