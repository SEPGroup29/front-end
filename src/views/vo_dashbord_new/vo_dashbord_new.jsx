import React, {useEffect, useState} from "react";
import {Grid, Typography} from "@mui/material";
import VehicleListComponent from "./vehicle_list_component";
import "../vo_dashbord_new/vo_dashbord.css"
import QRComponent from "./qr_component";
import FuelStationListComponent from "./fuel_stations_list_componennt";
import QueueDetailComponent from "./queue_details_component";
import vehicle_owner_services from "../../services/api/vehicle_owner_services";

const Vo_Dashboard_new = () => {
    const [vehicles , setVehicles] = useState([])
    const [error, setError] = useState()
    const [voName , setVoName] = useState('')

    useEffect( () =>{
        getVoName()
        getVehicles()
    }, [])

    const getVoName = async () => {
      try{
          const response = await vehicle_owner_services.getVehicleOwnerName()
          if (response){
              if (response.status === 200)
                  setVoName(response.data.name)
              else if (response.status === 400)
                  setError("Internal Server Error")
          }
          else {
              setError("Unknown Error Occured")
          }
      }
      catch (error){
          console.log(error)
      }
    }

    const getVehicles = async () => {
      try {
          const response = await vehicle_owner_services.showVehicles()
          if (response){
              if (response.status === 200)
                  setVehicles(response.data)
              else if (response.status === 400)
                  setError("Internal Server Error")
          }
          else
              setError("Unknown Error Occured")
      }
      catch (error){
          console.log(error)
      }
    }

    return (
        <div className="vo-dashboard">
            <Typography variant="h3" color="#022B3A" fontWeight='lighter'>
                Welcome , {voName},
            </Typography>
        <Grid container maxWidth="xl" spacing={2} paddingTop={3} alignItems="center">
            <Grid item xs={12} md={8} lg={7} paddingTop={2}>
                <VehicleListComponent vehicles={vehicles} />
            </Grid>
            <Grid item xs={12} md={4} lg={5} paddingTop={2}>
                <QRComponent />
            </Grid>
            <Grid item xs={12} md={8} lg={7} paddingTop={2}>
                <FuelStationListComponent />
            </Grid>
            <Grid item xs={12} md={4} lg={5} paddingTop={2}>
                <QueueDetailComponent />
            </Grid>
        </Grid>

        </div>
    )
}

export default Vo_Dashboard_new;