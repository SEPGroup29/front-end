import React from "react";
import { Button, Card, CardContent, CardMedia, Grid, Typography } from "@mui/material";
import { Download } from "@mui/icons-material";

const QRComponent = () => {
    return (
        <Card
            sx={{
                alignSelf: 'center',
                borderRadius: 5,
                height: { xs: 'none', md: '430px' },
                display: 'flex',
                flexDirection: 'column'

            }}
            variant={"outlined"}
        >
            <CardMedia
                component="img"
                image="img/QR_sample.png"
                sx={{
                    paddingLeft: { xs: '10%', lg: '30%' },
                    paddingRight: { xs: '10%', lg: '30%' },
                    marginTop: 'auto'
                }}
            />
                <Button
                    variant="contained"
                    color="secondary"
                    sx={{ marginTop: 3, alignSelf: 'center', paddingRight: 5, paddingLeft: 5, "&:hover": { color: 'white' } }}
                >
                    <Download />&ensp;Download QR
                </Button>
            <CardContent sx={{ backgroundColor: '#E1E5F2', alignSelf: 'bottom', marginTop: 'auto' }}>
                <Grid container spacing={2} justifyContent="center" alignItems="center"  >
                    <Grid item xs={6}>
                        <Typography variant='h6' align='center' color='#2e7d32'>
                            Remaining Petrol Quota
                        </Typography>
                        <Typography variant='h4' align='center' fontWeight='bold' >
                            12.5L
                        </Typography>
                    </Grid>

                    <Grid item xs={6}>
                        <Typography variant='h6' align='center' color='#2e7d32'>
                            Remaining Diesel Quota
                        </Typography>
                        <Typography variant='h4' align='center' fontWeight='bold' >
                            12.5L
                        </Typography>
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    )
}

export default QRComponent;