import { React } from "react";
import {
  Button,
  Card,
  CardContent,
  CardHeader,
  Typography,
} from "@mui/material";
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
import SearchIcon from "@mui/icons-material/Search";
import { FollowTheSigns } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { Container } from "@mui/system";

// function createData(fuelStation , petrolStock , dieselStock , petrolQueue , dieselQueue){
//     return {fuelStation, petrolStock, dieselStock , petrolQueue , dieselQueue};
// }

// const rows = [
//     createData('Walasmulla AK' , 60549 , 24769 , 125 , 200),
//     createData('Walasmulla AK' , 60549 , 24769 , 125 , 200),
//     createData('Walasmulla AK' , 60549 , 24769 , 125 , 200),
// ]

const FuelStationListComponent = ({ handleClick, stations, vehicles }) => {
  const navigate = useNavigate();
  const navigateToFuelStations = () => {
    navigate("/fuel-stations", { state: { vehicles } });
  };

  return (
    <Card
      sx={{
        alignSelf: "center",
        borderRadius: 5,
        height: { xs: "none", md: "430px" },
        overflow: "auto",
      }}
      variant={"outlined"}
    >
      <CardHeader
        sx={{ backgroundColor: "#E1E5F2" }}
        title={
          <Typography
            variant="h5"
            sx={{
              textAlign: "center",
              fontWeight: "medium",
            }}
          >
            Fuel Stations List
          </Typography>
        }
      />

      <CardContent sx={{ alignContent: "center" }}>
        {stations.length > 0 ? (
          <TableContainer component={Paper} sx={{ boxShadow: 0, height: 250 }}>
            <Table aria-label="simple table" sx={{ height: "max-content" }}>
              <TableHead>
                <TableRow>
                  <TableCell sx={{ textAlign: "center" }}>
                    {" "}
                    Fuel Station Name
                  </TableCell>
                  <TableCell sx={{ textAlign: "center" }}>
                    {" "}
                    Remaining Petrol Stock
                  </TableCell>
                  <TableCell sx={{ textAlign: "center" }}>
                    {" "}
                    Remaining Diesel Stock{" "}
                  </TableCell>
                  {/* <TableCell> Petrol Queue </TableCell>
                                <TableCell> Diesel Queue </TableCell> */}
                  <TableCell></TableCell>
                  <TableCell></TableCell>
                  <TableCell></TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {stations.map((row) => (
                  <TableRow
                    key={row.number}
                    sx={{
                      "&:last-child td, &:last-child th": { border: 0 },
                      alignSelf: "center",
                      alignContent: "center",
                    }}
                  >
                    <TableCell sx={{ textAlign: "center" }}>
                      {row.name}, {row.city}
                    </TableCell>
                    <TableCell sx={{ textAlign: "center" }}>
                      {row.petrol}L
                    </TableCell>
                    <TableCell sx={{ textAlign: "center" }}>
                      {row.diesel}L
                    </TableCell>
                    <TableCell
                      align="right"
                      sx={{ paddingLeft: 1, paddingRight: 1 }}
                    >
                      <Button
                        variant="contained"
                        color="primary"
                        sx={{ display: { xs: "none", sm: "inline" } }}
                        onClick={handleClick}
                        id={row.id}
                      >
                        <FollowTheSigns /> Join
                      </Button>
                      <IconButton
                        onClick={handleClick}
                        aria-label="info"
                        sx={{ display: { xs: "block", sm: "none" } }}
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
        ) : (
          <Container>
            <div className="content">
              <h3
                style={{
                  textAlign: "center",
                  marginBottom: "3px",
                  marginTop: "10px",
                  color: "#1F7A8C",
                }}
                class="notfound_header"
              >
                No Recent Fuel Stations Found
              </h3>
              <p style={{ textAlign: "center", color: "#022B3A" }}>
                Recently accessed fuel stations will be shown here
              </p>
            </div>
            <div className="image">
              <FollowTheSigns
                sx={{
                  fontSize: {
                    xs: "10rem",
                    lg: "12rem",
                  },
                  color: "#1F7A8C",
                  lineHeight: 1,
                }}
              />
            </div>
          </Container>
        )}

        <Typography align="center">
          <Button
            variant="contained"
            // href="/fuel-stations"
            onClick={navigateToFuelStations}
            color="secondary"
            sx={{
              marginTop: 3,
              alignSelf: "center",
              paddingRight: 5,
              paddingLeft: 5,
              "&:hover": { color: "white" },
            }}
            startIcon={<SearchIcon />}
          >
            Search Fuel Station
          </Button>
        </Typography>
      </CardContent>
    </Card>
  );
};

export default FuelStationListComponent;
