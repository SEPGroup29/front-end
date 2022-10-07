import React from "react";
import { Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material';

const PersonCard = ({ name, description }) => {
    return (
        <Card sx={{ borderRadius: 5 }}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="250"
                    image="https://i.ibb.co/2FNrvtC/test.png"
                    alt="green iguana"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div" fontFamily={'monospace'}>
                        {name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {description}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}

export default PersonCard;