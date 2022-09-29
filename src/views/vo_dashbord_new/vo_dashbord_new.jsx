import React from "react";
import {Card, CardContent, Grid, Typography} from "@mui/material";

const Vo_Dashbord_new = () => {
    return (
        <div style={{padding : 20}}>
            <Typography variant="h3">
                Welcome, Yasiru,
            </Typography>
        <Grid container maxWidth="xl" spacing={2} paddingTop={3}>
            <Grid item xs={8} paddingTop={2}>
                <Card sx={{ alignSelf : 'center' , boxShadow: 12}} variant={"outlined"}>
                    <CardContent>

                    </CardContent>
                </Card>
            </Grid>
            <Grid item xs={4} paddingTop={2}>
                <Card sx={{ alignSelf : 'center' , boxShadow: 12}} variant={"outlined"}>
                    <CardContent>

                    </CardContent>
                </Card>
            </Grid>
        </Grid>

        </div>
    )
}

export default Vo_Dashbord_new;