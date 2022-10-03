import React from "react";
import {Card, CardContent, Typography} from "@mui/material";
import Box from "@mui/material/Box";
import InfoRoundedIcon from '@mui/icons-material/InfoRounded';

export default function InfoCard({image , cardTitle , amount}){
    return(
        <Box
            sx={{
                borderRadius : 5 ,
                backgroundImage : `url(${image})` ,
                backgroundSize : 'cover'
            }}
        >
            <Card
                sx={{
                    borderRadius : 5 ,
                    minHeight : '100px' ,
                    backgroundColor : 'rgba(0,0,0,0.7)',
                    '&:hover' :{
                        backgroundColor : 'rgba(2,43,58,0.9)'
                    },
                    color : 'white'
                }}
            >
                <CardContent>

                    <Typography
                        variant="h6"
                        align='center'
                    >
                        <InfoRoundedIcon fontSize="large" />
                    </Typography>

                    <Typography
                        variant="h6"
                        align='center'
                    >

                        {cardTitle}
                    </Typography>
                    <Typography
                        variant="h3"
                        align='center'
                        color='#BFDBF7'
                        fontWeight= 'bold'
                    >
                        {amount}
                    </Typography>
                </CardContent>
            </Card>
        </Box>

    )
}