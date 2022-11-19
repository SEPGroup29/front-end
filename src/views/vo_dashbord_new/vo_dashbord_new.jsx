import React, { useEffect, useState } from "react";
import { Grid, Typography } from "@mui/material";
import VehicleListComponent from "./vehicle_list_component";
import "../vo_dashbord_new/vo_dashbord.css";
import QRComponent from "./qr_component";
import FuelStationListComponent from "./fuel_stations_list_componennt";
import QueueDetailComponent from "./queue_details_component";
import vehicle_owner_services from "../../services/api/vehicle_owner_services";
import ErrorAlert from "../../alerts/errorAlert";
import { Container } from "@mui/system";
import VehicleDetails from "./vehicle_details";
import QueueDet from "./queue_det";
import WithdrawAlertBox from "./withdraw_alertbox";
import RemoveAlertBox from "./remove_alertbox";
import JoinQueue from "./join_queue";
import Loader from "../../components/loader/loader";
import { useNavigate } from "react-router-dom";
import fuel_station_services from "../../services/api/fuel_station_services";

const Vo_Dashboard_new = () => {
  const [vehicles, setVehicles] = useState([]);
  const [queueVehicles, setQueueVehicles] = useState([]);
  const [maxTokens, setMaxTokens] = useState([]);
  const [error, setError] = useState();
  const [voName, setVoName] = useState("");
  const [qrData, setQrData] = useState();
  const [remainingQuota, setRemainingQuota] = useState();
  const [loader, setLoader] = useState(false);
  const navigate = useNavigate();

  const [stations, setStations] = useState([]);

  const queues = [
    { vehicle: "XQ - 6799", token: 124, ongoing: 205 },
    { vehicle: "CAB - 4067", token: 14, ongoing: 123 },
  ];

  useEffect(() => {
    getVo();
    getVehicles();
    getFuelStations();
  }, []);

  const getVo = async () => {
    setLoader(true);
    try {
      const response = await vehicle_owner_services.getVehicleOwner();
      if (response) {
        if (response.status === 200)
          if (response.data.error) {
            setError(response.data.error);
            return;
          }
        setVoName(response.data.vo.user.firstName);
        setQrData({
          id: response.data.vo._id,
          NIC: response.data.vo.NIC,
        });
        setRemainingQuota(response.data.remainingQuota);
      } else {
        setError("Unknown Error Occured");
      }
    } catch (error) {
      navigate("/503-error");
    }
    setLoader(false);
  };

  const getVehicles = async () => {
    setLoader(true);
    try {
      const response = await vehicle_owner_services.showVehicles();
      if (response.data.error) {
        setError(response.data.error);
        return;
      }
      if (response.data.vehicles) {
        setVehicles(response.data.vehicles);
      }
      if (response.data.qVehicles) {
        setQueueVehicles(response.data.qVehicles);
      }
      if (response.data.maxTokens) {
        setMaxTokens(response.data.maxTokens);
      }
    } catch (error) {
      // setError("Unknown Error Occured")
      navigate("/503-error");
    }
    setLoader(false);
  };

  const getFuelStations = async () => {
    setLoader(true);
    try {
      const response = await fuel_station_services.getThreeFuelStations();
      console.log(response.data);
      if (response.data.error) {
        setError(response.data.error);
        return;
      } else if (response.data.fuelStations) {
        const fs = response.data.fuelStations;
        const tempStations = [];
        fs.map((station) =>
          tempStations.push({
            id: station._id,
            name: station.name,
            city: station.nearCity,
            petrol: station.tempPetrolStock ? station.tempPetrolStock : 0,
            diesel: station.tempDieselStock ? station.tempDieselStock : 0,
          })
        );
        console.log("Temp Stations:", tempStations);
        setStations(tempStations);
      } else if (response.data.message) {
        setStations([]);
      }
    } catch (error) {
      navigate("/503-error");
    }
    setLoader(false);
  };

  const [clickedVehicles, setClickedVehicles] = useState(false);
  const [vehicleDetails, setVehicleDetails] = useState();
  const handleClickVehicles = (event) => {
    vehicles.map((v) => {
      if (v._id === event.target.id) {
        setVehicleDetails(v);
        // console.log(v);
      }
    });
    // setVehicleDetails({ regNo: 'CAA - 1234', chassisNo: 123456789, type: 'Car', fuel: 'Petrol' })   // Get from database
    setClickedVehicles(true);
  };

  const [clickedQueues, setClickedQueues] = useState(false);
  const [queueDetails, setQueueDetails] = useState(null);
  const handleClickQueues = async (event) => {
    // setQueueDetails({ regNo: 'CAA - 1234', tokenNo: 124, totalTokens: 205, type: 'Petrol', fsName: 'Abeysekara Filling Station', city: 'Galle' })   // Get from database
    let qv;
    queueVehicles.map((v) => {
      if (v.regNo === event.target.id) {
        qv = v;
      }
    });
    try {
      setLoader(true);
      const response = await vehicle_owner_services.getQueueDetails(qv.queueId);
      if (response.data.error) {
        setError(response.data.error);
      }
      if (response.data.queue) {
        setQueueDetails({ vehicle: qv, queue: response.data.queue });
      }
    } catch (error) {
      setError("Unkoown error occured");
    }
    setLoader(false);
    setClickedQueues(true);
  };

  const [clickedWithdraw, setClickedWithdraw] = useState(false);
  const [withdrawingVehicle, setWithdrawingVehicle] = useState(null);
  const handleWithdrawQueues = (event) => {
    console.log("ID", event.target.id);
    queueVehicles.map((v) => {
      if (v.regNo === event.target.id) {
        console.log("V", v);
        setWithdrawingVehicle(v);
      }
    });
    setClickedWithdraw(true);
  };

  const [clickedRemove, setClickedRemove] = useState(false);
  const handleRemoveVehicle = (event) => {
    // setVehicleDetails({ regNo: 'CAA - 1234', chassisNo: 123456789, type: 'Car', fuel: 'Petrol' })   // Get from database
    // console.log(event.target.id)
    vehicles.map((v) => {
      if (v._id === event.target.id) {
        setVehicleDetails(v);
        // console.log(v);
      }
    });
    setClickedRemove(true);
  };

  const [clickedAdd, setClickAdd] = useState(false);
  const [stationId, setStationId] = useState();
  const handleAddQueue = (event) => {
    stations.map((s) => {
      if (s.id === event.target.id) {
        setStationId(s.id);
      }
    });
    setClickAdd(true);
  };

  return (
    <div className="vo-dashboard">
      {loader && <Loader />}
      {!loader && (
        <Container maxWidth="xl">
          <Typography variant="h3" color="#022B3A" fontWeight="lighter">
            Welcome, {voName}
          </Typography>
          {error && <ErrorAlert custom_message={error} />}
          <Grid
            container
            spacing={2}
            paddingTop={3}
            justifyContent="center"
            alignItems="center"
          >
            <Grid item xs={12} md={8} lg={7} paddingTop={2}>
              <VehicleListComponent
                handleClick={handleClickVehicles}
                handleRemoveVehicle={handleRemoveVehicle}
                vehicles={vehicles}
              />
            </Grid>
            <Grid item xs={12} md={4} lg={5} paddingTop={2}>
              <QRComponent qrData={qrData} remainingQuota={remainingQuota} />
            </Grid>
            <Grid item xs={12} md={8} lg={7} paddingTop={2}>
              <FuelStationListComponent
                handleClick={handleAddQueue}
                stations={stations}
                vehicles={vehicles}
              />
            </Grid>
            <Grid item xs={12} md={4} lg={5} paddingTop={2}>
              <QueueDetailComponent
                handleClick={handleClickQueues}
                handleWithdrawQueues={handleWithdrawQueues}
                vehicles={queueVehicles}
                maxTokens={maxTokens}
              />
            </Grid>
          </Grid>

          {/* Popup components */}
          {clickedVehicles && (
            <VehicleDetails
              clicked={clickedVehicles}
              setClicked={setClickedVehicles}
              vehicleDetails={vehicleDetails}
            />
          )}
          {clickedQueues && (
            <QueueDet
              clicked={clickedQueues}
              setClicked={setClickedQueues}
              queueDetails={queueDetails}
            ></QueueDet>
          )}
          {clickedWithdraw && (
            <WithdrawAlertBox
              clicked={clickedWithdraw}
              setClicked={setClickedWithdraw}
              withdrawingVehicle={withdrawingVehicle}
            ></WithdrawAlertBox>
          )}
          {clickedRemove && (
            <RemoveAlertBox
              clicked={clickedRemove}
              setClicked={setClickedRemove}
              vehicleDetails={vehicleDetails}
            ></RemoveAlertBox>
          )}
          {clickedAdd && (
            <JoinQueue
              vehicles={vehicles}
              clicked={clickedAdd}
              setClicked={setClickAdd}
              stationId={stationId}
            />
          )}
        </Container>
      )}
    </div>
  );
};

export default Vo_Dashboard_new;
