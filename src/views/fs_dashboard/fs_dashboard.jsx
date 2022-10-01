import React from "react";
import Container from '@mui/material/Container';
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import ProgressBar from "./fs_pbar";
import PropTypes from 'prop-types';
import Sidebar from "../../components/sidebar";

function Item({ name, value }) {

    return (
        <Box>
            <h5 align="center">{name}</h5>
            <h1 align="center">{value}</h1>
        </Box>
       
    );
}

Item.propTypes = {
    /**
     * The system prop that allows defining system overrides as well as additional CSS styles.
     */
    sx: PropTypes.oneOfType([
        PropTypes.arrayOf(
            PropTypes.oneOfType([PropTypes.func, PropTypes.object, PropTypes.bool]),
        ),
        PropTypes.func,
        PropTypes.object,
    ]),
};



const fs_dashboard = () => {

    return (
        <div className="fs_dashboard">
            <Container>
                <Sidebar/>
                <h1 align="center">Fuel Station Dashboard</h1>
                    <Card sx={{ maxwidth: 'lg' }}>
                        <Box>
                            <h3 align="center">Remaining Stocks</h3>
                            <ProgressBar />
                        </Box>
                    </Card>
                    <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)' }} mt={2}>

                        <Card style={{marginRight: "5px"}}>
                            <h4 align="center" style={{backgroundColor: "rgb(207,207,207)", marginTop:"0px", padding:'25px'}}>Petrol Queue</h4>
                            <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)' }}>
                                <Item name={"Tokens Given"} value={500}></Item>
                                <Item name={"Ongoing Number"} value={197}></Item>
                            </Box>
                        </Card>
                        <Card style={{marginLeft: "5px"}}>
                            <h4 align="center" style={{backgroundColor: "rgb(207,207,207)", marginTop:"0px", padding:'25px'}}>Diesel Queue</h4>
                            <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)' }}>
                                <Item name={"Tokens Given"} value={500}></Item>
                                <Item name={"Ongoing Number"} value={197}></Item>
                            </Box>
                        </Card>


                    </Box>

            </Container>
        </div>
    );
}

export default fs_dashboard;