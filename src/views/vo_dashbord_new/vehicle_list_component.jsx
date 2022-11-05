import React from "react";
import {
    Button,
    Card,
    CardContent,
    CardHeader, Dialog, DialogTitle,
    Typography,
} from "@mui/material";
import TableContainer from "@mui/material/TableContainer";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import TableBody from "@mui/material/TableBody";
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from "@mui/material/IconButton";
import InfoIcon from '@mui/icons-material/Info';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { useNavigate } from "react-router-dom";



const VehicleListComponent = ({ handleClick, handleRemoveVehicle, vehicles }) => {

    const [openVehDetail, setOpenVehDetail] = React.useState(false);
    const [vehicleDetails, setVehicleDetails] = React.useState();

    const seeVehDetail = (event) => {
        vehicles.map(v => {
            if (v._id === event.target.id) {
                setVehicleDetails(v)
            }
        })
        setOpenVehDetail(true)
        console.log(vehicleDetails)
    }

    const handleClose = () => {
        setOpenVehDetail(false)
    }

    const fullVehicles = vehicles.length < 3

    const navigate = useNavigate()

    const addVehicleButtonClick = () => {
        navigate('/register-vehicle')
    }

    return (
        <Card
            sx={{
                alignSelf: 'center',
                borderRadius: 5,
                height: { xs: 'none', md: '430px' },
                overflow: "auto",
            }}
            variant={"outlined"}
        >
            <CardHeader
                sx={{ backgroundColor: '#E1E5F2' }}
                title={
                    <Typography
                        variant="h5"
                        sx={{
                            textAlign: "center",
                            fontWeight: "medium"
                        }}
                    >
                        Vehicle List
                    </Typography>
                }
            />

            <CardContent sx={{ alignContent: 'center' }}>

                {
                    vehicles.length <= 3 ?
                        <TableContainer component={Paper} sx={{ boxShadow: 0 }}>
                            <Table aria-label="simple table">
                                <TableHead>
                                    <TableRow>
                                        <TableCell> Vehicle Number</TableCell>
                                        <TableCell> Vehicle Type</TableCell>
                                        <TableCell> Fuel Type </TableCell>
                                        <TableCell></TableCell>
                                        <TableCell></TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {vehicles.map((vehicle, index) => (
                                        <div data-testId={`table-row-${index}`}>
                                            <TableRow
                                                key={vehicle._id}
                                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                                align="center"
                                            >
                                                <TableCell>
                                                    {vehicle.regNo}
                                                </TableCell>
                                                <TableCell>{(vehicle.vehicleType.type).charAt(0).toUpperCase() + (vehicle.vehicleType.type).slice(1)}</TableCell>
                                                <TableCell>{(vehicle.fuelType).charAt(0).toUpperCase() + (vehicle.fuelType).slice(1)}</TableCell>
                                                <TableCell align="right" sx={{ paddingLeft: 1, paddingRight: 1 }}>
                                                    <Button
                                                        id={vehicle._id}
                                                        variant="contained"
                                                        color="primary"
                                                        // id={vehicle._id}
                                                        onClick={handleClick}
                                                        endIcon={<InfoOutlinedIcon />}
                                                    // sx={{display: {xs: 'none', sm: 'inline'}}}
                                                    >
                                                        More Info
                                                    </Button>
                                                    {/* <IconButton
                                                    aria-label="info"
                                                    // id={vehicle._id}
                                                    onClick={handleClick}
                                                    sx={{display: {xs: 'block', sm: 'none'}}}
                                                    color="primary"
                                                >
                                                    <InfoIcon/>
                                                </IconButton> */}
                                                </TableCell>
                                                <TableCell align="left" sx={{ paddingLeft: 1, paddingRight: 1 }}>
                                                    <Button
                                                        id={vehicle._id}
                                                        variant="contained"
                                                        color="error"
                                                        onClick={handleRemoveVehicle}
                                                        endIcon={<DeleteOutlineOutlinedIcon />}
                                                    // sx={{display: {xs: 'none', sm: 'inline'}}}
                                                    >
                                                        Remove
                                                    </Button>
                                                    {/* <IconButton
                                                    aria-label="delete"
                                                    color="error"
                                                    onClick={handleRemoveVehicle}
                                                    sx={{display: {xs: 'block', sm: 'none'}}}
                                                >
                                                    <DeleteIcon/>
                                                </IconButton> */}
                                                </TableCell>
                                            </TableRow>
                                        </div>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                        :
                        <Typography>
                            No Vehicles to show
                        </Typography>
                }

                <Typography align='center'>
                    <Button
                        variant="contained"
                        color="secondary"
                        disabled={!fullVehicles}
                        onClick={addVehicleButtonClick}
                        sx={{ marginTop: 3, alignSelf: 'center', paddingRight: 5, paddingLeft: 5 }}
                        startIcon={<AddCircleOutlineIcon />}
                    >
                        Add Vehicle
                    </Button>
                </Typography>

            </CardContent>

        </Card>
    )

}

export default VehicleListComponent;