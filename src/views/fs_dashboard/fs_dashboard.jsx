import React from "react";
import Container from '@mui/material/Container';
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import ProgressBar from "./fs_pbar";
import PropTypes from 'prop-types';
import Typography from '@mui/material/Typography';
import CardHeader from '@mui/material/CardHeader';
import { Button, CardContent, Link } from "@mui/material";
import { Add } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

function Item({ name, value }) {

    return (
        <Box>
            <h5 align="center">{name}</h5>
            <h1 align="center" style={{ color: '#00897b' }}>{value} </h1>
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



const FsDashboard = () => {

    const navigate = useNavigate()

    const handleAddPo = () => {
        navigate('/register-po', { state: {fs_name: 'Maco Filling Station, Kalegana', fs_id: '6335ddd0bf09b4881f0d5bb5'} }) // Should send actual fuel station id and name
    }

    return (
        <div className="fs_dashboard">
            <Container sx={{ mt: 3, mb: 15 }}>
                <Typography variant="h3" color="#022B3A" fontWeight='lighter'>
                    Maco Filling Station, Kalegana
                </Typography>
                <Card
                    sx={{
                        mt: 3,
                        alignSelf: 'center',
                        borderRadius: 5,
                    }}
                    variant={"outlined"}
                >
                    <CardHeader
                        sx={{ backgroundColor: 'primary.main', color: 'white' }}
                        title={
                            <Typography
                                variant="h5"
                                sx={{
                                    textAlign: "center",
                                    fontWeight: "medium"
                                }}
                            >
                                Remaining Stocks
                            </Typography>
                        }
                    />
                    <ProgressBar />
                    <Typography sx={{ textAlign: 'center', mb: 3 }}>
                        <Link href="/update-fuel-stock" style={{ textDecoration: 'none' }}><Button sx={{ paddingLeft: 5, paddingRight: 5 }} variant="contained" color="secondary"><Add /> Update Fuel Stock</Button></Link>
                    </Typography>
                </Card>


                <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', borderRadius: 5 }} mt={2}>

                    <Card sx={{ mr: 3, borderRadius: 5 }}>
                        <CardHeader
                            sx={{ backgroundColor: 'primary.main', color: 'white', mb: 3 }}
                            title={
                                <Typography
                                    variant="h5"
                                    sx={{
                                        textAlign: "center",
                                        fontWeight: "medium"
                                    }}
                                >
                                    Petrol Queue
                                </Typography>
                            }
                        />
                        <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)' }}>
                            <Item name={"Tokens Given"} value={500}></Item>
                            <Item name={"Ongoing Number"} value={197}></Item>
                        </Box>
                    </Card>
                    <Card sx={{ ml: 3, borderRadius: 5 }}>
                        <CardHeader
                            sx={{ backgroundColor: 'primary.main', color: 'white', mb: 3 }}
                            title={
                                <Typography
                                    variant="h5"
                                    sx={{
                                        textAlign: "center",
                                        fontWeight: "medium"
                                    }}
                                >
                                    Diesel Queue
                                </Typography>
                            }
                        />
                        <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)' }}>
                            <Item name={"Tokens Given"} value={500} ></Item>
                            <Item name={"Ongoing Number"} value={197}></Item>
                        </Box>
                    </Card>
                </Box>

                <Card
                    sx={{
                        mt: 3,
                        alignSelf: 'center',
                        borderRadius: 5,
                    }}
                    variant={"outlined"}
                >
                    <CardHeader
                        sx={{ backgroundColor: 'primary.main', color: 'white' }}
                        title={
                            <Typography
                                variant="h5"
                                sx={{
                                    textAlign: "center",
                                    fontWeight: "medium"
                                }}
                            >
                                Pump Operators
                            </Typography>
                        }
                    />
                    <CardContent>

                    </CardContent>
                    <Typography sx={{ textAlign: 'center', mt: 3, mb: 3 }}>
                        <Button sx={{ paddingLeft: 5, paddingRight: 5 }} variant="contained" color="secondary" onClick={handleAddPo}><Add /> Add Pump Operator </Button>
                    </Typography>
                </Card>

            </Container>
        </div>
    );
}

export default FsDashboard;