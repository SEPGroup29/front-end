import React from "react";
import {Card, CardMedia, Grid, Typography} from "@mui/material";
import "../home/home.css"
import {LocalGasStation} from "@mui/icons-material";
import RoundedButton from "../../components/rounded_button/roundedButton";

const Home = () => {
    return (
        <div className="home">
            <Grid container minHeight="100vh" justifyContent="center" alignItems="center">
                <Grid item xs={6} justifyContent="center" alignItems="center" sx={{paddingLeft : 10 , paddingRight : 10 , }}  >
                    <Typography  sx={{textAlign : "center" }}>
                        <LocalGasStation sx={{fontSize : 150 , color : 'white' , lineHeight : 1}}/>
                    </Typography>
                    <Typography
                        sx={{
                            textAlign : "center" ,
                            fontSize : 150 ,
                            color : "white" ,
                            fontWeight : "bold",
                            lineHeight: 1
                        }}>
                        FuelQ
                    </Typography>
                    <Typography
                        sx={{
                            textAlign : "center" ,
                            fontSize : 30    ,
                            color : "white" ,
                            fontWeight : "lighter",
                            paddingTop : 1,
                            lineHeight: 1.1
                        }}>
                        Fuel Queue management software  developed for manage fuel queues in
                        Sri Lanka.
                    </Typography>

                    <Grid container spacing={2} sx={{paddingTop : 5}}>
                        <Grid item xs={6}>
                            <RoundedButton text="User Login" color="white" />
                        </Grid>

                        <Grid item xs={6}>
                            <RoundedButton text="Fuel Station Login" color="white" />
                        </Grid>
                    </Grid>
                    <RoundedButton text="Register" />

                </Grid>
                <Grid item xs={6}>
                    <Card sx={{backgroundColor : "#1976d2" , boxShadow : 0}} >
                        <CardMedia
                            component="img"
                            image="img/main_image.png"
                        />
                    </Card>
                </Grid>
            </Grid>
        </div>
    );
}

export default Home;
