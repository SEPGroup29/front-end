import React from "react";
import {Card, CardActionArea, CardContent, CardHeader, Typography} from "@mui/material";
import LocalGasStationIcon from '@mui/icons-material/LocalGasStation';
import AddIcon from '@mui/icons-material/Add';
import {Container} from "@mui/system";
import PersonIcon from '@mui/icons-material/Person';
import SearchIcon from '@mui/icons-material/Search';

export default function ButtonCard({text}){

    const designsIcon ={
        fontSize : {
            lg : "5rem",
            md : "3.8rem",
            sm: "2.5rem"
        }
    }

    function selectIcons() {
        let icons = []
        if (text.includes("Fuel Station")){
            icons.push(<LocalGasStationIcon sx={designsIcon} />)
        }
        if (text.includes("Manager") || text.includes("Owner")){
            icons.push(<PersonIcon sx={designsIcon} />)
        }
        if (text.includes("View")){
            icons.push(<SearchIcon sx={designsIcon} />)
        }
        if (text.includes("Register")){
            icons.push(<AddIcon sx={designsIcon} />)
        }

        return (
            <Container>
                {icons[0]}
                {icons[1]}
            </Container>
        );
    }

    return(
        <Card sx={{borderRadius : 5}}>
            <CardActionArea>
                <CardHeader
                    sx={{backgroundColor : '#1F7A8C'}}
                    title={
                        <Typography
                            textAlign="center"
                            color="white"
                        >
                            {selectIcons()}
                        </Typography>
                    }
                />
                <CardContent >
                    <Typography
                        color="secondary"
                        fontWeight="medium"
                        textAlign="center"
                        sx={{
                            fontSize : {
                                lg : "2.1rem",
                                md : "1.8rem",
                                sm : "1.2rem"
                            }
                        }}
                    >
                        {text}
                    </Typography>
                </CardContent>
            </CardActionArea>

        </Card>
    )
}