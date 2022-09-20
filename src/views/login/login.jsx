import React from "react";
import {Card, CardContent, Grid, Typography} from "@mui/material";

export default function Login(){
    return(
        <div>
            <Grid container>
                <Grid justifyContent={"center"} alignItems={"center"}>
                    <Grid item>
                        <Card sx={{width : 408 , alignSelf : 'center'}} variant={"outlined"}>
                            <CardContent>
                                <Typography variant="h4">
                                    Login
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>

                </Grid>
            </Grid>

        </div>
    )
}