import React from "react";
import { Button, Card, CardContent, CardMedia, Grid, IconButton, Typography } from "@mui/material";
import { Download } from "@mui/icons-material";
import { useState, useRef } from "react";
import { QRCodeSVG, QRCodeCanvas } from "qrcode.react";
import DeleteIcon from '@mui/icons-material/Delete';
import { Box, Container } from "@mui/system";

const QRComponent = (props) => {
    const qrData = props.qrData
    const remainingQuota = props.remainingQuota
    const downloadQRCode = (e) => {
        e.preventDefault();
        let canvas = document.getElementById("qrCode");
        console.log("CANVAS", canvas);
        let image = canvas.toDataURL("image/jpeg");
        let anchor = document.createElement("a");
        anchor.href = image;
        anchor.download = `qr-code.jpeg`;
        document.body.appendChild(anchor);
        anchor.click();
        document.body.removeChild(anchor);
    }

    const qrcode = (
        <QRCodeCanvas
            id="qrCode"
            value={JSON.stringify(qrData)}
            level="L"
            size={250}
        // bgColor={"#00ff00"}
        // level={"H"}
        />
    )

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
                // component="img"
                // image="img/QR_sample.png"
                sx={{
                    alignSelf: 'center',
                    marginTop: 2,
                }}
            >
                <div className="canvas">{qrcode}</div>
            </CardMedia>
            <Box textAlign='center'>
                <Button onClick={downloadQRCode} color="secondary" variant="contained" sx={{ mt: 1, mb: 1, alignSelf: 'center', paddingRight: 5, paddingLeft: 5, }}>
                    Download QR
                    <Download />
                </Button>
            </Box>
            {/* <IconButton
                variant="contained"
                sx={{ mt: 3, mb: 3 }}
                onClick={downloadQRCode}
            >
                <Download />
            </IconButton> */}

            <CardContent sx={{ backgroundColor: '#E1E5F2', alignSelf: 'bottom', marginTop: 'auto' }}>
                <Grid container spacing={2} justifyContent="center" alignItems="center"  >
                    <Grid item xs={6}>
                        <Typography variant='h6' align='center' color='#1F7A8C'>
                            Remaining Petrol Quota
                        </Typography>
                        <Typography variant='h4' align='center' fontWeight='bold' >
                            {remainingQuota && remainingQuota.rpq ? remainingQuota.rpq : '00'}
                        </Typography>
                    </Grid>

                    <Grid item xs={6}>
                        <Typography variant='h6' align='center' color='#1F7A8C'>
                            Remaining Diesel Quota
                        </Typography>
                        <Typography variant='h4' align='center' fontWeight='bold' >
                            {remainingQuota && remainingQuota.rdq ? remainingQuota.rdq : '00'}
                        </Typography>
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    )
}

export default QRComponent;