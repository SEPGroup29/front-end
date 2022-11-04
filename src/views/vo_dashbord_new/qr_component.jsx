import React from "react";
import { Button, Card, CardContent, CardMedia, Grid, IconButton, Typography } from "@mui/material";
import { Download } from "@mui/icons-material";
import { useState, useRef } from "react";
import { QRCodeSVG, QRCodeCanvas } from "qrcode.react";
import DeleteIcon from '@mui/icons-material/Delete';

const QRComponent = () => {
    const [qrData, setQrData] = useState({ a: 5, b: 10 });
    const qrRef = useRef()

    const downloadQRCode = (e) => {
        e.preventDefault();
        let canvas = qrRef.current.querySelector("canvas");
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
            includeMargin
            level="L"
            size={300}
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
                    paddingLeft: { xs: '10%', lg: '30%' },
                    paddingRight: { xs: '10%', lg: '30%' },
                    marginTop: 'auto'
                }}
            >
                <div data-testId="qr-canvas" ref={qrRef}>{qrcode}</div>
                <div>
                    <IconButton aria-label="delete" size="large" sx={{ float: 'right' }} color='secondary' onClick={downloadQRCode}>
                        <Download />
                    </IconButton>
                </div>
            </CardMedia>
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
                            12.5L
                        </Typography>
                    </Grid>

                    <Grid item xs={6}>
                        <Typography variant='h6' align='center' color='#1F7A8C'>
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