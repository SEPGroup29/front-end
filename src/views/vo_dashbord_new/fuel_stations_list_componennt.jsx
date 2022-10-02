import React from "react";
import {Button, Card, CardContent, CardHeader, Typography} from "@mui/material";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import TableBody from "@mui/material/TableBody";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import IconButton from "@mui/material/IconButton";
import InfoIcon from "@mui/icons-material/Info";
import TableContainer from "@mui/material/TableContainer";
import SearchIcon from '@mui/icons-material/Search';

function createData(fuelStation , petrolStock , dieselStock , petrolQueue , dieselQueue){
    return {fuelStation, petrolStock, dieselStock , petrolQueue , dieselQueue};
}

const rows = [
    createData('Walasmulla AK' , 60549 , 24769 , 125 , 200),
    createData('Walasmulla AK' , 60549 , 24769 , 125 , 200),
    createData('Walasmulla AK' , 60549 , 24769 , 125 , 200),
]

const FuelStationListComponent = () => {
    return(
        <Card
            sx={{
                alignSelf : 'center' ,
                borderRadius : 5 ,
                height : {xs:'none' , md:'430px'},
                overflow: "auto",
            }}
            variant={"outlined"}
        >
            <CardHeader
                sx={{backgroundColor : '#E1E5F2'}}
                title={
                    <Typography
                        variant="h5"
                        sx={{
                            textAlign : "center",
                            fontWeight: "medium"
                        }}
                    >
                        Fuel Stations List
                    </Typography>
                }
            />

            <CardContent sx={{alignContent:'center'}}>
                <TableContainer component={Paper} sx={{boxShadow : 0}}>
                    <Table aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell> Fuel Station Name</TableCell>
                                <TableCell> Petrol Stock</TableCell>
                                <TableCell> Diesel Stock </TableCell>
                                <TableCell> Petrol Queue </TableCell>
                                <TableCell> Diesel Queue </TableCell>
                                <TableCell></TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rows.map((row) => (
                                <TableRow
                                    key = {row.number}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell>
                                        {row.fuelStation}
                                    </TableCell>
                                    <TableCell>{row.petrolStock}</TableCell>
                                    <TableCell>{row.dieselStock}</TableCell>
                                    <TableCell>{row.petrolQueue}</TableCell>
                                    <TableCell>{row.dieselQueue}</TableCell>
                                    <TableCell align="right" sx={{paddingLeft : 1 , paddingRight:1}}>
                                        <Button
                                            variant="contained"
                                            color = "primary"
                                            sx={{display:{xs:'none' , sm:'inline'}}}
                                        >
                                            <InfoOutlinedIcon />
                                        </Button>
                                        <IconButton
                                            aria-label="info"
                                            sx={{display:{xs:'block' , sm:'none'}}}
                                            color="primary"
                                        >
                                            <InfoIcon />
                                        </IconButton>
                                    </TableCell>

                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>

                <Typography align='center'>
                    <Button
                        variant="contained"
                        color="secondary"
                        sx={{marginTop : 3 , alignSelf : 'center' , paddingRight : 5 , paddingLeft : 5}}
                        startIcon={<SearchIcon />}
                    >
                        Search Fuel Station
                    </Button>
                </Typography>
            </CardContent>
        </Card>
    )
}

export default FuelStationListComponent;