import React from "react";
import {Button, Card, CardContent, Grid, Typography} from "@mui/material";
import FormInput from "../../components/form_input/FormInput";
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import MuiToggleButton from '@mui/material/ToggleButton';
import {styled} from '@mui/material/styles';



export default function Update_fuel_stock(){

    const handleChange = (event, newFuel) => {
        setFuel(newFuel);
    };

    const [fuel, setFuel] = React.useState('petrol')
    const ToggleButton = styled(MuiToggleButton)(({ selectedColor }) => ({
        '&.Mui-selected, &.Mui-selected:hover': {
            color: 'white',
            backgroundColor: selectedColor,
        },
    }));

    return(
        <div>
            <Grid container minHeight="100vh" justifyContent="center" alignItems="center">
                <Grid item xs={10} md={5} paddingTop={2}>
                    <Card sx={{alignSelf : 'center' , boxShadow: 12, borderRadius:5}} variant={"outlined"}>
                        <CardContent>
                            <Typography variant="h4">
                                Fuel Stock Update
                            </Typography>
                            <Typography variant="subtitle1">
                                FuelQ 
                            </Typography>
                            <Grid container>
                                <ToggleButtonGroup
                                    color="primary"
                                    value={fuel}
                                    exclusive
                                    onChange={handleChange}
                                    aria-label="Platform"
                                    variant="contained"
                                    fullWidth
                                >
                                    <ToggleButton value="petrol" selectedColor="#26a69a">Petrol</ToggleButton>
                                    <ToggleButton value="diesel" selectedColor="#26a69a">Diesel</ToggleButton>
                                </ToggleButtonGroup>

                            </Grid>
                            <Typography variant="subtitle1" sx={{fontWeight : 'bold' ,  paddingTop : 2}}>
                                Remaining Stock
                            </Typography>
                            <Typography variant="h1" sx={{textAlign : 'center'}}>
                                15.5L
                            </Typography>
                            <FormInput label="Liters Arrived" />
                            <Button variant="contained" color="primary" sx={{marginTop : 2 , marginBottom : 2}} fullWidth>UPDATE</Button>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>

        </div>
    )
}