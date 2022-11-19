import React from "react";
import { Card, CardMedia, Grid, Link, Typography } from "@mui/material";
import "../home/home.css"
import { LocalGasStation } from "@mui/icons-material";
import RoundedButton from "../../components/rounded_button/roundedButton";
//import Container from "@mui/material/Container";

const Home = () => {
    return (
        <div className="home">
            
            <Grid container minHeight="100vh" justifyContent="center" alignItems="center">
                
                    <Grid item
                        xs={12} md={7}
                        justifyContent="center"
                        alignItems="center"
                        sx={{
                            paddingLeft: {
                                xs: 2,
                                md: 2
                            },
                            paddingRight: {
                                xs: 2,
                                md: 2
                            }
                        }}
                    >
                        <Typography sx={{ textAlign: "center" }}>
                            <LocalGasStation
                                sx={{
                                    fontSize: {
                                        xs: "6rem",
                                        lg: "8rem"
                                    },
                                    color: 'white',
                                    lineHeight: 1
                                }} />
                        </Typography>
                        <Typography
                            sx={{
                                textAlign: "center",
                                fontSize: {
                                    xs: "4rem",
                                    lg: "6rem"
                                },
                                color: "white",
                                fontWeight: "bold",
                                lineHeight: 1,
                                fontFamily: 'monospace',
                            }}>
                            FuelQ
                        </Typography>
                        <Typography
                            sx={{
                                textAlign: "center",
                                fontSize: "1.5rem",
                                color: "white",
                                fontWeight: "lighter",
                                paddingTop: 1,
                                paddingLeft: 2,
                                paddingRight: 2,
                                lineHeight: 1.1
                            }}>
                            The all new Fuel Queue Management and Token Issuer System in
                            Sri Lanka.
                        </Typography>

                        <Grid container spacing={2} sx={{ paddingTop: 5 }}>
                            <Grid item xs={12} md={6}>
                                <Link href="/login" style={{ textDecoration: 'none' }}><RoundedButton text="Vehicle Owner Login" color="white" /></Link>
                            </Grid>

                            <Grid item xs={12} md={6}>
                                <Link href="/fs-login" style={{ textDecoration: 'none' }}><RoundedButton text="Fuel Station Login" color="white" /></Link>

                            </Grid>
                        </Grid>
                        <Link href="/register-user" style={{ textDecoration: 'none' }}><RoundedButton text="Register Vehicle Owner" /></Link>
                    </Grid>
                
                <Grid item
                    md={5}
                    sx={{
                        display: { md: 'block', xs: 'none' }
                    }}
                >
                    <Card sx={{ backgroundColor: "#1F7A8C", boxShadow: 0 }} >
                        <CardMedia
                            component="img"
                            image="https://i.ibb.co/nsZcSzQ/main-image.png"
                        />
                    </Card>
                </Grid>
            </Grid>
        
        </div>
    );
}

export default Home;
